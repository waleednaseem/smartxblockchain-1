import React, { useState } from "react";
import TopHeaderDB from "./TopHeaderDB";
import Balance from "./Balance";
import RefferalTable from "./RefferalTable";
import RefferalTable2 from "./RefferalTable2";
import axios from "axios";
import Plans from "./Plans";
import SliderDB from "../SliderDB";
import Wallet from "./Wallet";
import ProductCategories from "../../Mui/Components/ProductCategories";
import { useDispatch, useSelector } from "react-redux";
import NewsTicker from "../NewsTicker";
// import PlanTest from "./PlanTest";

export default function MainDashboard({ name, Token }) {
  const data = useSelector(x => x)
  return (
    <div className=" overflow-x-scroll">
      <div className="sm:mb-10 mb-52">
        <TopHeaderDB />
        <div className=" sm:px-4  mb-2 sm:mb-5 -mt-3 rounded-2xl shadow-2xl">
          <SliderDB />
        </div>
        <div className="sm:mx-4 sm:rounded-md">
          <NewsTicker />
        </div>
        <div className="flex md:flex-row flex-col justify-between sm:mx-4 mt-2 sm:mt-0">
          <Wallet />


        </div>
        <div className="w-[100%]">
          <Plans />
          {/* <PlanTest /> */}
        </div>
        <div className="flex flex-col px-2 sm:px-4">
          <RefferalTable Token={Token} />
        </div>
      </div>
    </div>
  );
}
