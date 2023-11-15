import React from 'react'
import netImage from "../images/netflix.png";
import { Link } from "@mui/material";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-col w-full h-full">
        <div className="flex flex-col w-full h-full">
          <div className="flex flex-row justify-between border">
            <img src={netImage} alt="Network" className="w-[160px] h-[54px] mt-[18px] ml-[40px] mb-[18px]" />
            <div className="flex flex-col justify-center text-center mr-[50px]">
              <Link href="/signinFromCreateAcc" underline="hover" sx={{ color: '#1A4755', fontWeight: 'bold', fontSize: '20px' }}>
                {'Sing In'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
