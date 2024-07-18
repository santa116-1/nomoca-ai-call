import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { CiPen } from "react-icons/ci";
import { AiOutlineSave } from "react-icons/ai";
import { HiOutlineCommandLine } from "react-icons/hi2";
import { CiSettings } from "react-icons/ci";
import { VscListUnordered } from "react-icons/vsc";
import { FaCrown } from "react-icons/fa";
import Avatar from "./Avatar";
import Progress from "./Progress";
import SideBtn from "../SideBtn";



const SideBar = () => {

    const navigate = useNavigate('');
    const apiUrl = process.env.REACT_APP_API_URL;
    const token = localStorage.getItem("accessToken");

    const [premiumStatus, setPremiumStatus] = useState(null);
    const [email, setEmail] = useState("example@example.com");

    const handlekwgenerate = () => {
        navigate("/kwgenerate");
    };

    const handlesavedkw = () => {
        navigate("/savedkw");
    };

    const handlearticleconfig = () => {
        navigate("/keyword/article-configuration");
    };
    const handleUpgrade = () => {
        navigate("/setting-payment");
    }

    useEffect(() => {
        const checkPremium = () => {
            axios.post(
                `${apiUrl}/api/authentication/check-premium/`,
                {},
                {
                    headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
                .then(response => {
                    setPremiumStatus(response.data.status);
                })
                .catch(error => {
                    if (error?.response?.data && error?.response?.status === 500) {
                        setPremiumStatus(error?.response?.data?.status);
                    } else {
                        setPremiumStatus('is not premium');
                    }
                });
        };
        const getUserEmail = async () => {
            await axios.get(
                `${apiUrl}/api/authentication/get-useremail/`,
                {
                    headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
                .then(response => {
                    setEmail(response.data.email)
                })
                .catch(error => {
                    console.error('Error fetching user info:', error);
                });
        };

        getUserEmail();
        checkPremium();
    }, [apiUrl, token]);

    return (
        <aside className={`flex top-0 left-0 flex-col justify-between fixed z-50 h-full w-[300px] transition-transform duration-300 translate-x-0 sm:bg-transparent"}`}>
            <div className="hidden xl:block">

                <div className="m-4">
                    <ul className="flex flex-col mb-4">
                        <li>
                            <Link to="/keyword">
                                <SideBtn icon={<CiPen size={24} />} onClick={handlekwgenerate} label="受電結果 (クリニック用)" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/keyword/savedkeywords">
                                <SideBtn icon={<AiOutlineSave size={24} />} onClick={handlesavedkw} label="受電結果 (管理者用)" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/keyword/article-configuration">
                                <SideBtn icon={<HiOutlineCommandLine size={24} />} onClick={handlearticleconfig} label="パスワード変更" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/keyword/article-preview">
                                <SideBtn icon={<VscListUnordered size={24} />} onClick={() => { }} label="利用者情報 (管理者のみ)" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="hidden xl:block">
                <div className="flex flex-col pl-8 gap-4 mb-6">
                    <div className="flex items-center gap-4">
                        <div className=" relative">
                            <Avatar />
                            {premiumStatus === "is premium" ? (
                                <div className=" absolute top-0 right-[-5px]">
                                    <FaCrown size={20} color="#ff9b00" />
                                </div>) :
                                (<></>)
                            }
                        </div>

                        <div className="flex flex-col items-center justify-between">
                            <p className="text-base">NAMENAMENAME</p>
                            <p className="text-[14px]">{email}</p>
                        </div>
                    </div>
                </div>
            </div>

        </aside>
    );
};

export default SideBar;
