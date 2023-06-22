import React from 'react';
import Sidebar from "../src/components/dashboard/Sidebar";
import PlacementTreeNew from "../src/components/dashboard/PlacementTreeNew";

export default function Tree() {
  return (
    <div className='flex w-screen overflow-x-scroll'>
      <Sidebar/>
      <div className='w-[100%] overflow-x-scroll'>
      <PlacementTreeNew/>
    </div>
    </div>
  )
}
