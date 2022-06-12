import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import jsonData from '../data.json';

const Technology = () => {
  const [index, setIndex] = useState(0);
  const number = [1, 2, 3];
  const data = jsonData.technology[index];
  console.log(data);
  const indexSetter = (num) => {
    setIndex(number.indexOf(num));
  };
  return (
    <div className=" w-full h-full lg:bg-technology-desktop md:bg-technology-tablet bg-technology-mobile pb-7 bg-cover">
      <Navbar />
      <p className="uppercase lg:pl-36 md:pl-10 font-navtext lg:text-[28px] md:text-[20px] text-[16px] leading-[19px] tracking-[2.7px] lg:leading-[34px] md:leading-[24px] md:tracking-[3.38px]  lg:tracking-[4.725px] text-[#FFFFFF] lg:mt-5 md:mt-8 md:text-left text-center mb-10">
        <span className="font-bold opacity-25 mix-blend-normal mr-1">03 </span>
        space launch 101
      </p>
      <div className="w-full flex  items-center lg:flex-row flex-col-reverse lg:gap-0 gap-10">
        <div className="w-full flex lg:flex-row flex-col items-center lg:pl-36 lg:gap-0 gap-10">
          <div className=" flex lg:flex-col gap-5">
            {number.map((num) => (
              <p
                className={`font-bellefair flex items-center justify-center lg:w-[80px] lg:h-[80px] w-[60px] h-[60px]  border-[0.1px] ${
                  index === number.indexOf(num)
                    ? 'bg-white text-[#0B0D17]'
                    : 'bg-transparent text-white hover:bg-[#D0DBD6] hover:bg-opacity-50 transition-all duration-100 ease-in-out'
                } border-opacity-25 border-white rounded-full lg:text-[32px] lg:leading-[37px] lg:tracking-[2px] md:text-[24px] md:leading-7 md:tracking-[1.5px]  cursor-pointer`}
                onClick={() => indexSetter(num)}
              >
                {num}
              </p>
            ))}
          </div>
          <div className="w-full flex items-center justify-center ">
            <div className=" flex flex-col lg:items-start md:items-center lg:gap-3 gap-5">
              <p className="uppercase font-navtext text-[16px] leading-[19px] tracking-[2.7px] text-[#D0D6F9] lg:text-left text-center">
                The Technology
              </p>
              <p className="font-bellefair lg:text-[56px] lg:leading-[64px] md:text-[40px] text-[35px] leading-[46px] text-white uppercase whitespace-nowrap lg:text-left text-center">
                {data.name}
              </p>
              <p className="font-navtext lg:text-[18px] lg:leading-[32px] md:text-[20px] text-[18px] leading-[28px] tracking-wider text-[#D0D6F9] lg:max-w-sm lg:text-left max-w-md text-center md:px-0 px-2">
                {data.description}
              </p>
            </div>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${data.images.portrait})` }}
          className="hidden md:visible md:flex w-[700px] h-[470px] bg-cover items-center justify-end mix-blend-normal"
        />{' '}
        <div
          style={{ backgroundImage: `url(${data.images.landscape})` }}
          className="md:hidden flex w-[768px] h-[310px]  items-center justify-end mix-blend-normal bg-contain"
        />
      </div>
    </div>
  );
};

export default Technology;
