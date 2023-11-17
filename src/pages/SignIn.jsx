import { Button, Checkbox, FormLabel, Link } from "@mui/material";
import React from 'react'
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import netImage from '../images/net.png';
import HomeNav from "../navbars/HomeNav.jsx";

const SignIn = () => {
  return (
    <>
      <div className="relative flex w-full bg-img">
        <div className=" w-full h-[100px] flex flex-row">
          <div className="absolute flex flex-row justify-around w-full h-full">
            <div className="h-[650px] w-[450px] mt-[100px] rounded-[10px] flex justify-center items-center bg-gray-900/75">
              <div className="h-[550px] w-[333px] flex flex-col">
                <div className="w-full h-[378px]">
                  <h1 className="mb-6 text-3xl italic font-extrabold text-white">
                    Sign In
                  </h1>
                  <Box
                    sx={{
                      display: "grid",boxShadow: 'initial'
                    }}
                  >
                    <TextField
                      type="email"
                      name="email"
                      label="Email address"
                      variant="outlined"
                      color="warning"
                      helperText="Please enter your email address"
                      FormHelperTextProps={{
                        style: { color: "white" },
                      }}
                      InputLabelProps={{
                        style: { color: "white" },
                      }}
                      InputProps={{
                        style: { color: "white",backgroundColor: '#536A94' },
                      }}
                      className="w-full text-lg border-gray-300 rounded-l-[20px] shadow-inner focus:outline-none focus:ring focus:border-blue-300"
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "grid",
                    }}
                  >
                    <TextField
                      type="password"
                      name="password"
                      label="Password"
                      variant="outlined"
                      color="warning"
                      helperText="Please enter your password"
                      FormHelperTextProps={{
                        style: { color: "white" },
                      }}
                      InputLabelProps={{
                        style: { color: "white" },
                      }}
                      InputProps={{
                        style: { color: "white",backgroundColor: '#536A94' },
                      }}
                      className="w-full text-lg border-gray-300 rounded-l-[20px] shadow-inner focus:outline-none focus:ring focus:border-blue-300"
                    />
                  </Box>
                  <Button
                    variant="contained"
                    disableElevation
                    fullWidth
                    sx={{
                      height: "60px",
                      mt: "23px",
                      mb: "2px",
                      backgroundColor: '#D80A03',
                      fontSize: '1rem',
                      fontWeight: 'bold'
                    }}
                  >
                    Sign In
                  </Button>
                  <div className="flex flex-row w-full bg-white rounded-sm">
                    <Checkbox
                      className="text-red-500"
                      label={FormLabel}
                      defaultChecked
                      size="small"
                      labelPlacement="start"
                      sx={{
                        "&.MuiIconButton-root": {
                          border: "2px solid white",
                          borderRadius: "4px", 
                        },
                      }}
                    />
                    <h6 className="mt-3 text-xs italic font-light text-sky-400/75">Remember me</h6>
                    <Link href="#levels" level="title-lg">
                      <h1 className="mt-3 ml-[140px] text-xs text-yellow-600">Need help?</h1>
                    </Link>
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex flex-row">
                    <h1 className="text-sky-400/75">New to Netflix?</h1>
                    <Link href="/" level="title-lg">
                      <h1 className="ml-2 text-yellow-400">Sign up now.</h1>
                    </Link>
                  </div>
                  <div className="flex flex-col">
                    <p className="w-full my-2 text-xs text-sky-400/100">
                      This page is protected by Google reCAPTCHA to ensure
                      you're not a bot.{" "}
                      <a href="#" className="text-yellow-500 underline">
                        Learn more.
                      </a>
                    </p>
                  </div>
                  <div className="flex flex-col w-full h-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignIn
