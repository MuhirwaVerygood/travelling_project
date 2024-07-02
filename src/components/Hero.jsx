import React, { useState } from 'react'
import vector from '../assets/Vector 1.png'
import vector2 from '../assets/Vector (1).png'
import CustomButton from './CustomButton'
import backgroundImage from '../assets/heroImg.png'

const Hero = () => {
    const divStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center', 
        width: '100vw',
        height: '50rem', 
    };
    const [open,setOpen] = useState()
    const toggle=()=>{
      setOpen(!open);
    }
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [rooms, setRooms] = useState(0);

    const handleIncrement = (setter) => () => setter((prev) => prev + 1);
    const handleDecrement = (setter) => () => setter((prev) => Math.max(prev - 1, 0));
  return (
    <div style={divStyle}>
        <div className='mt-[15rem] flex flex-col gap-8 ml-[20rem] w-[50%]'>
        <img src={vector} alt="" className='w-[7rem]' />
        <h1 className='text-5xl text-white'>No matter where <br /> you’re going to, we’ll <br /> take you there</h1>
        <div className='bg-text w-[80%] rounded-md poppins-light flex flow-row items-center flex-wrap justify-between'>
          <section className='flex flex-row items-center gap-6 border-r-2 border-white pr-[6rem] cursor-pointer'>
            <p>Where to ?</p>
            <img src={vector2} alt="" />
          </section>
          <section className='flex flex-row items-center gap-6 border-r-2 border-white pr-[6rem] cursor-pointer'>
            <p>Checkin Date</p>
            <img src={vector2} alt="" />
          </section>
          <section className='flex flex-row items-center gap-6 cursor-pointer' onClick={toggle}>
            <p>Rooms</p>
            <img src={vector2} alt="" />
          </section>
          <CustomButton
            text={'Submit'}
            bgColor={'bg-[#DF6951]'}
            textColor={'text-white'}
          />
        </div>
        <div className={`${open ? 'block' : 'hidden'} px-5 py-8 bg-text flex flex-col gap-4 rounded-xl w-[260px] self-end xl:mr-[12rem]`}>
        <section className='flex flex-row items-center gap-3 justify-between'>
                <p>Adults</p>
                <section className='flex flex-row items-center gap-5 border-2 border-white rounded-3xl px-3 py-1'>
                    <p className='cursor-pointer' onClick={handleIncrement(setAdults)}>+</p>
                    <p>{adults}</p>
                    <p className='cursor-pointer' onClick={handleDecrement(setAdults)}>-</p>
                </section>
            </section>
            <section className='flex flex-row items-center gap-3 justify-between'>
                <p>Children</p>
                <section className='flex flex-row items-center gap-5 border-2 border-white rounded-3xl px-3 py-1'>
                    <p className='cursor-pointer' onClick={handleIncrement(setChildren)}>+</p>
                    <p>{children}</p>
                    <p className='cursor-pointer' onClick={handleDecrement(setChildren)}>-</p>
                </section>
            </section>
            <section className='flex flex-row items-center gap-3 justify-between'>
                <p>Rooms</p>
                <section className='flex flex-row items-center gap-5 border-2 border-white rounded-3xl px-3 py-1'>
                    <p className='cursor-pointer' onClick={handleIncrement(setRooms)}>+</p>
                    <p>{rooms}</p>
                    <p className='cursor-pointer' onClick={handleDecrement(setRooms)}>-</p>
                </section>
            </section>
        </div>
      </div>
    </div>
  )
}

export default Hero