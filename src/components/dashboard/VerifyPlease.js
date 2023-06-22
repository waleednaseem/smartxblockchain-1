import React,{useState} from "react";
import { BsTelephoneForwardFill } from "react-icons/bs";
import { ImMail2 } from "react-icons/im";
import { IoMdCloseCircle } from "react-icons/io";

export default function VerifyPlease() {
  const [alerts,setAlerts]=useState(true)
  return (
    <div
      className={`alert ${alerts == true ? '':'hidden'} bg-primary rounded-lg py-5 px-6 mb-3 text-sm text-white inline-flex items-center w-full alert-dismissible fade show`}
      role="alert"
    >
      <div>
        <div
          className=" rounded-lg text-sm text-white inline-flex items-center w-full"
          role="alert"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="times-circle"
            className="w-4 h-4 mr-2 fill-current"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"
            ></path>
          </svg>
          Please complete the verification below before you proceed with the
          withdrawal request.
        </div>
        <hr />
        <div className="flex flex-col sm:flex-row">
        <div className="p-5 ">
          <p className="py-2">Contact info</p>
          <button className="flex">
            <BsTelephoneForwardFill className="mr-2" color="white" size={20} />
            +92 300 1234567
          </button>
        </div>
        <div className="p-5 -mt-5 sm:-mt-0">
          <p className="py-2">Email address</p>
          <button className="flex">
            <ImMail2 className="mr-2" color="white" size={20} />
            +92 300 1234567
          </button>
        </div>
        </div>
      </div>

      <button
      onClick={()=> setAlerts(!alerts)}
        type="button"
            className="btn-close box-content w-4 h-4 p-1 ml-auto -mt-10  text-white border-none    rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-150 hover:text-white hover:opacity-75 hover:no-underline"
        data-bs-dismiss="alert"
        aria-label="Close"
      >
        <IoMdCloseCircle size={35}/>
      </button>
    </div>
  );
}
