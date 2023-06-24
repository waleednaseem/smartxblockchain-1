import React, { useState, useEffect } from "react";
import MainDashboard from "../src/components/Dashboard/MainDashboard";
import Sidebar from "../src/components/dashboard/Sidebar";
import SidebarMobile from "../src/components/dashboard/SidebarMobile";
import jwt_decode from "jwt-decode";
import axios from 'axios'
import apiUrl from "../redux/services/api";
import SliderDB from "../src/components/SliderDB";
import { useDispatch, useSelector } from "react-redux";
import Api from '../src/API/API'
import { ToastContainer } from "react-toastify";

export default function Dashboard({ Token }) {
  const [data, setdata] = useState(false);
  const [name, setname] = useState(false);
  const dispatch = useDispatch()
  const dataS = useSelector(x => x)

  useEffect(() => {
    Api.fetchGet('/finduserdetail')
      .then(x => {
        dispatch({
          type: 'username',
          payload: x.data.users.username
        })
          ,
          dispatch({
            type: 'refferalID',
            payload: x.data.users.id
          }),
        console.log(x)
      }

      )
    Api.fetchGet('/finduserpakage')
      // .then(x=> console.log(x.data.packages))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="flex bg-bgprimary overflow-auto h-screen bg-contain">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Sidebar name={name} />
      <SidebarMobile name={name} />
      {/* <SliderDB/> */}
      <MainDashboard Token={Token} name={name} />
    </div>
  );
}
