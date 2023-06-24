import React from "react";
import { BsTelephoneForwardFill } from "react-icons/bs";
import { ImMail2 } from "react-icons/im";

export default function WalletSecure() {
  return (
    <div className="grid p-2 rounded-2xl shadow-lg bg-primary grid-cols-4 w-[100%]">
      
      <div className="col-span-12 px-2  flex justify-between w-[100%]">
        <div>
          <p className="text-xs md:text-sm text-texting">Security Level</p>
          <p className="text-xs md:text-sm text-texting">Un-Verified</p>
        </div>
        <div className="flex items-center justify-evenly   w-[20%]">
          <p className="text-sm text-texting">
            <BsTelephoneForwardFill />
          </p>
          <p className="text-sm text-texting">
            <ImMail2 />
          </p>
        </div>
      </div>
    </div>
  );
}
