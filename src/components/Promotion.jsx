import React from 'react'
import CustomButton from './CustomButton'
import img1 from '../assets/Rectangle 19295.png'
import img2 from '../assets/Rectangle 19296 (1).png'
import img3 from '../assets/Rectangle 19298.png'
import img4 from '../assets/Rectangle 19297.png'
import img5 from '../assets/Illustration (1).png'


const Promotion = () => {
  return (
    <div className='flex flex-col px-[10rem] max-md:px-20 gap-11 relative'>
        <p className='text-[#DF6951] text-[15px]'>Promotion</p>
        <h2 className='text-5xl font-bold text-[#181E4B] volkhov-bold'>We Provide You Best <br /> Sightseeing Tours </h2>
        <p>Et labore harum non nobis ipsum eum molestias mollitia et corporis <br /> praesentium a laudantium internos. Non quis eius quo eligendi corrupti <br /> et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus <br /> illum aut optio quibusdam!</p>
        <CustomButton
         text={'View Package'}
         bgColor={'bg-[#DF6951] w-[10%]'}
         textColor={'text-white'}
        />
        <div className='grid md:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 mt-10 w-[70%]'>
            <div className='flex relative'>
                <img src={img1} alt="" className='w-[230px] h-[235px]'/>
                <section className='linear-orange rounded-full px-4 py-2 text-white w-fit h-fit text-[12px] absolute left-[10rem] top-4'>$700</section>
            </div>
            <div className='flex relative'>
                <img src={img2} alt="" className='w-[230px] h-[235px]'/>
                <section className='linear-orange rounded-full px-4 py-2 text-white w-fit h-fit text-[12px] absolute left-[10rem] top-4'>$700</section>
            </div>
            <div className='flex relative'>
                <img src={img3} alt="" className='w-[230px] h-[235px]'/>
                <section className='linear-orange rounded-full px-4 py-2 text-white w-fit h-fit text-[12px] absolute left-[10rem] top-4'>$700</section>
            </div>
            <div className='flex relative'>
                <img src={img4} alt="" className='w-[230px] h-[235px]'/>
                <section className='linear-orange rounded-full px-4 py-2 text-white w-fit h-fit text-[12px] absolute left-[10rem] top-4'>$700</section>
            </div>
        </div>
        <div className='absolute right-[15rem] top-0 -z-10'>
          <img src={img5} alt="" />
        </div>
    </div>
  )
}

export default Promotion