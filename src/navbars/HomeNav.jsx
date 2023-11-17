import React, {useState} from 'react'
import { Button } from "@mui/material";
import {useLocation, useNavigate} from "react-router-dom";
import netImage from "../images/net.png";

const HomeNav = () => {
  const [animate,setAnimate] = useState(false)
  const nav = useNavigate();
  const location = useLocation();
  const showItem = location.pathname === '/signIn';
  const loginHandler = () => {
    nav(`/signIn`)
    setAnimate(true)
  };
  return (
    <>
      <div className={`w-[1250px] h-full  flex flex-row justify-between ${animate ? " work" : " no"}`}>
        {showItem && (
            <div className="shadow-inner">
              <img
                  src={netImage}
                  alt="Network"
                  className="w-[250px] h-[120px]"
              />
            </div>
        )}
        {!showItem && (
            <div className="shadow-inner ml-[134px]">
              <img
                  src={netImage}
                  alt="Network"
                  className="w-[250px] h-[120px]"
              />
            </div>
        )}
        {!showItem && (
            <div onClick={loginHandler} className="mt-10 ">
              <Button variant="contained">
                <h1 className="font-extrabold text-1xl">Sing In</h1>
              </Button>
            </div>
        )}

      </div>
    </>
  )
}

export default HomeNav
