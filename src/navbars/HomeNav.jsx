import React from 'react'
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import netImage from "../images/net.png";

const HomeNav = () => {
  const nav = useNavigate();
  const loginHandler = () => {
    nav(`/signin`)
  };
  return (
    <>
      <div className="w-[1250px] h-full  flex flex-row justify-between">
        <div className="shadow-inner">
          <img
              src={netImage}
              alt="Network"
              className="w-[250px] h-[120px]"
          />
        </div>
        <div onClick={loginHandler} className="mt-10 ">
          <Button variant="contained">
            <h1 className="font-extrabold text-1xl">Sing In</h1>
          </Button>
        </div>
      </div>
    </>
  )
}

export default HomeNav
