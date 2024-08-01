import React from "react";
import ClientError from "../../component/error/ClientError";

const ClientErrorPage = () => {
  return (
    <>
      <div className="h-[calc(100vh-60px)]">
        <ClientError />
      </div>
    </>
  );
};

export default ClientErrorPage;
