import React from "react";
import { AiOutlineDown } from "react-icons/ai";

function orderPlan() {
  return (
    <div className={`w-[100%] h-[100%] minhe0ght flex flex-col justify-between p-4  bg-lightBlack  border-r border-neutral-700 `}>
      <div className="">
        <p className="text-grayF text-[16px] font-normal uppercase leading-none">
          TARIFF PLAN
        </p>
        <h4 className="text-white text-[36px] font-bold capitalize leading-10">
          Silver Plan
        </h4>
      </div>
      <div>
        <div>
          <span className="text-white text-[24px] font-bold leading-7">$</span>
          <span className="text-white text-[55px] font-bold leading-10">
            98
            <br />
          </span>
          <span className="text-white text-[16px] font-normal leading-normal">
            AMOUNT FEE*{" "}
          </span>
        </div>
        <div className="flex flex-col justify-between h-20">
          <div>
            <div className="text-neutral-200 text-[16px] font-bold leading-normal">
              Currency
            </div>
          </div>
          <div className="w-[135px] h-10 rounded border flex justify-center items-center content-center p-2  border-neutral-400">
            <div className="w-[212px] h-[17px] flex items-center content-center text-white text-[16px] font-normal leading-normal">
              $ USD
            </div>
            <AiOutlineDown color="#FFFFFF" className="flex items-center content-center" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default orderPlan;
