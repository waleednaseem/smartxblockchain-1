import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { GrGoogleWallet } from "react-icons/gr";
import { HiHome } from "react-icons/hi2";
import { TbBusinessplan } from "react-icons/tb";
import { SlLogout } from "react-icons/sl";
import { MdEmojiPeople } from "react-icons/md";
// import {MdEmojiPeople} from "react-icons/io"
import {GiTakeMyMoney} from "react-icons/gi"
import Link from "next/link";

export default function SidebarMobile({name}) {
  const [open, setOpen] = useState(true);
  return (
    <div
      className={`
         
          md:hidden md:flex-col whitespace-nowrap shadow-md fixed bottom-0  justify-between inset-x-0 px-0 py-0" id="sidenavSecExample"`}
    >
      <div className="">
        <div className=" overflow-x-scroll scroll bottom-0 absolute bg-primary rounded-xl justify-between items-center w-[100%]">
          
          <div className="flex w-[100%] justify-between items-center">
            <div className="">
              <Link
                className="flex items-center text-sm p-2 mx-2 h-10 focus:bg-tertiary overflow-hidden text-texting text-ellipsis whitespace-nowrap rounded-full hover:text-secondary hover:bg-primaryhover transition duration-300 ease-in-out"
                href="/"
                data-mdb-ripple="true"
                data-mdb-ripple-color="primaryhoverhover"
              >
                <HiHome size={30} />
              </Link>
            </div>

            <div className="">
              <Link
                className="flex items-center text-sm p-2 mx-2 h-10 focus:bg-tertiary overflow-hidden text-texting text-ellipsis whitespace-nowrap rounded-full hover:text-secondary hover:bg-primaryhover transition duration-300 ease-in-out"
                href="/transactions"
                data-mdb-ripple="true"
                data-mdb-ripple-color="primaryhoverhover"
              >
                <GiTakeMyMoney size={30} />
              </Link>
            </div>
            
            <div className="">
              <Link
                className="flex items-center text-sm p-2 mx-2 h-10 focus:bg-tertiary overflow-hidden text-texting text-ellipsis whitespace-nowrap rounded-full hover:text-secondary hover:bg-primaryhover transition duration-300 ease-in-out"
                href="/smartmatrix"
                data-mdb-ripple="true"
                data-mdb-ripple-color="primaryhoverhover"
              >
                <MdEmojiPeople size={30} />
              </Link>
            </div>

            
{/* 
            <div className="">
              <Link
                className="flex items-center text-sm p-2 mx-2 h-10 focus:bg-tertiary overflow-hidden text-texting text-ellipsis whitespace-nowrap rounded-full hover:text-secondary hover:bg-primaryhover transition duration-300 ease-in-out"
                href="/"
                data-mdb-ripple="true"
                data-mdb-ripple-color="primaryhoverhover"
              >
                <MdEmojiPeople size={30} />
              </Link>
            </div> */}
            <div className="">
              <Link
                className="flex items-center text-sm p-2 mx-2 h-10 focus:bg-tertiary overflow-hidden text-texting text-ellipsis whitespace-nowrap rounded-full hover:text-secondary hover:bg-primaryhover transition duration-300 ease-in-out"
                href="/profile"
                data-mdb-ripple="true"
                data-mdb-ripple-color="primaryhoverhover"
              >
                <FaUserAlt size={30} />
              </Link>
            </div>

            <div>
              <div
                className={`
          
         text-center mr-6  `}
              >
                <div
                  onClick={() => {
                    localStorage.removeItem("user"), window.location.assign("/");
                  }}
                  className="py-2  flex justify-center text-sm text-texting cursor-pointer"
                >
                  <SlLogout size={30} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
