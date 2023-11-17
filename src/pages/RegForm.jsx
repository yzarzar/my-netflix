import Navbar from "../navbars/Navbar.jsx";
import React from "react";
import {Box, Button, TextField} from "@mui/material";
import Checkbox from '@mui/joy/Checkbox';
import {useNavigate} from "react-router-dom";


export const RegForm = () => {
    const nav = useNavigate();
    const nextButtonHandler = () => {
        nav('/signUp');
    }
    return (
        <>
            <div className='justify-center w-full h-[618px] flex flex-row justify-center'>
                <div className='w-full h-[530px] text-center'>
                    <form action="#" className='mt-[35px] flex flex-row justify-center'>
                        <div className='w-[437px] h-[450px] flex flex-col'>
                            <div className='flex flex-col mt-[13px]'>
                                <span className="text-[13px] font-light text-left">
                                    STEP <b>1</b> OF <b>3</b>
                                </span>
                                <h1 className='text-left text-[34px] font-medium text-gray-950 leading-[40px] acc mb-[20px] mt-[5px]'>Create a password to start your membership</h1>
                            </div>
                            <div className='flex flex-col w-full'>
                                <div className='w-full'>
                                    <p className='text-gray-700 text-[18px] text-left leading-[30px]'>Just a few more steps and you're done!</p>
                                </div>
                                <p className='text-gray-700 text-[18px] text-left w-[300px] leading-[30px]'>We hate paperwork, too.</p>
                                <ul className='mt-[16px]'>
                                    <li className='mb-[10px]'>
                                        <Box
                                            component="form"
                                            sx={{
                                                "& .MuiTextField-root": { m: 0, width: "100%" }, // Set width to "100%"
                                            }}
                                            noValidate
                                            autoComplete="off"
                                        >
                                            <TextField
                                                id="outlined-password-input"
                                                label="Email"
                                                type="email"
                                                fullWidth
                                            />
                                        </Box>
                                    </li>
                                    <li>
                                        <Box
                                            component="form"
                                            sx={{
                                                "& .MuiTextField-root": { m: 0, width: "100%" }, // Set width to "100%"
                                            }}
                                            noValidate
                                            autoComplete="off"
                                        >
                                            <TextField
                                                id="outlined-password-input"
                                                label="Add a password"
                                                type="password"
                                                autoComplete="current-password"
                                                fullWidth
                                            />
                                        </Box>
                                    </li>
                                    <li className='text-left mt-[9px]'>
                                        <Checkbox color="success" size="sm" label="Please do not email me Netflix special offers." />
                                    </li>
                                </ul>
                            </div>
                            <div onClick={nextButtonHandler}>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    sx={{
                                        height: "4rem",
                                        fontSize: "1.2rem",
                                        backgroundColor: "red",
                                        fontWeight: "bold",
                                        marginTop: "15px"
                                    }}
                                >
                                    Next
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
