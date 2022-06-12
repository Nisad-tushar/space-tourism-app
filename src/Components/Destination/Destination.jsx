import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';

import { space } from '../../Data';
import data from '../data.json';

const Destination = () => {
  console.log(data.destinations[0]);
  const [filter, setFilter] = useState('Moon');
  const [index, setIndex] = useState(0);

  const destination = data.destinations;
  const filterSetter = (paramName) => {
    setFilter(paramName.name);
    setIndex(data.destinations.indexOf(paramName));
  };
  console.log(index);
  return (
    <div className="w-full h-full bg-destination-desktop bg-cover">
      <Navbar />
      <div></div>
      <div className="flex flex-col justify-between gap-20 md:mt-8 md:px-[20px] ">
        <div className=" flex  font-navtext md:text-[28px] text-[16px] tracking-[4.72px] leading-[34px] uppercase md:ml-20 gap-4 justify-center md:justify-start">
          <p className=" text-white font-bold opacity-25 mix-blend-normal">
            01
          </p>

          <p className="text-white">Pick Your Destination</p>
        </div>

        <div className="flex lg:flex-row flex-col items-center lg:justify-evenly">
          {
            <div className="">
              <img
                src={`${destination[index].images.png}`}
                alt="moon"
                className="lg:w-[400px] lg:h-[445px] w-[170px] h-[170px] md:w-[300px] md:h-[300px]"
              />
            </div>
          }

          <div className="flex flex-col lg:w-[445px] lg:h-[472px] lg:items-start items-center md:text-center lg:text-left md:px-24  lg:px-0 gap-6  mt-[61px] lg:mt-0 pb-14">
            <div
              className={` font-navtext uppercase flex text-[16px] leading-[19.2px] tracking-[2.7px] text-white lg:gap-6 gap-8 `}
            >
              {data.destinations.map((item) => (
                <div className="relative" key={item.name}>
                  <p
                    onClick={() => filterSetter(item)}
                    className="cursor-pointer"
                  >
                    {item.name}
                  </p>

                  <div
                    className={`${
                      filter === item.name
                        ? 'absolute bg-white w-full h-[3px] mt-2'
                        : 'hidden'
                    }`}
                  />
                </div>
              ))}
            </div>

            <p className="font-bellefair md:text-[100px] text-[56px] leading-[115px] text-white uppercase lg:mt-0 mt-6">
              {destination[index].name}
            </p>
            <p className="text-[#D0D6F9] text-[18px] leading-[32px] text-center lg:text-left lg:px-0 px-3">
              {destination[index].description}
            </p>
            <div className="bg-[#383B4B] l-[167px] lg:w-[420px] md:w-full w-[80%]  h-[1px] lg:mt-0 mt-6 lg:mb-0 mb-3  z-10 " />
            <div className="flex flex-col lg:flex-row md:flex-row items-center text-center gap-10">
              <div className="flex flex-col uppercase gap-3">
                <p className="uppercase text-[#D0D6F9] text-[14px] leading-[17px] tracking-[2.3625px]  font-navtext">
                  AVG DISTANCE
                </p>
                <p className="text-[28px] leading-[32px] text-white font-bellefair">
                  {destination[index].distance}
                </p>
              </div>
              <div className="flex flex-col uppercase gap-3">
                <p className="uppercase text-[#D0D6F9] text-[14px] leading-[17px] tracking-[2.3625px]  font-navtext">
                  EST. travel Time
                </p>
                <p className="text-[28px] leading-[32px] text-white font-bellefair">
                  {destination[index].travel}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
