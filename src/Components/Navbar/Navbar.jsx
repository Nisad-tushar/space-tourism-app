import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { HiX } from 'react-icons/hi';
import logo from '../../Assets/shared/logo.svg';
import { menuContext } from '../../context/ContextProvider';
import { categories } from '../../Data';
const Navbar = () => {
  const { dispatch, menuOpen } = useContext(menuContext);
  const [filter, setFilter] = useState('home');
  const toggler = () => {
    dispatch({ type: 'TOGGLE' });
  };
  const FilterChanger = (paramName) => {
    useEffect(() => {
      setFilter(paramName);
    }, [paramName]);
  };
  return (
    <div className="w-full py-10 flex md:p-0 p-[24px] lg:p-[24px] ">
      <div className="hidden md:relative md:w-full md:h-[96px] md:flex md:items-center justify-between">
        <div className="flex items-center md:ml-[38px] w-12 h-12">
          <NavLink to={'/'}>
            <img src={logo} className="w-full h-full" alt="logo" />
          </NavLink>
        </div>
        {/* Desktop & Tablet Menu Starts Here */}
        <div className=" absolute l-[167px] lg:w-[420px]  lg:h-[1px] bg-[#FFFFFF] opacity-[25.15%] z-10 lg:ml-28" />
        <div className=" lg:bg-[rgba(255, 255, 255, 0.04)]   md:bg-white md:bg-opacity-5  py-[36px] lg:px-[121px] backdrop-blur-[81.5485px]">
          <ul className="flex items-center justify-center  text-white gap-[50px] text-[16px] tracking-[2.7px] px-9">
            {categories.map((category) => (
              <NavLink
                to={category.to}
                className={({ isActive }) =>
                  isActive
                    ? ` ${FilterChanger(category.paramName, isActive)}`
                    : ``
                }
                key={category.id}
              >
                <div className="  group-hover:cursor-pointer relative group">
                  <li className=" flex gap-[10px] font-navtext group">
                    <p className="font-bold">{category.number} </p>

                    <p>{category.name}</p>
                  </li>

                  <div
                    className={`${
                      filter === category.paramName
                        ? 'absolute bg-white w-full h-[3px] mt-8'
                        : 'absolute bg-white opacity-0 group-hover:opacity-[50%] w-full h-[3px] mt-8'
                    }`}
                  />
                </div>
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
      {/* Desktop & Tablet Menu Ends Here */}
      {/* Mobile Menu Starts Here */}

      <div className="relative w-full lg:hidden md:hidden flex items-center justify-between">
        <div className="flex items-center w-[40px] h-[40px]">
          <NavLink to={'/'}>
            <img src={logo} alt="" />
          </NavLink>
        </div>
        {!menuOpen && (
          <GiHamburgerMenu
            className="text-white w-[40px] h-[40px] z-30 cursor-pointer"
            onClick={toggler}
          />
        )}

        {menuOpen && (
          <div className="absolute w-[254px] h-screen bg-[#FFFFFF0A] backdrop-blur-[81.5485px] ml-auto -top-6 -right-6 bottom-0 z-50 stroke-[#979797]">
            <div className="w-[80px] h-[80px] top-0 right-0 ml-auto">
              <HiX
                onClick={toggler}
                className="text-[#D0D6F9] w-[80px] h-[80px] p-6 cursor-pointer"
              />
            </div>
            <ul className="flex flex-col justify-center text-white gap-[30px] text-[18px] tracking-[4px] py-[40px] pl-8">
              <NavLink to={'/'}>
                <div className="group" onClick={toggler}>
                  <li className=" flex gap-[10px] font-navtext">
                    <p className="font-bold">00 </p>

                    <p>Home</p>
                  </li>
                </div>
              </NavLink>
              <NavLink to={'/destination'}>
                <div className="group" onClick={toggler}>
                  <li className=" flex gap-[10px] font-navtext">
                    <p className="font-bold">01</p>

                    <p>Destination</p>
                  </li>
                </div>
              </NavLink>
              <NavLink to={'/crew'}>
                <div className="group" onClick={toggler}>
                  <li className=" flex gap-[10px] font-navtext">
                    <p className="font-bold">02</p>

                    <p>Crew</p>
                  </li>
                </div>
              </NavLink>
              <NavLink to={'/technology'}>
                <div className="group" onClick={toggler}>
                  <li className=" flex gap-[10px] font-navtext">
                    <p className="font-bold">03</p>

                    <p>Technology</p>
                  </li>
                </div>
              </NavLink>
            </ul>{' '}
          </div>
        )}
      </div>
      {/* Mobile Menu Ends Here */}
    </div>
  );
};

export default Navbar;
