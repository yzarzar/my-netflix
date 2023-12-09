import React from "react";
import netImage from "../images/netflix.png";
import { Link } from "@mui/material";
import { useLocation } from "react-router-dom";
import { navbarLogic } from "./navbarLogic";

const Navbar = () => {                                                                                                                                                                                                                                                                                    
  const { isSignUpPage } = navbarLogic();

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-row justify-between border h-[90px]">
        <img src={netImage} alt="Network" className="w-[160px] h-[50px] mt-[20px] ml-[34px]" />
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
            {isSignUpPage ? "Sign Out" : "Sign In"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
