import React, { useEffect, useState } from "react";
import API from "../../API/API";
import moment from "moment";


export default function UserTime() {
  const [state,setState]=useState({})
  useEffect(()=>{
    API.fetchGet('/profile_info')
    .then(x=>setState(x.data))
    .catch(x=>console.log(x))

  },[])
  return (
    <div className="bg-slate-100 grid p-2 my-2 gap-2 sm:gap-0 rounded-2xl shadow-xl grid-cols-4 sm:grid-cols-8 w-[100%]">
      <div className="col-span-2 flex justify-center items-center flex-col">
        <p className="text-sm text-red-700">Total income</p>
        <p className="text-sm text-secondary font-extrabold">${state.total_income&&state.total_income}</p>
      </div>
      <div className="col-span-2 flex flex-col justify-center items-center">
        <p className="text-sm text-red-700">Total Withdrawal</p>
        <p className="text-sm text-primary font-extrabold">${state.total_withdrawal&&state.total_withdrawal}</p>
      </div>
      <div className="col-span-2 px-2 flex flex-col justify-center items-center border-2 rounded-lg shadow-xl sm:shadow-none sm:border-none border-sidebar">
      
          <p className="text-xs md:text-base text-primary font-extrabold">Date Registered</p>
          <p className="text-xs md:text-sm text-primary font-bold">{state.date_register&&moment(state.date_register).format('MMMM Do YYYY')}</p>
          <p className="text-xs md:text-sm text-primary font-bold">{state.date_register&&moment(state.date_register).format('h:mm:ss a')}</p>
      
      </div>
      <div className="col-span-2 px-2 flex flex-col justify-center items-center border-2 rounded-lg shadow-xl sm:shadow-none sm:border-none border-sidebar">
       
          <p className="text-xs md:text-base text-primary font-extrabold">Last Withdrawal Time</p>
          <p className="text-xs md:text-sm text-primary font-bold">{state.Last_withdraw_time&&moment(state.Last_withdraw_time).format('MMMM Do YYYY')}</p>
          <p className="text-xs md:text-sm text-primary font-bold">{state.Last_withdraw_time&&moment(state.Last_withdraw_time).format('h:mm:ss a')}</p>
        
      </div>

    </div>
  );
}
