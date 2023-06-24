import React from "react";

export default function TransactionHistory({transactions}) {
  return (
    <div>
      <div>
        {/* <div className="flex items-center justify-center">
          <div className="px-2 w-[65%] md:w-[15%] text-primary">
            Sat, 21 Jan 2023
          </div>
          <div className="border-b border-primary mx-4 w-full"></div>
        </div> */}
        <div className="mx-2 bg-primary rounded-2xl shadow-xl px-4">
          <div className="flex flex-row justify-between my-2 items-center roun">
            <div>
              <div className="text-texting text-[20px] font-bold">
                {transactions.reason}
              </div>
              {/* <div className="text-primary text-[18px]">{}</div> */}
            </div>

            <div>
              <div className="flex flex-row justify-between">
                <img src="images/USDT.png" className="w-6 h-6 mt-1 flex justify-center items-center" />
                <div className="mx-2 text-texting font-bold text-[20px]">{transactions.payment}</div>
              </div>
              {/* <div className="flex justify-end mx-2 text-secondary  font-light text-sm">
                22.00
              </div> */}
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
}
