import React from 'react'
import img1 from '../assets/Rectangle 19305.png'
import img2 from '../assets/Rectangle 19305 (1).png'
import img3 from '../assets/Rectangle 19305 (2).png'
import img4 from '../assets/Rectangle 19305 (3).png'
import img5 from '../assets/Rectangle 19305 (4).png'
import img6 from '../assets/Rectangle 19305 (5).png'

const Desitination = () => {
  return (
    <div className='flex flex-col gap-16 px-[10rem] max-md:px-20 justify-center items-center'>
        <h2 className='text-5xl font-bold text-[#181E4B] volkhov-bold'>Choose Destination</h2>
        <div className='grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-10'>
            <div className='flex flex-col text-left gap-4'>
                <img src={img1} alt="" />
                <p className='font-bold text-xl'>Kigali</p>
            </div>
            <div className='flex flex-col text-left gap-4'>
                <img src={img2} alt="" />
                <p className='font-bold text-xl'>Kigali</p>
            </div>
            <div className='flex flex-col text-left gap-4'>
                <img src={img3} alt="" />
                <p className='font-bold text-xl'>Kigali</p>
            </div>
            <div className='flex flex-col text-left gap-4'>
                <img src={img4} alt="" />
                <p className='font-bold text-xl'>Kigali</p>
            </div>
            <div className='flex flex-col text-left gap-4'>
                <img src={img5} alt="" />
                <p className='font-bold text-xl'>Kigali</p>
            </div>
            <div className='flex flex-col text-left gap-4'>
                <img src={img6} alt="" />
                <p className='font-bold text-xl'>Kigali</p>
            </div>
        </div>
    </div>
  )
}

export default Desitination