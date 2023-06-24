import React from "react";
import Notification from "./Notification";
import UserDB from "./UserDB";
import Search from "./Search";
import NotificationNew from "./NotificationNew";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { IoNotificationsSharp } from "react-icons/io5";

export default function TopHeaderDB({ name }) {
  return (
    <div className="sm:px-4 pb-3">
    
      <div className="bg-primary justify-between flex ">
        <div className="flex items-center">
          <div><IoNotificationsSharp className="text-texting cursor-pointer hover:text-white" size={35} /></div>
        </div>
        <div className="mx-0.5">
          <ConnectButton />
        </div>
      </div>
    </div>
  );
}
