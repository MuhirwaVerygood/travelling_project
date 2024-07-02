import React from 'react'
import ill from '../assets/Illustration.png'
import ill1 from '../assets/Group.png'
import ill2 from '../assets/water-sport 1.png'
import ill3 from '../assets/taxi 1.png'

const About = () => {
  return (
    <div className='flex flex-row max-md:flex-col md:justify-between max-md:gap-10 px-[10rem] max-md:px-20'>
      <div className='w-[50%] flex flex-col gap-7'>
      <p className='text-[#DF6951] text-[15px]'>Fast & Easy</p>
      <h2 className='text-5xl font-bold text-[#181E4B] volkhov-bold'>Get Your Favourite <br />
      Resort Bookings</h2>
      <div className='flex flex-col gap-10'>
        <div className='flex flow-row items-center gap-5'>
            <img src={ill1} alt="" className='bg-yellow-300 rounded-xl p-3'/>
            <section className='flex flex-col'>
                <p className='text-[#5E6282] font-bold '>Choose Destination</p>
                <p className='text-[#5E6282] flex flex-wrap poppins-light'>Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit. Urna, tortor tempus. </p>
            </section>
        </div>
        <div className='flex flow-row items-center gap-5'>
            <img src={ill2} alt="" className='bg-orange-600 rounded-xl p-3'/>
            <section className='flex flex-col'>
                <p className='text-[#5E6282] font-bold '>Check Availability</p>
                <p className='text-[#5E6282] flex flex-wrap poppins-light'>Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit. Urna, tortor tempus. </p>
            </section>
        </div>
        <div className='flex flow-row items-center gap-5'>
            <img src={ill3} alt="" className='bg-teal-800 rounded-xl p-3'/>
            <section className='flex flex-col'>
                <p className='text-[#5E6282] font-bold '>Let’s Go</p>
                <p className='text-[#5E6282] flex flex-wrap poppins-light'>Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit. Urna, tortor tempus. </p>
            </section>
        </div>
      </div>
      </div>
      <div><img src={ill} alt="" /></div>
    </div>
  )
}

export default About