import React from 'react';
import Logo from '../assets/logo.svg'
import CustomButton from './CustomButton'
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const handleNavigateToDetail = () => {
    navigate('/');
  };
  return(
  <header className='w-screen h-[255px] bg-[#E4998A] lg:px-[15%] max-lg:px-[10%] py-10 poppins-regular'>
    <div className='flex flex-row justify-between items-center'>
    <div onClick={handleNavigateToDetail} className='cursor-pointer'>
        <img src={Logo} alt="" className='w-full'/>
    </div>
    <ul className='flex flex-row justify-between text-white w-[50%] li:cursor-pointer max-lg:hidden'>
    <li className='nav cursor-pointer'>Stays</li>
    <li className='nav cursor-pointer'>Flights</li>
    <li className='nav cursor-pointer'>Car Rentals</li>
    <li className='nav cursor-pointer'>Attractions</li>
    </ul>
    <div>
      <CustomButton
       text={'Login'}
       bgColor={'bg-white'}
       textColor={'text-[#E4998A]'}
      />
    </div>
    </div>
  </header>)
};

export default Header;
