import React, { useState } from "react";
import { lineRight } from "../image";
import { orderBtn } from "../map";
import { INCLUDEDINPACKAGE, NumbersOrder, OrderPlan, ORDERCART, ORDERPURCHASE } from ".";
// import OrderCart from "./orderCart";
// import OrderPURCHASE from "./orderPURCHASE";

function OrderCard(props) {
  const [btn, setBtn] = useState(1);
  return (
    <div className="w-[100%] h-[100%] cardOrder  ">
      <div className="w-[100%] h-[100%]  bg-lightBlack rounded-lg">
        <div className="flex justify-between bg-[#252323] content-center mt-5 w-[100%] h-[12%]">
          {orderBtn.map((item) => {
            return (
              <button
                key={item.id}
                onClick={() => setBtn(item.id)}
                className={` ${item.id === btn
                  ? "bg-red text-white"
                  : "bg-[#252323] text-grayF"
                  } flex justify-between w-[25%] items-center btnOrder  uppercase    text-center text-[16px] font-bold  leading-none`}
              >
                <p className="text-center flex justify-center items-center my-2 w-[90%]">
                  {item.title}
                </p>
                <img color="#3E3D3D" src={item.img} alt="" />
              </button>
            );
          })}
        </div>
        <div className="h-[100%] w-[100%] flex gap-7 px-2 py-4">
          <div className="  w-[30%]  bg-lightBlack ">
            <OrderPlan />
          </div>

          <div className="w-[100%] ">
            {
              btn === 1 ? <INCLUDEDINPACKAGE setBtn={setBtn} /> : btn === 2 ? <NumbersOrder setBtn={setBtn} /> : btn === 3 ? <ORDERCART setBtn={setBtn} /> : btn === 4 ? <ORDERPURCHASE setBtn={setBtn} /> : ''
            }

          </div>
        </div>

      </div>
    </div>
  );
}

export default OrderCard;
