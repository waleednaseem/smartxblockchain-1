import React, { useEffect, useState } from "react";

export default function UserTime() {

  return (
    <div className="bg-slate-100 grid p-2 my-2 gap-2 sm:gap-0 rounded-2xl shadow-xl grid-cols-4 sm:grid-cols-8 w-[100%]">
      <div className="col-span-2 flex justify-center items-center flex-col">
        <p className="text-sm text-red-700">Your Total income</p>
        <p className="text-sm text-secondary font-extrabold">Rs. 400</p>
      </div>
      <div className="col-span-2 flex flex-col justify-center items-center">
        <p className="text-sm text-red-700">Your Total Withdrawal</p>
        <p className="text-sm text-primary font-extrabold">Rs. 400</p>
      </div>
      <div className="col-span-2 px-2 flex flex-col justify-center items-center border-2 rounded-lg shadow-xl sm:shadow-none sm:border-none border-sidebar">
      
          <p className="text-xs md:text-base text-primary font-extrabold">Date Registered</p>
          <p className="text-xs md:text-sm text-primary font-bold">2023/01/12 13:52:48</p>
      
      </div>
      <div className="col-span-2 px-2 flex flex-col justify-center items-center border-2 rounded-lg shadow-xl sm:shadow-none sm:border-none border-sidebar">
       
          <p className="text-xs md:text-base text-primary font-extrabold">Last Withdrawal Time</p>
          <p className="text-xs md:text-sm text-primary font-bold">No Data</p>
        
      </div>

    </div>
  );
}
