import React from "react";
import Navbar from "../navbars/Navbar";
import deviceImage from '../images/optndev.png';
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

const Registration = () => {
    const nav = useNavigate();
    const buttonHandler = () => {
        nav('/regForm')
    }
    return (
        <>
            <Navbar/>
            <div className='flex flex-row justify-center mt-[15px] w-full h-[567px]'>
                <div className='w-[340px] h-full bg-white flex flex-col'>
                    <div className='flex flex-row justify-center'>
                        <img src={deviceImage} alt="Devices" className='w-[260px] h-[65px] mt-[100px]'/>
                    </div>
                    <div className='w-full flex flex-col'>
                        <div className='w-full h-full flex flex-row justify-center mt-[40px]'>
                            <span className="text-xs">
                                STEP <b>1</b> OF <b>3</b>
                            </span>
                        </div>
                        <h1 className='text-center text-[34px] font-medium text-gray-950 leading-[40px] acc mb-[20px] mt-[5px]'>Finish setting up your account</h1>
                        <div className='flex flex-row w-full justify-center'>
                            <p className='text-gray-700 text-[18px] text-center w-[300px] leading-[30px]'>Netflix is personalized for you. Create a password to watch on any device at any time.</p>
                        </div>
                    </div>
                    <div className='w-full mt-[25px]'>
                        <Button
                            variant="contained"
                            fullWidth
                            sx={{
                                height: "4rem",
                                fontSize: "1.2rem",
                                backgroundColor: "red",
                                fontWeight: "bold",
                            }}
                            onClick={buttonHandler}
                        >
                            Next
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Registration;
