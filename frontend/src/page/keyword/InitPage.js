import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "../../component/Button";
import ContainerDiv from "../../component/ContainerDiv";
import KwInput from "../../component/KwInput";
import KwTable from "../../component/KwTable";
import Title from "../../component/Title";
import SubTitle from "../../component/SubTitle";
import Error from "../../component/common/error";
import Notification from "../../component/common/notification";
import api from "../../api";
import { addTitle, getAllTitles, clearTitles } from '../../component/indexDB/title';

const InitPage = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [mainKeyword, setMainKeyword] = useState();
  const [error, setError] = useState("");
  const [notification, setNotification] = useState("");
  const [category, setCategory] = useState("");
  const [selectedKeywords, setSelectedKeywords] = useState([]);
  const [titles, setTitles] = useState([]);
  const versionName = useSelector((state) => state.version.versionName);

  const navigate = useNavigate("");
  const apiUrl = process.env.REACT_APP_API_URL;
  const token = localStorage.getItem("accessToken");

  const handleSaveKeyword = () => {
    setNotification("");
    setError("");
    console.log(selectedKeywords.length);
    setTimeout(() => {
      if (selectedKeywords.length > 0) {
        const keywordsToSend = selectedKeywords.map(keyword => ({
          keyword: keyword.keyword,
          volume: keyword.avg_monthly_searches
        }));
        axios
          .post(`${apiUrl}/api/generate/save_keywords/`, { keywords: keywordsToSend, main_keyword: mainKeyword }, {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            console.log('キーワードの保存に成功:', response.data);
            setNotification("キーワードの保存に成功");
          })
          .catch((error) => {
            console.error('キーワード保存エラー:', error);
          });
      } else {
        setError("選択されたキーワードがありません。")
      }
    }, 0);
  };

  const handleCreateHeading = () => {
    console.log(selectedKeywords);
    setError("");
    setTimeout(() => {
      if (selectedKeywords.length > 0) {
        const keywordsToSend = selectedKeywords.map(keyword => ({
          keyword: keyword.keyword,
          volume: keyword.avg_monthly_searches
        }));

        axios
        .post(`${apiUrl}/api/generate/save_keywords/`, { keywords: keywordsToSend, main_keyword: mainKeyword }, {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log('キーワードの保存に成功:', response.data);
        })
        .catch((error) => {
          console.error('キーワード保存エラー:', error);
        });

        axios
          .post(`${apiUrl}/api/generate/create-heading/`, { keywords: keywordsToSend, main_keyword: mainKeyword, versionName: versionName }, {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
          })
          .then(async (response) => {
            await clearTitles();
            console.log('Title Generations successfully:', response.data.title);
            setNotification("タイトルが正常に作成されました。");
            // navigate("/keyword/article-configuration")
            const title = response.data.title;
            await addTitle({title});
          })
          .catch((error) => {
            setError(error.response.data.error);
          });
      } else {
        setError("選択されたキーワードがありません。");
      }
    }, 0);
  }
  return (
    <ContainerDiv>
      <div className="flex flex-col gap-5">
        <div>
          <h2 className=" text-[28px] font-semibold">受電結果</h2>
        </div>
      </div>
      <Error content={error} />
      <Notification content={notification} />
    </ContainerDiv>
  );
}

export default InitPage;