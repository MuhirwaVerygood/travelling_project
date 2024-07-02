import React from 'react';
import Logo from '../assets/logo.png';
import CustomButton from './CustomButton';
import { useNavigate } from 'react-router-dom';

const HeaderHome = () => {
  const navigate = useNavigate();

  const handleNavigateToDetail = () => {
    navigate('/detail');
  };

  const navigateHome=()=>{
    navigate('/')
  }

  return (
    <header className='w-screen h-[255px] bg-transparent lg:px-[15%] max-lg:px-[10%] py-10 poppins-regular absolute top-0'>
      <div className='flex flex-row justify-between items-center'>
        <div onClick={navigateHome} className='cursor-pointer'>
          <img src={Logo} alt="" className='w-full'/>
        </div>
        <ul className='flex flex-row text-white justify-between w-[50%] li:cursor-pointer max-lg:hidden'>
          <li className='nav cursor-pointer' onClick={handleNavigateToDetail}>Stays</li>
          <li className='nav cursor-pointer'>Flights</li>
          <li className='nav cursor-pointer'>Car Rentals</li>
          <li className='nav cursor-pointer'>Attractions</li>
        </ul>
        <div>
          <CustomButton
            text={'Login'}
            bgColor={'bg-[#DF6951]'}
            textColor={'text-white'}
          />
        </div>
      </div>
    </header>
  );
};

export default HeaderHome;
