import React from "react";
import { navbarServisCard, servisCard } from "../map";
import { usa } from "../image";
import { AiOutlineBorderBottom, AiOutlineDown, AiOutlineRadiusBottomleft } from "react-icons/ai";

function ServisContent(props) {
  return (
    <div className=''>
      <div className="border-b border-[#302F2F] flex flex-col justify-evenly w-[100%] h-[570px]">
        <span className="text-grayF text-[14px] font-normal font-BeauSans leading-5">
          <h1 className="text-white text-[23px] font-BeauSans font-bold capitalize">
            Number Management
          </h1>
          Here you can manage all your numbers
        </span>
        <div className="flex flex-col w-[100%] h-[250px]  gap-3 ">
          <h4 className="text-white font-bold text-[18px] leading-6 font-BeauSans">
            Overseas Phone Numbers
          </h4>
          <div className="flex flex-col gap-2 content-center w-[970px]">
            {navbarServisCard.map((res,id) => {
              return (
                <div key={id} className="bg-[#302F2F] w-[100%] h-[100px] border rounded-md flex content-center justify-between px-4 py-2  items-center self-center ">
                  <div className="flex flex-col gap-2 justify-start">
                    <div className="flex justify-between items-start self-stretch  content-center w-[80%] mt-2">
                      <span className="flex items-center gap-3 ">
                        <img src={res.img} alt="Usa" />
                        <span className="text-white text-[16px] leading-6 font-BeauSans font-normal">
                          {res.CountName}
                        </span>
                      </span>
                      <span className="text-red text-[18px] leading-6 font-BeauSans font-bold">
                        {res.number}
                      </span>
                    </div>
                    <p className="text-grayF text-[14px] leading-5 font-BeauSans font-normal">
                      {res.title}
                    </p>
                  </div>
                  <button className="btn btn-outline-light w-[150px]">
                    {res.btn}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        <span className="text-grayF text-[14px] font-normal font-BeauSans leading-5">
          <h3 className="text-white text-[23px] font-BeauSans font-bold capitalize">
            Phone Number Requests
          </h3>
          You have no requested phone numbers
        </span>
      </div>

      <div className="flex flex-col gap-3 mt-5 bg-black">
        {servisCard.map((item,id) => {
          return (
            <div key={id} className="flex justify-between px-5 cflex  items-center self-stretch  content-center w-[100%] h-[100px] bg-lightBlack border rounded-md">
              <span className="text-grayF text-[14px] font-BeauSans font-normal ">
                <h4 className="text-white text-[22px] font-BeauSans font-bold ">{item.name}</h4>
                Select any country and quantity of numbers that we have available for you
              </span>
              <AiOutlineDown color="white" className="cursor-pointer"/>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ServisContent;
