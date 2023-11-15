import { Button, Box, TextField, Link } from "@mui/material";
import React from "react";
import netImage from "../images/net.png";

const SignUp = () => {
  return (
    <>
      <div className="w-full h-full bg-white">
        <div className="flex flex-col w-full h-full">
          <div className="flex flex-row justify-between border">
            <img src={netImage} alt="Network" className="w-[210px] h-[110px]" />
            <div className="w-[190px] h-200px mt-9 mr-5">
              <Link
                href="/signin1"
                underline="hover"
                sx={{ color: "#1A4755", fontWeight: "bold", fontSize: "20px" }}
              >
                {"Sing In"}
              </Link>
            </div>
          </div>
          <div className="w-full h-[640px] flex flex-row justify-center">
            <div className="w-[800px] h-[470px] flex flex-row justify-center mt-[35px]">
              <div className="h-full w-[420px]">
                <form>
                  <div className="flex flex-col w-full h-full">
                    <div>
                      <span className="text-xs">
                        STEP <b>1</b> OF <b>3</b>
                      </span>
                      <h1 className="text-3xl font-semibold">
                        <span>
                          Welcome back! <br /> Joining Netflix is easy.
                        </span>
                      </h1>
                      <div className="mt-2">
                        <span className="text-[18px] text-gray-900 font-light">
                          Enter your password and you'll be watching in no time.
                        </span>
                      </div>
                      <div className="flex flex-col mt-3">
                        <h5 className="text-[15px] text-gray-900 font-light">
                          Email
                        </h5>
                        <h5 className="text-[15px] font-bold">
                          john@gmail.com
                        </h5>
                      </div>
                      <div className="w-full mt-4">
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
                            label="Enter your password"
                            type="password"
                            autoComplete="current-password"
                            fullWidth
                          />
                        </Box>
                        <div className="mt-5">
                          <Link href="#" underline="hover">
                            {"Forgot your password?"}
                          </Link>
                        </div>
                        <div className="w-full mt-9">
                          <Button
                            variant="contained"
                            fullWidth
                            sx={{
                              height: "4rem",
                              fontSize: "1.3rem",
                              backgroundColor: "red",
                              fontWeight: "bold",
                            }}
                          >
                            Next
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
