import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function Suppurt1(props) {
  const navigate=useNavigate()
    return (
        <div className="mt-5 w-[550px] h-[400px] flex flex-col justify-between p-2">
        <span className="text-[14px] text-grayF font-BeauSans font-normal leading-6">
          <h3 className="text-white text-text-[22px] leading-6 capitalize font-BeauSans font-bold">
            Personal Info update
          </h3>
          Manage your personal data throughout this section.
        </span>
        <form className="text-white font-BeauSans font-bold leading-6 flex flex-col gap-2">
          Email:
          <input
            disabled
            placeholder="Enter your email address"
            className="border-none text-grayF outline-none text-[14px] bg-none font-BeauSans font-normal leading-6 w-[450px] h-[35px] border rounded-md border-grayF "
            type="text"
          />
        </form>
        <form className="text-white font-BeauSans font-bold leading-6 flex flex-col gap-2">
          Date of Birth:
          <input
            disabled
            className="border-none text-grayF outline-none text-[14px] bg-none font-BeauSans font-normal leading-6 w-[450px] h-[35px] border rounded-md border-grayF "
            type="date"
          />
        </form>
        <form className="text-white font-BeauSans font-bold leading-6 flex flex-col gap-2">
          Contact Phone Number:
          <input
            disabled
            placeholder="number:  ___ _______"
            className="border-none text-grayF outline-none text-[14px] bg-none font-BeauSans font-normal leading-6 w-[450px] h-[35px] border rounded-md border-grayF "
            type="number"
          />
        </form>
        <button onClick={()=>navigate('/')} className="btn btn-danger w-25"> Save</button>
      </div>
    );
}

export default Suppurt1;