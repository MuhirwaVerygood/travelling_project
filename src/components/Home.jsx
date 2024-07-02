import React from 'react'
import Hero from './Hero'
import Category from './Category';
import HeaderHome from './HeaderHome';
import About from './About';
import Desitination from './Desitination';
import Amaze from './Amaze';
import Promotion from './Promotion';
import Footer from './Footer';


const Home = () => {
  return (
    <div className='flex flex-col gap-[7rem] poppins-medium'>
      <HeaderHome/>
      <Hero/>
      <Category/>
      <About/>
      <Desitination/>
      <Amaze/>
      <Promotion/>
      <Footer/>
    </div> 
  )
}

export default Home