import React, { useEffect,useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Api from '../../API/API'
import { useDispatch } from "react-redux";
export default function UpgradeFromWallet({ isModalOpen, onValue, setIsModalOpen, pkgname, value }) {
  
  const [NextPrice,setNextPrice]=useState('')
  const [currentLevel,setcurrentLevel]=useState('')
  const [Current_pkg,setCurrent_pkg]=useState('')
  const [Refresh,setRefresh]=useState('')


  const dispatch = useDispatch()
  useEffect(()=>{
    pkgInfo()
  },[Refresh])

  const Upgrade = () => {
    Api.fetchPost({
      pkg: value.pkg_price
    }, '/upgrade')
      .then(x => (
        dispatch({
          type: 'setModalmsg',
          payload: x.data
        }),
        setRefresh(x.data)
        // x.data&& window.location.reload()
      ))
      .catch(err => console.log(err))

  }


  const pkgInfo=()=>{
    Api.fetchPost({pkg: value.pkg_price},'/Pakage_info')
    .then(x=>{
      setNextPrice(x.data.NextPackage,"<== next pkg price")
      setcurrentLevel(x.data.findUpdate.level,"<== current level")
      setCurrent_pkg(x.data.findUpdate.pkg_price,"<== current pakage price")
      setRefresh(x.data.NextPackage)
      // console.log(x.data,'<===')
    })
    .catch(err=>console.log(err))
  }

  // console.log(onValue,"<==")
  const pkg_name = ["Basic", "Standard", "Pro", "Royal", "Gold", "King"]
  return (
    <div className="h-[100%]   rounded-4xl">
      <div className="flex rounded-3xl bg-primary items-center">
        <div className="w-[100%]  mx-5 py-4">
          <div className="flex justify-between text-texting">
            {/* <button onClick={pkgInfo}>pkg info</button> */}
            <p>Your Current Package is</p>
            <div className="border-2 rounded-lg text-texting min-w-[100px] font-bold cursor-pointer px-2 transform hover:scale-110 hover:bg-opacity-50 transition ease-in duration-300 flex justify-center items-center">
              {Current_pkg||pkg_name[onValue]}
            </div>
          </div>
          <div className="flex justify-between text-texting my-2 ">
            <p>Your Package Upgrade Level is</p>
            <div className="border-2 rounded-lg text-texting min-w-[100px] font-bold cursor-pointer transform hover:scale-110 hover:bg-opacity-50 transition ease-in duration-300 flex justify-center items-center ">
              Level-{currentLevel||value.level}
            </div>
          </div>
        </div>

        <div
          className="cursor-pointer flex items-center text-texting"
          onClick={() => setIsModalOpen(false)}
        >
          <AiOutlineClose size={25} />
        </div>
      </div>
      <div className="flex sm:flex-row flex-col sm:gap-2 h-[100%] sm:h-[80%] items-center sm:items-stretch rounded-b-3xl">
        <div className=" h-[35%] hidden md:flex sm:h-auto w-[100%] sm:w-[35%] py-3">
          <img
            className="h-[100%] w-[100%] rounded-4xl shadow-lg shadow-primary"
            src="/images/SMART X BLOCK CHAIN (1).png"
            alt=""
          />
        </div>
        <div className="sm:w-[65%] h-[45%] sm:h-auto bg-slate-100 mx- py-4 my-2 rounded-4xl shadow-lg shadow-primary flex flex-col justify-around items-center">
          <div className="p-5 text-center sm:text-xl text-base">
            Upgrade your package to the Next level
          </div>

          {currentLevel != 8 ? <button onClick={() => Upgrade()} className="bg-primary w-[50%] text-texting p-2 rounded-2xl transform hover:scale-110 hover:bg-opacity-50 transition ease-in duration-300">
            Upgrade to Level-{currentLevel < 8 ? currentLevel + 1 : currentLevel} <br /> ({NextPrice} USDT)
          </button> : <div>Upgrade Completed!</div>}
        </div>
      </div>
    </div>
  );
}
