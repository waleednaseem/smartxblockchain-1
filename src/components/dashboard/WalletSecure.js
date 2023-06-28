import React, { useEffect, useState } from "react";
import { BsTelephoneForwardFill } from "react-icons/bs";
import { ImMail2 } from "react-icons/im";
import API from "../../API/API";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function WalletSecure({ toast, active, setActivate }) {
  // const [active, setActivate] = useState("")
  const [verifynow, setverifynow] = useState(false)
  const [refresh, setrefresh] = useState('')
  const [code, setverifycode] = useState('')
  // useEffect(() => {
  //   API.fetchGet('/activate')
  //     .then(x => setActivate(x.data.msg))
  //     .catch(x => console.log(x))
  // }, [])
  // useEffect(() => {
  //   API.fetchGet('/activate')
  //     .then(x => setActivate(x.data.msg))
  //     .catch(x => console.log(x))
  // },[refresh])
  const doMail = (e) => {
    e.preventDefault()
    API.fetchGet('/verify-email')
      .then(x => {
        x.data.message == 'please update your profile first' && toast.warn(x.data.message, {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
        x.data.message == 'Verification email sent' && (toast.success(x.data.message, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }), setverifynow(true), setrefresh('hrue'))
        x.data.message == 'Failed to send verification email' && toast.error(x.data.message, {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      })
      .catch(x => console.log(x))

  }
  const verifyCode = (e) => {
    e.preventDefault()
    API.fetchPost({ code }, '/verify-code')
      .then(x => {


        // console.log(x)
        x.data.msg == 'Verified successfully !' ? (
          setActivate("activated"),
          setverifynow(false),
          toast.success(x.data.msg, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })) : toast.error("Invalid code please try again", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
      })
      .catch(x => console.log(x))
  }
  return (
    <div className="grid p-2 rounded-2xl shadow-lg bg-primary grid-cols-4 w-[100%]">
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="col-span-12 px-2  flex justify-between w-[100%]">
        <div >
          <p className="text-xs md:text-sm text-texting">Security Level</p>

          {active == "activated" ?
            <p className="text-xs md:text-sm text-green-300">Verified</p> :
            <p className="text-xs md:text-sm text-texting">Un-Verified</p>
          }
        </div>
        <div className="flex items-center justify-center flex-col  ">
          {/* <p className="text-sm text-texting">
            <BsTelephoneForwardFill />
          </p> */}
          {!verifynow ? active != "activated" && <button onClick={doMail} className="text-sm  text-texting">
            <ImMail2 />
          </button> :
            <form onSubmit={verifyCode}>
              <input type="text" placeholder="Verification code" onChange={e => setverifycode(e.target.value)} className="p-1  rounded-lg" />
            </form>}
        </div>
      </div>
    </div>
  );
}
