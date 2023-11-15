import React from "react";
import { RxDoubleArrowRight } from "react-icons/rx";
import { TextField, Box, Button, withTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import netImage from "../images/net.png";

const Home = () => {
  const nav = useNavigate();
  const loginHandler = () => {
    nav(`/signin`)
  };
  const createAccountHandler = () => {
    nav(`/CreateAcc`)
  };
  return (
    <>
      <div className="flex flex-col w-full bg-gradient-to-r from-blue-500 to-green-500">
        <div className="w-full h-[700px] bg-img">
          <div className="w-full">
            <div className="relative flex flex-col w-full">
              <div className="w-full h-[200px] justify-center flex flex-row">
                <div className="w-[1100px] h-full  flex flex-row justify-between">
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
              </div>
              <div className="w-full h-[400px] mt-[200px] absolute grid grid-cols-1 gap-4 place-items-center">
                <div className="flex flex-col">
                  <h1 className="text-5xl font-extrabold text-center text-white">
                    Unlimited movies, TV shows, and more
                  </h1>
                  <p className="mt-4 text-2xl font-bold text-center text-white">
                    Watch anywhere. Cancel anytime
                  </p>
                  <div className="mt-7">
                    <h3 className="mt-4 text-2xl font-bold text-center text-white">
                      Ready to watch? Enter your email to create or restart your
                      membership.
                    </h3>
                    <div className="flex mt-4 h-[50px] justify-center">
                      <div className="flex h-full w-[800px]">
                        <div class="flex flex-col sm:flex-row items-center justify-between w-full h-full">
                          <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            style={{
                              width: "100%",
                              borderRadius: "0.375rem",
                              border: "1px solid #ffd700", 
                              outline: "none",
                              padding: "0.5rem",
                              height: "60px",
                              backgroundColor: "transparent",
                              color: "#2d3748", 
                            }}
                            onFocus={(e) =>
                              (e.currentTarget.style.color = "#ffffff")
                            } 
                            onBlur={(e) =>
                              (e.currentTarget.style.color = "#2d3748")
                            } 
                          />
                          <button onClick={createAccountHandler} className="w-[350px] ms-3 bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md flex flex-row">
                            <h1 className="mt-[6px] ml-9 text-xl">
                              Get Started{" "}
                            </h1>
                            <RxDoubleArrowRight
                              size={30}
                              className="ml-2 font-extrabold text-white h-[42px]"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[1050px] mt-2 bg-black flex flex-col justify-center">
          <div className="w-full h-[899px] bg-red-400 flex flex-row justify-center">
            <div className="h-full w-[1130px] bg-white">
              <div className="flex flex-row justify-center w-full bg-yellow-400">
                <h1 className="text-5xl font-extrabold text-white custom-h1">
                  Frequently Asked Questions
                </h1>
              </div>
              <div className="flex flex-col w-full h-[851px] bg-orange-400"></div>
            </div>
          </div>
        </div>
      </div> 
    </>
  );
};

export default Home;


