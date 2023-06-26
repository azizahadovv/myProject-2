import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { SimCard } from "../image";
function Navbar(props) {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="container h-[100px] flex content-center justify-between bg-[#0b0b0b] absolute mx-auto border-b border-[#302F2F] top-0 z-100">
        <div className="flex flex-col justify-start gap-2 w-[300px]">
          <p
            onClick={() => navigate("/")}
            className="flex text-grayF justify-start align-center content-start cursor-pointer"
          >
            <AiOutlineLeft className="mt-1" /> BACK TO HOMEPAGE
          </p>
          <span className="flex m-0 p-0 cursor-pointer">
            <img src={SimCard} alt="#" />
            <h2 className="text-white">My V-Tell</h2>
          </span>
        </div>

        <div className="flex justify-center content-center align-center gap-3 mt-2">
          <span className="flex flex-col  content-end w-[220px]">
            <strong className="text-white text-[18px] flex justify-end ">
              User Name
            </strong>
            <span className="text-grayF  text-end ">
              Account N352 created at 2015-10-07
            </span>
          </span>

          <div className="border-current border-solid border-[1px] border-[#302F2F]"></div>
          <div className="flex flex-col justify-evenly">
            <span className="text-grayF">Account balance</span>
            <p className="text-white text-[19px] leading-3">
              151 608.79
              <span className="text-red ml-2">₽</span>
            </p>
            <strong className="text-red text-[18px] leading-3 mb-3 p-0">
              V-MAX
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
