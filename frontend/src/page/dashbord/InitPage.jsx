import React, { useState } from "react";
import ContainerDiv from "../../component/ContainerDiv";
import Error from "../../component/common/error";
import Notification from "../../component/common/notification";
import Chart from "../../component/dashboard/Chart";
import CircleChart from "../../component/dashboard/CircleChart";
import Loan from "../../component/dashboard/Loan";
import CustomDonutChart from "../../component/dashboard/piechart";
import Header from "../../component/common/header";

const InitPage = () => {
  const [error, setError] = useState("");
  const [notification, setNotification] = useState("");

  return (
    <ContainerDiv>
      <div className="flex flex-col gap-5">
        <div>
          <h2 className=" text-[28px] font-semibold">受電結果</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <Chart />
          {/* <CircleChart /> */}
          <Loan />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <CustomDonutChart />
        </div>

      </div>
      <Error content={error} />
      <Notification content={notification} />
    </ContainerDiv>
  );
}

export default InitPage;