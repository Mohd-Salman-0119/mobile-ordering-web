import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/authReducer/action";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const formRef = useRef(null);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
    formRef.current.reset();
  };

  return (
    <div className="flex justify-center items-center mt-10">
      <form
        className="flex flex-col gap-2 w-1/3"
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <div className="flex gap-1 items-center border rounded-md w-full p-1">
          <FontAwesomeIcon icon={faUser} />
          <input
            type="text"
            className="text-md border-none outline-none bg-transparent w-full p-2"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex gap-1 items-center border rounded-md p-1">
          <FontAwesomeIcon icon={faLock} />
          <input
            type="text"
            className="text-md outline-none border-none bg-transparent w-full p-2"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className={
            "border justify-center rounded-md bg-green-700 text-white p-2"
          }
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
