import React from "react";
import { BiSolidCommentError } from "react-icons/bi";
import { useSelector } from "react-redux";
const NotFoundPage = () => {

  return (
    <div className={` mt-20`}>
      <div className={`flex justify-center items-center text-4xl flex-col`}>
        <BiSolidCommentError />
        <h1>Not Found Page</h1>
      </div>
    </div>
  );
};

export default NotFoundPage;
