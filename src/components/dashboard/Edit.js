import React from 'react'

export default function Edit() {
  return (
    <div>
      {/* <div>
        <div className='flex flex-col sm:flex-row justify-between sm:p-5 m-5'>
          <input
            type="text"
            className="form-control block w-[100%] sm:w-[40%] px-4 py-2 text-xl font-normal text-primary bg-white bg-clip-padding border border-solid border-gray-300 rounded-xl shadow-md focus:shadow-2xl transition ease-in-out m-0 focus:text-primary focus:bg-white focus:border-primary focus:outline-none"
            id="exampleFormControlInput2"
            placeholder="Email Address"
          />
          <input
            type="text"
            className="form-control block w-[100%] sm:w-[40%] mt-2 sm:mt-0 px-4 py-2 text-xl font-normal text-primary bg-white bg-clip-padding border border-solid border-gray-300 rounded-xl shadow-md focus:shadow-2xl transition ease-in-out m-0 focus:text-primary focus:bg-white focus:border-primary focus:outline-none"
            id="exampleFormControlInput2"
            placeholder="Full Name"
          />
        </div>
        <div className='flex flex-col sm:flex-row justify-between sm:p-5 m-5 sm:-mt-10'>
        <input
          type="text"
          className="form-control block w-[100%] sm:w-[40%] -mt-3 sm:mt-0 px-4 py-2 text-xl font-normal text-primary bg-white bg-clip-padding border border-solid border-gray-300 rounded-xl shadow-md focus:shadow-2xl transition ease-in-out m-0 focus:text-primary focus:bg-white focus:border-primary focus:outline-none"
          id="exampleFormControlInput2"
          placeholder="Phone number"
        />
        <input
          type="text"
          className="form-control block w-[100%] sm:w-[40%] mt-2 sm:mt-0 px-4 py-2 text-xl font-normal text-primary bg-white bg-clip-padding border border-solid border-gray-300 rounded-xl shadow-md focus:shadow-2xl transition ease-in-out m-0 focus:text-primary focus:bg-white focus:border-primary focus:outline-none"
          id="exampleFormControlInput2"
          placeholder="JazzCash Account"
        />
        </div>
        
       <div className='flex-col sm:flex-row m-5 sm:p-5 sm:-mt-10 flex justify-between'>
       <input
          type="text"
          className="form-control block w-[100%] sm:w-[40%] -mt-3 sm:mt-0 px-4 py-2 text-xl font-normal text-primary bg-white bg-clip-padding border border-solid border-gray-300 rounded-xl shadow-md focus:shadow-2xl transition ease-in-out m-0 focus:text-primary focus:bg-white focus:border-primary focus:outline-none"
          // id="exampleFormControlInput2"
          placeholder="EasyPaisa Account"
        />
       <input
  type="submit"
  className="form-control block w-[40%] sm:w-auto mt-2 sm:mt-0 ml-16 sm:-ml-0 mr-[12%] px-4 py-2 text-xl font-normal text-texting bg-primary border border-primary rounded-2xl shadow-md focus:shadow-2xl transition ease-in-out m-0 cursor-pointer"
  // id="exampleFormControlInput2"
  placeholder="EasyPaisa Account"
/>

       </div>
        <div className='mt-[100%] sm:mt-[0%]'></div>
      </div> */}
      <div >
       <form className='grid md:grid-cols-2 gap-2 m-2'>
       <input type={'text'} placeholder={'Full Name'} className="shadow-secondary shadow-md rounded-lg p-2 "/>
        <input type={'text'} placeholder={'Email'} className="shadow-secondary shadow-md rounded-lg p-2 "/>
        <input type={'text'} placeholder={'Phone'} className="shadow-secondary shadow-md rounded-lg p-2 "/>
        <input type={'text'} placeholder={'USDT Wallet Address'} className="shadow-secondary shadow-md rounded-lg p-2 "/>
        <input type={'text'} placeholder={'not'} className="invisible"/>
        <input type={'submit'} placeholder={'Submit'} className="shadow-secondary shadow-md rounded-lg p-2 bg-primary text-texting font-bold "/>
       </form>
      </div>
    </div>
  )
}
