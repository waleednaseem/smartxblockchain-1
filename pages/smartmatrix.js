import React, { useEffect, useState } from 'react'
import Sidebar from '../src/components/dashboard/Sidebar'
import SidebarMobile from '../src/components/dashboard/SidebarMobile'
import PlacementTreeNew from '../src/components/dashboard/PlacementTreeNew'
import API from '../src/API/API'
import { useDispatch, useSelector } from 'react-redux'

export default function smartmatrix() {
  const [reff, setReff] = useState('')

  useEffect(() => {
    API.fetchGet('/findrefferal')
      .then(x => setReff(x.data))
      .catch(x => console.log(x))
  }, [])

  const dispatch = useDispatch()
  const data = useSelector(x => x)
  const [values, setValues] = useState('')
  useEffect(() => {
    console.log(data.treeParams)
  }, [])
  return (

    <div className='flex h-[90%] flex-row'>
      <div>
        <Sidebar />
        <SidebarMobile />
      </div>
      <div className='w-full'>
        <div className='flex flex-col w-full  overflow-y-auto'>
          <div className='flex flex-col h-96 w-full'>
            <div className='flex justify-center items-center'>
              <div className='bg-primary text-primary w-full flex justify-center items-center flex-col'>
                <h3 className='text-white p-1 font-bold  text-2xl'>Your Placements</h3>
                <p className="text-xs md:text-base text-white font-extrabold">Select Tree</p>
                <select name="cars" id="cars" className='w-full border border-primary' value={values} onChange={(e) => (setValues(e.target.value), dispatch({
                  type: 'treeParams',
                  payload: e.target.value
                }))}>
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                  <option value="200">200</option>
                  <option value="350">350</option>
                </select>
              </div>

            </div>
            <PlacementTreeNew />
          </div>
        </div>
        <div className='flex flex-col w-full overflow-y-auto'>
          <h3 className='text-primary p-5 font-bold text-lg'>Your Refferal</h3>
          <div className=' grid grid-cols-5 md:grid-cols-10 gap-2 p-5'>
            {
              reff && reff.map(x => (
                <p className='bg-primary p-1 text-sm text-texting rounded-3xl flex justify-center items-center'>{x.User.username}</p>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
