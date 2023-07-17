import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HiHome } from "react-icons/hi2";
import { FaUserAlt } from "react-icons/fa";
import { GrGoogleWallet } from "react-icons/gr";
import { TbBusinessplan } from "react-icons/tb";
import { BsCalculatorFill } from "react-icons/bs";
import { MdEmojiPeople } from "react-icons/md";
import {GiTakeMyMoney}  from "react-icons/gi";
import { SlLogout } from "react-icons/sl";
import { TfiClose } from "react-icons/tfi";
import { useSelector } from "react-redux";


export default function Sidebar({ name }) {
  const [open, setOpen] = useState(false);
  const data = useSelector((state) => state);
  return (
    <div
      className={`${open ? "w-[20%]" : "w-[80px]"
        } bg-primary h-screen hidden md:flex md:flex-col shadow-md   "id="sidenavSecExample`}
    >
      <div className="pt-4 pb-2 px-6 w-[100%]">
        <div href="#!">
          <div className="flex items-center">
            <div onClick={() => setOpen(!open)} className="shrink-0">
              <img
                src="images/smart(1).png"
                className="rounded-full cursor-pointer w-10"
                alt="Avatar"
              />
            </div>
            <div className="flex flex-row justify-between items-center px-2 w-[100%]">
              {open && (
                <div className="hidden sm:flex uppercase cursor-pointer text-sm text-texting ">
                  {data&&data.username}
                </div>
              )}
              {open && (
                <div
                  className="hidden sm:flex text-sm text-texting cursor-pointer -mr-6"
                  onClick={() => setOpen(!open)}
                >
                  <TfiClose size={18} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {open ? (
        <div>
          <ul className="relative px-1">
            <li className="relative">
              <Link href={"/"}>
                <div
                  className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-texting text-ellipsis whitespace-nowrap rounded hover:text-texting hover:bg-secondary transition duration-2000 ease-in-out active:bg-primary"
                  href="/"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="primaryhoverhover"
                >
                  <HiHome className=" mr-3" size={25} />
                  Home
                </div>
              </Link>
            </li>

            <li className="relative">
              <Link href={"/transactions"}>
                <div
                  className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-texting text-ellipsis whitespace-nowrap rounded hover:text-texting hover:bg-secondary transition duration-2000 ease-in-out"
                  href="/"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="primaryhover"
                >
                  <GiTakeMyMoney className=" mr-3" size={25} color="white" />
                  Transactions
                </div>
              </Link>
            </li>
            <li className="relative">
              <Link href={"/smartmatrix"}>
                <div
                  className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-texting text-ellipsis whitespace-nowrap rounded hover:text-texting hover:bg-secondary transition duration-2000 ease-in-out"
                  href="/smartmatrix"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="primaryhover"
                >
                  <MdEmojiPeople className=" mr-3" size={25} />
                  SMART MATRIX
                </div>
              </Link>
            </li>
            {/* <li className="relative">
              <Link href={"/"}>
                <div
                  className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-texting text-ellipsis whitespace-nowrap rounded hover:text-texting hover:bg-secondary transition duration-2000 ease-in-out"
                  href="/transactions"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="primaryhover"
                >
                  <GrGoogleWallet className=" mr-3" size={25} />
                  Transactions
                </div>
              </Link>
            </li> */}
            <li className="relative">
              <Link href={"/profile"}>
                <div
                  className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-texting text-ellipsis whitespace-nowrap rounded hover:text-texting hover:bg-secondary transition duration-2000 ease-in-out"
                  href="/profile"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="primaryhover"
                >
                  <FaUserAlt className=" mr-3" size={25} />
                  Profile
                </div>
              </Link>
            </li>
          </ul>
          <hr className="my-2" />
        </div>
      ) : (
        <ul>
          <li className="relative">
            <div
              className="flex items-center text-sm py-12 px-6 h-12 overflow-hidden text-texting text-ellipsis whitespace-nowrap rounded hover:text-texting hover:bg-tertiary transition duration-300 ease-in-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="primaryhoverhover"
            >
              <Link href={"/"}>
                <HiHome size={40} />
              </Link>
            </div>
          </li>

          {/* <li className="relative">
            <div
              className="flex items-center text-sm py-12 px-6 h-12 overflow-hidden text-texting text-ellipsis whitespace-nowrap rounded hover:text-texting hover:bg-tertiary transition duration-300 ease-in-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="primaryhoverhover"
            >
              <Link href={"/transactions"}>
                <GiTakeMyMoney size={40} color="white" />
              </Link>
            </div>
          </li> */}
          <li className="relative">
            <div
              className="flex items-center text-sm py-12 px-6 h-12 overflow-hidden text-texting text-ellipsis whitespace-nowrap rounded hover:text-texting hover:bg-tertiary transition duration-300 ease-in-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="primaryhoverhover"
            >
              <Link href={"/transactions"}>
                <GiTakeMyMoney size={40} color="white" />
              </Link>
            </div>
          </li>
          <li className="relative">
            <div
              className="flex items-center text-sm py-12 px-6 h-12 overflow-hidden text-texting text-ellipsis whitespace-nowrap rounded hover:text-texting hover:bg-tertiary transition duration-300 ease-in-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="primaryhoverhover"
            >
              <Link href={"/smartmatrix"}>
                <MdEmojiPeople size={40} />
              </Link>
            </div>
          </li>
          <li className="relative">
            <div
              className="flex items-center text-sm py-12 px-6 h-12 overflow-hidden text-texting text-ellipsis whitespace-nowrap rounded hover:text-texting hover:bg-tertiary transition duration-300 ease-in-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="primaryhoverhover"
            >
              <Link href={"/profile"}>
                <FaUserAlt size={40} />
              </Link>
            </div>
          </li>
        </ul>
      )}
      <div
        className={`${open ? "w-[16.9%]" : "w-[80px]"
          }  text-center bottom-0 absolute w-full`}
      >
        <div
          onClick={() => {
            localStorage.removeItem("user"), window.location.assign("/");
          }}
          className="py-2 text-sm flex flex-col justify-center items-center text-black cursor-pointer"
        >
          <hr className="w-auto py-2" />
          <SlLogout size={30} />
        </div>
      </div>
    </div>
  );
}
