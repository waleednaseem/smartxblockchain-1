import React, { useState, useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import { TbWallet } from "react-icons/tb";
import { GiThreeFriends, GiCardboardBox } from "react-icons/gi";
import { RiLockPasswordFill } from "react-icons/ri";
import WalletSecure from "../src/components/dashboard/WalletSecure";
import Sidebar from "../src/components/dashboard/Sidebar";
import SidebarMobile from "../src/components/dashboard/SidebarMobile";
import UserTime from "../src/components/dashboard/UserTime";
import VerifyPlease from "../src/components/dashboard/VerifyPlease";
import Edit from "../src/components/dashboard/Edit";
import ResetPassword from "../src/components/dashboard/ResetPassword";
import Refferal from "../src/components/dashboard/Refferal";
import Pakages from "../src/components/dashboard/Pakages";
import Modal from "react-modal";
import jwt_decode from "jwt-decode";
import axios from "axios";
import apiUrl from "../redux/services/api";
import PlacementTreeNew from "../src/components/dashboard/PlacementTreeNew";
import Deposit from "../src/components/dashboard/Deposit";
import Withdraw from "../src/components/dashboard/Withdraw";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function profile() {
  const [state, setState] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [data, setdata] = useState(false);
  const [name, setname] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    const decode = jwt_decode(user);
    setdata(decode);
    console.log(data);
  }, []);

  // useEffect(()=>{
  //   axios.post(apiUrl+'/userDetail',{
  //     id:data.id
  //   })
  //   .then(x=> setname(x.data.username))
  // },[data])

  return (
    <div className={`md:flex bg-bgsecondary  `}>
      <Sidebar name={name} />
      {/* <div className="">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="deposite"
          className={"bg-red-500 flex items-center justify-center"}
        ><div className="h-[400px] w-[200px]"></div></Modal>
      </div> */}

      <div className="flex flex-row p-2 w-[100%] h-screen  overflow-hidden">
        <div className="grid grid-cols-4 gap-1 w-[100%] ">
          <div className=" flex flex-col rounded-2xl shadow-2xl col-span-1 bg-slate-100 h-fit py-2 ">
            <div className=" flex items-center justify-center mt-8 ">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
                className="rounded-full w-10"
                alt="Avatar"
              />
            </div>
            <div className=" items-center uppercase justify-center mt-4 hidden md:flex">
              <div>{name}</div>
            </div>

            <div className=" my-2 mx-2 border-b border-primary"></div>
            <Modal
              isOpen={isModalOpen}
              ariaHideApp={false}
              onRequestClose={closeModal}
              className={
                " sm:mx-[20%] mx-10 sm:my-[10%] my-5 sm:h-[50%] h-[50%] rounded-3xl bg-purple-50 shadow-2xl"
              }
            >
              {state == "Deposit" && (
                <Deposit setIsModalOpen={setIsModalOpen} />
              )}
              {state == "Withdraw" && (
                <Withdraw setIsModalOpen={setIsModalOpen} toast={toast} />
              )}

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
            </Modal>
            <div className="flex flex-col lg:flex-row justify-center items-center">

              <div
                onClick={() => {
                  setIsModalOpen(true), setState("Withdraw");
                }}
                className="mx-0 sm:mx-16 mt-4 sm:mt-0 cursor-pointer flex justify-center items-center flex-col"
              >
                <TbWallet className="text-primary mx-9 sm:mx-0 " size={25} />
                <div className="text-sm mx-3 sm:-mx-4">Withdrawal</div>
              </div>
            </div>

            <div className=" my-4 mx-2 border-b border-primary"></div>

            <div>
              <div
                onClick={() => setState(0)}
                className="flex flex-col lg:flex-row justify-center items-center"
              >
                <div className="flex flex-col justify-center items-center">
                  <FiEdit
                    className="text-primary cursor-pointer"
                    size={24}
                  />
                  <div className="flex flex-col sm:flex-row justify-center items-center">
                    <div className="text-sm cursor-pointer">
                      Edit
                    </div>
                    <div className="text-sm cursor-pointer">
                      Profile
                    </div>
                  </div>
                </div>
              </div>

              <div
                onClick={() => setState(1)}
                className="flex flex-col lg:flex-row justify-center items-center"
              >
                <div className="flex flex-col justify-center items-center">
                  <RiLockPasswordFill
                    className="text-primary cursor-pointer"
                    size={25}
                  />
                  <div className="flex flex-col sm:flex-row justify-center items-center">
                    <div className="text-sm cursor-pointer">
                      Reset
                    </div>
                    <div className="text-sm cursor-pointer">
                      Password
                    </div>
                  </div>
                </div>
              </div>

              {/* <div
                onClick={() => setState(2)}
                className="flex flex-col lg:flex-row justify-center items-center"
              >
                <div className="flex flex-col justify-center items-center">
                  <GiThreeFriends
                    className="text-primary cursor-pointer"
                    size={25}
                  />
                  <div className="text-sm cursor-pointer">
                    Refferal Team
                  </div>
                </div>
              </div> */}
            </div>

            {/* <div
              onClick={() => setState(3)}
              className="flex flex-col lg:flex-row justify-center"
            >
              <div className="mt-4 mx-0 sm:mx-10">
              <GiCardboardBox className="text-primary mx-9 sm:-mx-5 cursor-pointer" size={25} />
              <div className="text-sm mx-5 sm:-mx-8 cursor-pointer">Package</div>
            </div>
            </div> */}
          </div>

          <div className="col-span-3  flex flex-col">
            <VerifyPlease />
            <WalletSecure />
            <UserTime />
            {(state == 0 && <Edit />) ||
              (state == 1 && <ResetPassword />) ||
              // (state == 2 && <PlacementTreeNew state={state} />) ||
              (state == 3 && <Pakages />)}
          </div>
        </div>
      </div>
      <SidebarMobile />
    </div>
  );
}
