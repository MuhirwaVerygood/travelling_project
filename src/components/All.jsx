import React, { useState } from 'react';
import CustomButton from './CustomButton';
import CustomDiv from './CustomDiv';
import pl1 from '../assets/Rectangle 19377.png'
import pl2 from '../assets/Rectangle 19377 (1).png'
import pl3 from '../assets/Rectangle 19377 (2).png'
import pl4 from '../assets/Rectangle 19377 (3).png'
import pl5 from '../assets/Rectangle 19377 (4).png'
import pl6 from '../assets/Rectangle 19377 (5).png'

const places = [
  { id: 1, img: pl1, date: '12, September 2022', people: '120+ People', desc: 'Qui tempore voluptate qui quia commodi rem praesentium alias et.', amount: '1,100 $', place: 'Serena Hotel' },
  { id: 2, img: pl2, date: '12, September 2022', people: '120+ People', desc: 'Qui tempore voluptate qui quia commodi rem praesentium alias et.', amount: '1,100 $', place: 'Serena Hotel' },
  { id: 3, img: pl3, date: '12, September 2022', people: '120+ People', desc: 'Qui tempore voluptate qui quia commodi rem praesentium alias et.', amount: '1,100 $', place: 'Serena Hotel' },
  { id: 4, img: pl4, date: '12, September 2022', people: '120+ People', desc: 'Qui tempore voluptate qui quia commodi rem praesentium alias et.', amount: '1,100 $', place: 'Serena Hotel' },
  { id: 5, img: pl5, date: '12, September 2022', people: '120+ People', desc: 'Qui tempore voluptate qui quia commodi rem praesentium alias et.', amount: '1,100 $', place: 'Serena Hotel' },
  { id: 6, img: pl6, date: '12, September 2022', people: '120+ People', desc: 'Qui tempore voluptate qui quia commodi rem praesentium alias et.', amount: '1,100 $', place: 'Serena Hotel' },
];

const All = () => {
  const [startDate, setStartDate] = useState(new Date());

  return(
  <div className='flex flex-col gap-10 justify-center items-center px-16 py-6'>
    <div className='bg-[#E4998A] w-[70%] px-8 py-5 rounded-md poppins-light flex flow-row items-center flex-wrap justify-between'>
      <p className='border-r-2 border-white pr-[6rem]'>Rusizi</p>
      <p className='border-r-2 border-white pr-[6rem]'>Checkin Date</p>
      <p>Rooms</p>
      <CustomButton
        text={'Submit'}
        bgColor={'bg-[#DF6951]'}
        textColor={'text-white'}
      />
    </div>
    <div className='grid lg:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4 mb-20'>
      {places.map(place => (
        <CustomDiv key={place.id} {...place} />
      ))}
    </div>
  </div>
);
};

export default All;