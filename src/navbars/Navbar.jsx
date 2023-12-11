import React from "react";
import netImage from "../images/netflix.png";
import { Box, Link, List, ListItem } from "@mui/material";
import { navbarLogic } from "./navbarLogic";

const Navbar = () => {
  const { isSignUpPage } = navbarLogic();
  const { isStartHome } = navbarLogic();

  return (
    <div
      className={`absolute flex flex-col w-full h-full ${
        isStartHome ? "relative bg-gray-400" : ""
      }`}
    >
      <div
        className={`flex flex-row justify-between h-[90px] ${
          isStartHome ? "" : "border"
        }`}
      >
        {!isStartHome && (
          <img
            src={netImage}
            alt="Network"
            className="w-[160px] h-[50px] mt-[20px] ml-[34px]"
          />
        )}
        {isStartHome && (
          <h1 className="google text-[45px] mt-[8px] ml-[10px]">MyNet</h1>
        )}
        <div className="flex flex-col justify-center text-center mr-[50px]">
          <Link
            href={isSignUpPage ? "/SignOut" : "/SignIn"}
            underline="hover"
            sx={{
              color: "#1A4755",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            {!isStartHome && <div>{isSignUpPage ? "Sign Out" : "Sign In"}</div>}
          </Link>
          {isStartHome && (
            <div className="flex flex-row">
              <h1>Hi,</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
