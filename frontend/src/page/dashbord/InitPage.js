import React, { useState } from "react";
import ContainerDiv from "../../component/ContainerDiv";
import Error from "../../component/common/error";
import Notification from "../../component/common/notification";
import Chart from "../../component/dashboard/Chart";
import CircleChart from "../../component/dashboard/CircleChart";

const InitPage = () => {
  const [error, setError] = useState("");
  const [notification, setNotification] = useState("");
  
  return (
    <ContainerDiv>
      <div className="flex flex-col gap-5">
        <div>
          <h2 className=" text-[28px] font-semibold">受電結果</h2>
        </div>
        <Chart/>
        <CircleChart/>
      </div>
      <Error content={error} />
      <Notification content={notification} />
    </ContainerDiv>
  );
}

export default InitPage;