import React,{useEffect} from "react";
import { AiOutlineClose } from "react-icons/ai";
import UpgradeFromWallet from "./UpgradeFromWallet";

export default function Upgrades({ isModalOpen, setIsModalOpen, onValue,value }) {
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // console.log(onValue);
  return (
    <div >
      <UpgradeFromWallet setIsModalOpen={setIsModalOpen} onValue={onValue} value={value}/>
    </div>
  );
}
