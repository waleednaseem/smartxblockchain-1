import React, { useState, useEffect } from "react";
import TransactionHistory from "./TransactionHistory";
import API from "../../API/API";

export default function transaction() {
  const [transac, setTransaction] = useState({})

  useEffect(() => {
    API.fetchGet("/findTransac")
      .then(x => setTransaction(x.data))
      .catch(err => console.log(err))
  }, [])
  console.log(transac)
  return (
    <div className="flex flex-col w-[100%] h-screen">
      <div className="bg-primary text-texting rounded-2xl shadow-2xl font-extrabold px-2 py-4 my-2 mx-2 text-[20px]">
        Upgrades
      </div>
      <div className="flex flex-row justify-between mx-2">
       
        {/* <div className="flex justify-center">
          <div className="mb-3 xl:w-96">
            <input
              type="search"
              className="
        form-control
        block
        w-full
        px-3
        py-4
        text-base
        font-normal
        text-primary
        bg-slate-100 bg-clip-padding
        border-2 border-solid border-primary
        rounded-2xl
         transition
        ease-in-out
        m-0
        focus:text-primary focus:bg-white focus:border-primary focus:outline-primary shadow-xl focus:shadow-2xl placeholder-secondary
      "
              id="exampleSearch"
              placeholder="Search"
            />
          </div>
        </div> */}
      </div>

      <div className="h-[90%] overflow-scroll pb-20">
      {
        transac.length > 0 && transac.map((transactions, index) =>
          <div key={index}>
            <TransactionHistory transactions={transactions} />
          </div>
        )
      }
      </div>
    </div>
  );
}
