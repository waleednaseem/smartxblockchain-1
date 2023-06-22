import React from "react";
import { BsTelephoneForwardFill } from "react-icons/bs";
import { ImMail2 } from "react-icons/im";

export default function WalletSecure() {
  return (
    <div className="bg-slate-100 grid p-2 rounded-2xl shadow-lg  grid-cols-4 w-[100%]">
      <div className="col-span-2 border-r-2  border-secondary">
        <p className="text-sm text-primary">Your Total Withdrawal</p>
        <p className="text-sm text-primary font-extrabold">Rs. 400</p>
      </div>
      <div className="col-span-2 px-2 flex justify-between">
        <div>
          <p className="text-xs md:text-sm text-primary">Security Level</p>
          <p className="text-xs md:text-sm text-red-400">Un-Verified</p>
        </div>
        <div className="flex items-center justify-evenly  w-[30%]">
          <p className="text-sm text-primary">
            <BsTelephoneForwardFill />
          </p>
          <p className="text-sm text-primary">
            <ImMail2 />
          </p>
        </div>
      </div>
    </div>
  );
}
