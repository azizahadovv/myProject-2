import React, { useState } from "react";
import { navberSupport } from "../map";
import { Support1, Support2 } from ".";

function Support(props) {
  const [sup, setSup] = useState(1);
  return (
    <div className="  flex gap-[40px] content-center align-top h-[640px] w-[105%]  ml-[-30px] scrollbar-none">
      <div className="flex flex-col border-r border-[#302F2F] w-[25%] h-[100%] ">
        {navberSupport.map((item) => {
          return (
            <div
              onClick={() => setSup(item.id)}
              className={`flex w-[100%] h-[85px] cursor-pointer p-3 items-center  border-b border-[#302F2F] ${
                sup === item.id ? "bg-[#0B0B0B]" : "bg-bleck"
              }`}
            >
              <p className={`${sup === item.id ? "text-red" : "text-grayF"} `}>
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
      <div>{sup === 1 ? <Support1 /> : sup === 2 ? <Support2 /> : ""}</div>
    </div>
  );
}

export default Support;
