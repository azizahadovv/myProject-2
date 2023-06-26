import React from "react";
import { AiFillDatabase } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Support2(props) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="mt-5 w-[550px] h-[500px] flex flex-col justify-between p-2">
        <span className="text-[14px] text-grayF font-BeauSans font-normal leading-6">
          <h3 className="text-white text-text-[22px] leading-6 capitalize font-BeauSans font-bold">
            Change Password
          </h3>
          Use the form to set a new password for the account.
        </span>
        <form className="text-white font-BeauSans font-bold leading-6 flex flex-col gap-2">
          Current Password:
          <input
            disabled
            placeholder={`password`}
            className="border-none text-grayF outline-none text-[14px] bg-none font-BeauSans font-normal leading-6 w-[450px] h-[35px] border rounded-md border-grayF "
            type="password"
          />
          <p className="text-grayF text-[13px] font-BeauSans font-normal w-[450px] leading-4">
            Your new password must contain 6-10 characters, at least one capital
            letter and one digit. The password value can contain alphanumeric
            characters, hyphens and underscores.
          </p>
        </form>

        <form className="text-white font-BeauSans font-bold leading-6 flex flex-col gap-2">
          New Password:
          <input
            disabled
            placeholder="new password"
            className="border-none text-grayF outline-none text-[14px] bg-none font-BeauSans font-normal leading-6 w-[450px] h-[35px] border rounded-md border-grayF "
            type="password"
          />
        </form>
        <form className="text-white font-BeauSans font-bold leading-6 flex flex-col gap-2">
          Confirm Password:
          <input
            disabled
            placeholder="repeat password"
            className="border-none text-grayF outline-none text-[14px] bg-none font-BeauSans font-normal leading-6 w-[450px] h-[35px] border rounded-md border-grayF "
            type="password"
          />
        </form>
        <button
          onClick={() => navigate("/")}
          className="btn btn-danger w-[250px]"
        >
          {" "}
          Update Password
        </button>
      </div>
    </div>
  );
}

export default Support2;
