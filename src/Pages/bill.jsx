import React, { useState } from "react";
import { navbarBill } from "../map";
import { BillContent, MonthlyBill } from ".";
import BillPayment from "./BillPayment";
import PayYourBill from "./PayYourBill";
import AutopaySetup from "./Autopay Setup bill";
import PreviouslyOrderedReportsBill from "./Previously Ordered Reports bill";
// overflow-y-scroll
function Bill(props) {
  const [indexBill, setIndexBill] = useState(1);
  return (
    <div className=" flex gap-[40px] content-center align-top h-[107%] w-[100%]  ml-[-30px] ">
      <div className="w-[30%] h-[640px] border-r border-[#302F2F] cursor-pointer">
        {navbarBill.map((billBtn) => {
          return (
            <div
              key={billBtn.id}
              onClick={() => setIndexBill(billBtn.id)}
              className={`flex flex-col justify-center p-7 w-[100%] bg-red-200 h-[85px] border-b border-[#302F2F] ${
                indexBill === billBtn.id ? "bg-[#0B0B0B]" : "bg-bleck"
              }`}
            >
              <p
                className={`${
                  indexBill === billBtn.id
                    ? "text-[#E63739]"
                    : " text-[#E5E5E5]"
                }`}
              >
                {billBtn.title}
              </p>
            </div>
          );
        })}
      </div>
      {indexBill === 1 ? (
        <BillContent />
      ) : indexBill === 2 ? (
        <MonthlyBill />
      ) : indexBill === 3 ? (
        <BillPayment />
      ) : indexBill === 4 ? (
        <PayYourBill />
      ) : indexBill === 5 ? (
        <AutopaySetup />
      ) : (
        <PreviouslyOrderedReportsBill />
      )}
    </div>
  );
}

export default Bill;
