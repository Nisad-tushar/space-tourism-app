import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { BsCircle } from 'react-icons/bs';
import { useInView } from 'react-intersection-observer';
import jsonData from '../data.json';
const Crew = () => {
  const [index, setIndex] = useState(0);
  const dataSetter = (icon) => {
    setIndex(icons.indexOf(icon));
  };
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const data = jsonData.crew[index];
  const icons = [<BsCircle />, <BsCircle />, <BsCircle />, <BsCircle />];
  return (
    <div className="min-h-screen w-full lg:bg-crew-desktop md:bg-crew-tablet bg-crew-mobile bg-cover">
      <p className="secondHeading uppercase lg:pl-36 md:pl-10 font-navtext lg:text-[28px] md:text-[20px] text-[16px] leading-[19px] tracking-[2.7px] lg:leading-[34px] md:leading-[24px] md:tracking-[3.38px]  lg:tracking-[4.725px] text-[#FFFFFF]  md:text-left text-center mb-10 pt-36">
        <span className="font-bold opacity-25 mix-blend-normal mr-1">02 </span>
        Meet your crew
      </p>
      <div className="w-full h-full flex lg:flex-row md:flex-col flex-col-reverse md:pb-0 lg:justify-between lg:pl-36">
        <div className="flex flex-col lg:pr-12 lg:gap-32 lg:mt-16 md:mt-0 mt-8">
          <div
            ref={ref}
            className={`${
              inView && 'grow'
            } h-full flex md:flex-col lg:items-start lg:mt-0 md:mt-14 items-center flex-col-reverse md:pb-0 pb-12`}
          >
            <div className="flex flex-col gap-4 lg:items-start items-center md:mt-0 mt-8  md:w-[400px] md:h-[250px] w-[327px] h-[212px] md:px-0 px-2 ">
              <p className="font-bellefair lg:text-[32px] lg:leading-[37px] md:text-[24px] md:leading-[28px] text-[16px] leading-[18.34px] uppercase text-[#FFFFFF] mix-blend-normal opacity-50 lg:text-left text-center">
                {data.role}
              </p>
              <p className="font-bellefair lg:text-[56px] lg:leading-[64px] md:text-[40px] md:leading-[46px] text-[24px] leading-[28px]  uppercase text-[#FFFFFF] lg:text-left text-center lg:whitespace-nowrap">
                {data.name}
              </p>
              <p className="font-navtext lg:text-[18px] lg:leading-[32px] md:text-[16px] md:leading-[28px] text-[17px] leading-[29px] tracking-wide text-[#D0D6F9] lg:text-left text-center">
                {data.bio}
              </p>
            </div>
            <div className=" flex  gap-4 lg:mt-14 md:mt-10 lg:top-[580px] md:top-[460px] top-[430px] md:mb-5">
              {icons.map((icon) => (
                <p
                  className={`${
                    index === icons.indexOf(icon)
                      ? 'bg-white'
                      : 'bg-white bg-opacity-[0.17] border-0'
                  } text-[15px] rounded-full cursor-pointer`}
                  onClick={() => dataSetter(icon)}
                >
                  {icon}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full h-full flex flex-col items-center justify-center lg:mt-0 md:mt-10">
          <div
            style={{ backgroundImage: `url(${data.images.webp})` }}
            className="secondHeading2 flex md:w-[400px] md:h-[460px] w-[226.15px] h-[223px] bg-contain bg-no-repeat items-center lg:justify-end bg-center"
          />{' '}
          <div className="md:hidden bg-[#383B4B] w-[327px]  h-[1px] " />
        </div>
      </div>
    </div>
  );
};

export default Crew;
