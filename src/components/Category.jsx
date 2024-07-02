import React from 'react'
import img1 from '../assets/tour-guide 1.png'
import img2 from '../assets/travelling 1.png'
import img3 from '../assets/hands 1.png'
import rect from '../assets/Rectangle 157.png'

const Category = () => {
    return (
        <div className='flex my-[40rem justify-center items-center flex-col gap-10 text-center'>
            <p className='text-[#DF6951] text-[15px]'>CATEGORY</p>
            <h2 className='text-4xl font-bold text-[#181E4B] volkhov-bold'>We Offer Best Services</h2>
            <div className='grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1'>
                <div className='w-[60%] cursor-pointer flex flex-col gap-4 p-7 justify-center text-center items-center rounded-2xl hover:shadow-xl'>
                    <section className='relative'>
                        <img src={img1} alt="" />
                        <img src={rect} alt="" className='absolute -bottom-3 -z-10 left-3' />
                    </section>
                    <p className='text-[15px] text-[#1E1D4C] font-bold'>Best Stays</p>
                    <p className='text-[12px] text-[#5E6282]'>sunt qui repellat saepe quo velit aperiam id aliquam placeat.</p>
                </div>
                <div className='w-[60%] cursor-pointer flex flex-col gap-4 p-7 justify-center text-center items-center rounded-2xl hover:shadow-xl'>
                    <section className='relative'>
                        <img src={img2} alt="" />
                        <img src={rect} alt="" className='absolute -bottom-3 -z-10 left-3' />
                    </section>
                    <p className='text-[15px] text-[#1E1D4C] font-bold'>Best Flights Options</p>
                    <p className='text-[12px] text-[#5E6282]'>sunt qui repellat saepe quo velit aperiam id aliquam placeat.</p>
                </div>
                <div className='w-[60%] cursor-pointer flex flex-col gap-4 p-7 justify-center text-center items-center rounded-2xl hover:shadow-xl'>
                    <section className='relative'>
                        <img src={img3} alt="" />
                        <img src={rect} alt="" className='absolute -bottom-3 -z-10 left-3' />
                    </section>
                    <p className='text-[15px] text-[#1E1D4C] font-bold'>Car rentals</p>
                    <p className='text-[12px] text-[#5E6282]'>sunt qui repellat saepe quo velit aperiam id aliquam placeat.</p>
                </div>
            </div>
        </div>
    )
}

export default Category