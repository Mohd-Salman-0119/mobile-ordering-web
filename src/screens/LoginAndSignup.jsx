import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import { useSelector } from "react-redux";

const LoginAndSignup = () => {
  const [toggle, setToggle] = useState(false);
  const auth = useSelector((store) => store.themeReducer.auth);

  const handleToggle = () => {
    setToggle((p) => !p);
  };

  return (
    <div>
      {toggle ? <Signup onClick={handleToggle} /> : <Login onClick={handleToggle} />}
    </div>
  );
};

export default LoginAndSignup;
