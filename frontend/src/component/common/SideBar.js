import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { CiPen } from "react-icons/ci";
import { AiOutlineSave } from "react-icons/ai";
import { HiOutlineCommandLine } from "react-icons/hi2";
import { VscListUnordered } from "react-icons/vsc";
import SideBtn from "../SideBtn";

const SideBar = () => {
    const navigate = useNavigate('');
    const handlekwgenerate = () => {
        navigate("/kwgenerate");
    };
    const handlesavedkw = () => {
        navigate("/savedkw");
    };
    const handlearticleconfig = () => {
        navigate("/keyword/article-configuration");
    };
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
        </aside>
    );
};

export default SideBar;
