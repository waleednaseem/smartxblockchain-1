import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import UpgradeFromWallet from "./UpgradeFromWallet";
import { useSelector } from "react-redux";
import API from "../../API/API";

export default function Wallet() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [wallet, setWallet] = useState(0);

  const data = useSelector((state) => state);
  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    API.fetchGet('/wallet')
      .then((response) => setWallet(response.data.payment))
      .catch((error) => console.log(error));
  }, []);

  const formatAccountBalance = (balance) => {
    return balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="h-auto justify-between py-2 sm:mt-2 flex flex-col min-w-[350px] rounded-2xl bg-primary">
      <div className="px-2 flex justify-center">
        <p className="MyFont text-3xl text-texting hover:text-white hover:cursor-pointer">
          Smart-X-BlockChain
        </p>
      </div>

      <div className="flex flex-row justify-between px-2">
        <div className="flex">
          <div className="my-2 text-texting uppercase font-bold italic hover:text-white cursor-pointer">
            {data && data.username}
          </div>
        </div>

        <div className="my-2 text-texting font-bold italic hover:text-white cursor-pointer">
          <div>Refferal ID: {data && data.refferalID}</div>
        </div>
        {/* <div className="my-2 text-texting font-bold italic hover:text-white cursor-pointer">
          <div>Total Team: {data && data.refferalID}</div>
        </div> */}
      </div>

      <div className="flex flex-row justify-between px-2">
        <div className="flex items-center text-texting font-bold hover:text-white cursor-pointer">
          Balance:
          <img className="h-8 w-8 mx-1" src="images/USDT.png" alt="" />
          <div className="text-3xl">
            {formatAccountBalance(wallet)}
          </div>
        </div>
      </div>
    </div>
  );
}
