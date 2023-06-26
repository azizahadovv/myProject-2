import React, { useState } from "react";
import { navbarServis } from "../map";
import { click } from "@testing-library/user-event/dist/click";
import { ServisContent, ServisContent2 } from ".";

function Servis(props) {
  const [ckick1, setClick] = useState(1);
  const [Name, setName] = useState("Admin your phone numbers");


  return (
    <div className="min-h-[640px]  flex gap-7  w-[100%]  ml-[-25px] scrollbar-none">
      <div className="flex flex-col justify-start align-center content-center border-r border-[#302F2F] w-[30%]  h-[100%]">
        {navbarServis.map((item1,id) => {
          return (
            <div
              key={id}
              onClick={() => (setClick(item1.id), setName(item1.title))}
              className={`w-[100%] h-[75px] border-b border-[#302F2F] cursor-pointer flex flex-col justify-center content-start align-center p-3  `}
            >
              <p
                className={`${ckick1 == item1.id ? "text-red" : "text-grayF"} `}
              >
                {item1.title}
              </p>
            </div>
          );
        })}
      </div>
      <div className="w-[100%] h-[100%] ">
        {ckick1 === 1 ? <ServisContent /> : <ServisContent2 Name={Name} />}
      </div>
    </div>
  );
}

export default Servis;
