import React, { useState } from "react";
import { LogOut, LogoFull } from "../image";
import Navbar from "./navber";
import { sidebar } from "../map";
import { useNavigate } from "react-router-dom";
import MyAccaunt from "./myaccaunt";
import Bill from "./bill";
import Support from "./support";
import Servis from "./servis";

function Dashboard(props) {
  const navigate = useNavigate();
  const [openPage, setOpenPage] = useState(2);

  return (
    <div className="bg-bleck w-full h-[100%]">
      <div className="container relative bg-bleck w-[100%] h-[100%]">
        <Navbar />
        <div className="absolute w-[110px] bg-[#302F2F] h-[720px] top-0 left-[-90px]  flex flex-col justify-between ">
          <div className="sidebar h-[500px] flex flex-col content-center justify-around">
            {sidebar.map((item) => {
              return (
                <div
                  key={item.id}
                  onClick={() => setOpenPage(item.id)}
                  className={`flex justify-center align-center flex-col cursor-pointer  h-[90px] ${
                    openPage === item.id && openPage !== 1
                      ? " bg-[#1D1C1C]"
                      : "text-grayF"
                  } ${openPage === 1 ? navigate("/") : ""} `}
                >
                  <img
                    className={`w-[30px] flex justify-center align-center mx-auto ${
                      openPage === item.id ? " divide-red" : ""
                    }`}
                    src={item.img}
                    alt="#"
                  />
                  <span
                    className={`w-[100%] flex justify-center text-[13px]  text-center ${
                      openPage === item.id ? " text-red" : "text-grayF"
                    }`}
                  >
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="exit">
            <div
              onClick={() => navigate("/")}
              className={`flex justify-center align-center flex-col cursor-pointer  h-[90px]  `}
            >
              <img
                className={`w-[30px] flex justify-center align-center mx-auto 
                 `}
                src={LogOut}
                alt="#"
              />
              <span
                className={`w-[100%] flex justify-center text-grayF text-[13px]  text-center `}
              >
                log Out
              </span>
            </div>
          </div>
        </div>

        <div className="pt-[100px] pl-10">
          {openPage === 2 ? (
            <MyAccaunt />
          ) : openPage === 3 ? (
            <Bill />
          ) : openPage === 4 ? (
            <Servis />
          ) : (
            <Support />
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
