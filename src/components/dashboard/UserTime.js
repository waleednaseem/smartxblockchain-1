import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function UserTime() {
  const dispatch = useDispatch()
  const data = useSelector(x => x)
  const [values, setValues] = useState('')
  useEffect(() => {
    console.log(data.treeParams)
  }, [data.treeParams])
  return (
    <div className="bg-slate-100 grid p-2 my-2 gap-2 sm:gap-0 rounded-2xl shadow-xl grid-cols-4 sm:grid-cols-8 w-[100%]">
      <div className="col-span-2 px-2 justify-between border-2 rounded-lg shadow-xl sm:shadow-none sm:border-none  border-sidebar">
        <p className="text-xs md:text-base text-primary font-extrabold">Last Login Time</p>
        <p className="text-xs md:text-sm text-primary font-bold">
          2023/01/14 15:50:33
        </p>
      </div>
      <div className="col-span-2 px-2 flex justify-between border-2 rounded-lg shadow-xl sm:shadow-none sm:border-none border-sidebar">
        <div>
          <p className="text-xs md:text-base text-primary font-extrabold">Last Withdrawal Time</p>
          <p className="text-xs md:text-sm text-primary font-bold">No Data</p>
        </div>
      </div>
      <div className="col-span-2 px-2 flex justify-between border-2 rounded-lg shadow-xl sm:shadow-none sm:border-none border-sidebar">
        <div>
          <p className="text-xs md:text-base text-primary font-extrabold">Date Registered</p>
          <p className="text-xs md:text-sm text-primary font-bold">2023/01/12 13:52:48</p>
        </div>
      </div>

      <p className="text-xs md:text-base text-primary font-extrabold">Select Tree</p>
      <select name="cars" id="cars" value={values} onChange={(e) => (setValues(e.target.value), dispatch({
        type: 'treeParams',
        payload: e.target.value
      }))}>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
        <option value="100">100</option>
        <option value="200">200</option>
        <option value="350">350</option>
      </select>
    </div>
  );
}
