import React from 'react';
import Navbar from '../Navbar/Navbar';
import '../../Assets/home/background-home-desktop.jpg';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="w-full  h-full bg-home-mobile  md:bg-home-tablet lg:bg-home-desktop bg-cover  ">
      <Navbar />
      <div className="w-full lg:px-[165px]  flex lg:flex-row flex-col lg:items-start items-center md:py-24 lg:justify-between ">
        <div className="flex flex-col gap-7 md:w-[450px] md:h-[382px] max-w-[450px] max-h-[380px] md:px-0 px-4 drop-shadow-sm lg:text-left text-center">
          <span className="uppercase font-navtext lg:text-[28px] lg:leading-[34px] lg:tracking-[4.725px] text-[20px] md:leading-[24px] md:tracking-[3.38px] leading-[20px] tracking-[3px] text-[#D0D6F9]">
            So, you want to travel to
          </span>
          <span className="uppercase font-bellefair md:text-[150px] lg:leading-[172px] md:leading-[150px] md:tracking-[3.38px] text-[80px] leading-[100px] text-white">
            Space
          </span>
          <span className="text-[#D0D6F9] text-[18px] leading-[32px]  ">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </span>
        </div>
        <div className="relative flex flex-col items-center justify-center lg:mt-48 md:mt-24 mt-20 lg:pr-36 md:pb-0 pb-6">
          <Link to={'/destination'}>
            <div
              className="lg:absolute flex items-center justify-center bg-white rounded-full h-[200px] w-[200px] font-bellefair text-[32px] leading-[36.67px]
          
          hover:ring-[60px] ring-[#D9D9D9] ring-opacity-25 transition-all duration-100 ease-in-out
cursor-pointer
          
          "
            >
              <p className="font-bellefair text-[32px] leading-[37px] tracking-[2px] ">
                Explore
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
