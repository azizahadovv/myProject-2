import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { LogoFull } from "../image";
import {
  AiFillMail,
  AiFillPhone,
  AiFillPushpin,
  AiOutlineDown,
  AiOutlineMail,
} from "react-icons/ai";
import { footerLink1, footerLink2 } from "../map";

function Footer(props) {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto flex pt-3 pb-3  justify-between content-center flex-wrap align-baseline gap-4  items-center  w-[100%] h-[100%]">
      <div>
        <span
          onClick={() => navigate("/order")}
          className="text-white text-[10px] cursor-pointer font-BeauSans font-[900] leading-4 uppercase flex flex-col justify-center text-center"
        >
          <img className="w-[150px] h-[75px] " src={LogoFull} alt="logo" />
          GLOBAL MOBILE OPERATOR
        </span>
        <label className="flex gap-3 cursor-pointer pb-3 pt-2 border-b border-[#302F2F] hover:bg-black justify-between content-center items-center">
          <AiFillMail color="#E5E5E5" />
          <a
            className="text-grayF text-[14px] font-BeauSans font-normal no-underline  leading-5"
            href="mailto:service@v-tell.com"
          >
            service@v-tell.com
          </a>
        </label>
        <label className="flex gap-3 cursor-pointer pb-3 pt-2 border-b border-[#302F2F] hover:bg-black justify-between content-center items-center">
          <AiFillPhone color="#E5E5E5" />
          <a
            className="text-grayF text-[14px] font-BeauSans font-normal no-underline  leading-5"
            href="tel:+998978611199"
          >
            +998978611199
          </a>
          <AiOutlineDown color="#E5E5E5" />
        </label>
        <label className="flex gap-3 cursor-pointer pb-3 pt-2 border-b border-[#302F2F] hover:bg-black justify-between content-center items-center">
          <AiFillPushpin color="#E5E5E5" />
          <a
            className="text-grayF text-[14px] font-BeauSans font-normal no-underline  leading-5"
            href="https://goo.gl/maps/Mzr8im1q8q4NHYnq5"
          >
            Locations
          </a>
          <AiOutlineDown color="#E5E5E5" />
        </label>
      </div>

      <div className="flex flex-col gap-3">
        {footerLink1.map((item) => {
          return (
            <a
              href={`#${item.title}`}
              key={item.id}
              className="text-grayF flex flex-col gap-3 no-underline hover:text-white text-[14px] font-normal font-BeauSans leading-4 cursor-pointer"
            >
              {item.title}
            </a>
          );
        })}
      </div>
      <div className="flex flex-col gap-3">
        {footerLink2.map((item) => {
          return (
            <a
              href={`#${item.title}`}
              key={item.id}
              className="text-grayF flex flex-col gap-3 no-underline hover:text-white text-[14px] font-normal font-BeauSans leading-4 cursor-pointer"
            >
              {item.title}
            </a>
          );
        })}
      </div>
      <form className="flex flex-col justify-between content-center items-center gap-2">
        <h5 className="text-grayF leading-5 font-BeauSans font-bold ">
          Join Our Newsletter
        </h5>
        <input
          className="text-[14px] font-BeauSans font-normal leading-6 text-grayF rounded-md w-[210px] h-8 outline-none border-none bg-bleck placeholder:text-10px "
          placeholder="Name"
          type="text"
        />
        <input
          className="text-[14px] font-BeauSans font-normal leading-6 text-grayF rounded-md w-[210px] h-8 outline-none border-none bg-bleck placeholder:text-10px "
          placeholder="Email"
          type="Email"
        />
        <input
          className="text-[14px] font-BeauSans font-normal leading-6 text-grayF rounded-md w-[210px] h-8 outline-none border-none bg-bleck placeholder:text-10px "
          placeholder="Phone"
          type="Phone"
        />
        <input
          className="text-[14px] font-BeauSans font-normal leading-6 text-grayF rounded-md w-[210px] h-8 outline-none border-none bg-bleck placeholder:text-10px "
          placeholder="Country of Residency"
          type="text"
        />
        <button className="btn btn-secondary w-75">Subscribe</button>
      </form>
    </div>
  );
}

export default Footer;
