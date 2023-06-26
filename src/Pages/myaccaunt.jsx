import React from "react";
import { usa } from "../image";
import { Switch } from "antd";
import { card, card2, countries } from "../map";

const MyAccaunt = () => {
  return (
    <div className="flex flex-col gap-5 w-[107%] h-[100%]  snap-none scrollbar-none">
      <div className="flex flex-row flex-wrap justify-between content-start align-center border-b h-[250px] pt-[20px] pb-[45px]   gap-3">
        <div className="flex flex-col align-center content-center mt-3 gap-2 ">
          <h2 className="text-white text-[28px] font-BeauSans font-[700] leading-8">
            Number Management
          </h2>
          <p className="text-grayF w-[400px] text-[14px] leading-5">
            If you are calling a country not on your list, please select which
            country to set as Default number AND If you have multiple phone
            numbers in a single country, please select which phone number you
            would like displayed on your called party’s caller ID.
          </p>
        </div>
        <div className="flex justify-around align-center gap-3 content-center ">
          {countries.map((item) => {
            return (
              <div
                key={item.id}
                className="flex flex-col gap-2 rounded-md w-[220px] p-[10px]  bg-[#302F2F] "
              >
                <div className="flex justify-between border-b-[1px] border-[#444] pb-2">
                  <span className="flex gap-2">
                    <img src={item.img} alt="#" />
                    <b className="text-grayF">{item.coutri}</b>
                  </span>

                  {item.check ? (
                    <Switch defaultChecked className="w-[22px]" />
                  ) : (
                    <Switch className="w-[22px]" />
                  )}
                </div>
                {item.number.map((res,id) => {
                  return (
                    <div key={id} className="flex justify-between content-center  align-center h-[15px]">
                      <p
                        className={`${
                          res.check ? "text-greenF" : "text-grayF"
                        } font-bold`}
                      >
                        {res.nums}
                      </p>
                      {res.check ? (
                        <Switch defaultChecked className="w-[22px]" />
                      ) : (
                        <Switch className="w-[22px]" />
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      {/* ********************************************************************************* */}

      <div className="flex flex-col gap-5">
        <div className="h-[220px] w-[100%] flex flex-col gap-4  ">
          <h3 className="text-white font-bold text-[25px] leading-5 mb-3">
            Usage Summary
          </h3>
          <div className="flex justify-between align-center content-center gap-2 flex-wrap">
            {card.map((item,id) => {
              return (
                <div key={id} className="relative w-[270px] h-[150px] bg-lightBlack rounded-md flex flex-col justify-center  content-center align-center text-center gap-4">
                  <p className="absolute -top-5 left-[40px] bg-bleck w-[190px] h-12 rounded-[50px] p-[10px]">
                    <span className="flex justify-center align-center content-center text-white text-center text-[14px]">
                      {item.name}
                    </span>
                  </p>
                  <div>
                    <h3 className="text-white text-[36px]">
                      {item.prise}
                      <span className="text-red text-[27px]"> ₽</span>
                    </h3>
                    <p className="text-grayF text-[14px] leading-5 font-BeauSans font-normal">
                      Dec 3, 2021, 11:33:28 PM
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* ************************************************************************************* */}

        <div className="h-[220px] w-[100%] flex flex-col gap-4  ">
          <h3 className="text-white font-bold text-[25px] leading-5 mb-3">
          Traffic balance
          </h3>
          <div className="flex  align-center content-center gap-5 flex-wrap">
            {card2.map((item, id) => {
              return (
                <div key={id} className="relative w-[270px] h-[150px] bg-lightBlack rounded-md flex flex-col justify-center  content-center align-center text-center gap-4">
                  <p className="absolute -top-5 left-[40px] bg-bleck w-[190px] h-12 rounded-[50px] p-[10px]">
                    <span className="flex justify-center align-center content-center text-white text-center text-[14px]">
                      {item.name}
                    </span>
                  </p>
                  <div>
                    <h3 className="text-white text-[36px]">
                      {item.prise}
                      <span className="text-red text-[27px]"> ₽</span>
                    </h3>
                    <p className="text-grayF text-[14px] leading-5 font-BeauSans font-normal">
                      Dec 3, 2021, 11:33:28 PM
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccaunt;

/* 

import * as React from 'react';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function BasicSwitches() {
  return (
    <div>
      <Switch {...label} defaultChecked />
      <Switch {...label} />
      <Switch {...label} disabled defaultChecked />
      <Switch {...label} disabled />
    </div>
  );
}

*/
