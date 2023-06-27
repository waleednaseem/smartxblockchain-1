import React, { useEffect, useState } from 'react'
import API from '../../API/API'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Edit() {
  const [full_name, setfullname] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')

  const submitForm = (e) => {
    e.preventDefault()
    API.fetchPost({ full_name, email, phone }, '/update_profile')
      .then(x => toast.success(x.data.msg, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }))
      .catch(x => console.log(x))
  }
  return (
    <div>
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
      <div >
        <form onSubmit={submitForm} className='grid md:grid-cols-2 gap-2 m-2'>
          <input type={'text'} onChange={e => setfullname(e.target.value)} placeholder={'Full Name'} className="shadow-secondary shadow-md rounded-lg p-2 " />
          <input type={'text'} onChange={e => setemail(e.target.value)} placeholder={'Email'} className="shadow-secondary shadow-md rounded-lg p-2 " />
          <input type={'text'} onChange={e => setphone(e.target.value)} placeholder={'Phone'} className="shadow-secondary shadow-md rounded-lg p-2 " />
          <input type={'submit'} placeholder={'Submit'} className="shadow-secondary shadow-md rounded-lg p-2 bg-primary text-texting font-bold " />
        </form>
      </div>
    </div>
  )
}
