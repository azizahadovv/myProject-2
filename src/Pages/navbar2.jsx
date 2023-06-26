import React from "react";
import { Logo, LogoFull, SimCard, israil, russia, usa } from "../image";
import {
  AiFillMoneyCollect,
  AiOutlineFlag,
  AiOutlineMoneyCollect,
} from "react-icons/ai";
import { nanbarLink } from "../map";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Navbar2(props) {
    const navigate=useNavigate()
  const [Click, setClick] = useState(5);
  return (
    <div className="navbar flex justify-between content-center items-center container mt-0 pt-0  h-[120px] pl-5 pr-5 ">
      <span onClick={()=>navigate('/order')} className="text-white text-[10px] cursor-pointer font-BeauSans font-[900] leading-4 uppercase flex flex-col justify-center text-center">
        <img  className="w-[150px] h-[75px] " src={LogoFull} alt="logo" />
        GLOBAL MOBILE OPERATOR
      </span>
      <div className="w-[75%]  h-[100%] flex flex-col justify-between">
        <div className="flex justify-end items-center content-center gap-[65px]   bg-[#000000] w-[100%] h-[55%] rounded-bl-md ">
          <a
            href="#"
            className="no-underline text-white leading-5 text-[14px] text-center font-BeauSans font-normal flex justify-center content-center gap-2"
          >
            <AiOutlineMoneyCollect
              className="w-[25px] h-[25px]"
              color="#E63739"
            />
            Add Funds
          </a>
          <a
            href="#"
            className="no-underline text-white leading-5 text-[14px] font-BeauSans font-normal flex justify-center content-center gap-2 text-center"
          >
            <img className="w-[25px] h-[25px]" src={SimCard} alt="simcarta" />
            My V-Tell
          </a>
          <div className="flex flex-col justify-end gap-1 ">
            <span className="text-grayF text-[12px] font-normal font-serif">
              Choose Your Language
            </span>
            <select className="flex text-right justify-center content-center text-white text-[12px] font-normal font-serif w-[60px] h-6 bg-black border-none">
              <option defaultChecked value="Eng">
                ENG
              </option>
              <option value="Ru">RU</option>
              <option value="israil">ISR</option>
            </select>
          </div>
        </div>
        <div className="w-[100%] h-[45%] flex justify-between items-center content-center gap-10  pr-5">
          {nanbarLink.map((item) => {
            return (
              <a
                href={`#${item.title}`}
                key={item.id}
                onClick={() => setClick(item.id)}
                className={`text-grayF text-[18px] font-bold font-BeauSans no-underline ${
                  item.id === Click ? "text-red " : "text-[#E5E5E5]"
                }`}
              >
                {item.title}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Navbar2;
