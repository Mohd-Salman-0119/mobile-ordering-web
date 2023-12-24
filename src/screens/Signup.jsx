import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconButton from "../components/IconButton";
import React, { useRef, useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const formRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    console.log(user);
    formRef.current.reset();
  };

  return (
    <div className="flex justify-center items-center">
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
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex gap-1 items-center border rounded-md w-full p-1">
          <FontAwesomeIcon icon={faEnvelope} />
          <input
            type="email"
            className="text-md border-none outline-none bg-transparent w-full p-2"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex gap-1 items-center border rounded-md p-1">
          <FontAwesomeIcon icon={faLock} />
          <input
            type="password"
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
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
