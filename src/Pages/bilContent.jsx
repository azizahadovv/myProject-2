import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";

function bilContent() {
  return (
    <div className={`mt-[40px] flex flex-col gap-12`}>
      <div>
        <h2 className="text-[22px] text-white font-BeauSans font-bold leading-6">
          Itemization of Phone Calls
        </h2>
        <p className="text-[14px] font-BeauSans font-normal leading-5 text-grayF">
          Request itemization of phone calls throughout this section. <br />
          <span className="text-white text-[14px] font-normal font-BeauSans">
            Service is free of charge.
          </span>
        </p>
      </div>
      <div>
        <span className="text-white text-[18px] font-BeauSans font-bold leading-5">
          Receive For the Period
        </span>
        <div>
          <p className="flex justify-between align-center p-2 mt-2 content-center w-[500px] h-[40px] text-white text-[14px] font-BeauSans left-5 border border-grayF rounded-md">
            <span>
              <span className="text-grayF text-[13px]">From:</span> 11/12/2021
            </span>
            <AiOutlineCalendar className="mt-1" />
          </p>
          <p className="flex justify-between align-center p-2 mt-2 content-center w-[500px] h-[40px] text-white text-[14px] font-BeauSans left-5 border border-grayF rounded-md">
            <span>
              <span className="text-grayF text-[13px]">to:</span> 12/22/2021
            </span>
            <AiOutlineCalendar className="mt-1" />
          </p>
        </div>
        <div className="control flex flex-col">
          <label className="radio text-white flex gap-2 content-center align-center">
            <input defaultChecked type="radio" name="answer" />
            See List Now
          </label>
          <label className="radio text-white flex gap-2 content-center align-center">
            <input type="radio" name="answer" />
            Send Via Email
          </label>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <button className="btn btn-danger w-[320px] h-[45px]">
          Receive Itemization of Calls
        </button>
        <span className="leading-5 text-[14px] font-[Kumbh Sans] text-grayF">
          <strong>Attention!</strong> All time indicators correspond to Moscow
          (RUS) time
        </span>
      </div>
    </div>
  );
}

export default bilContent;
