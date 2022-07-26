import React, { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { HiX } from 'react-icons/hi';
import logo from '../../Assets/shared/logo.svg';

import { categories } from '../../Data';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState('right-[-254px]');
  const [filter, setFilter] = useState('home');
  const FilterChanger = (paramName) => {
    setFilter(paramName);
  };
  return (
    <div className="absolute w-full md:py-10 flex md:p-0 p-[24px] lg:p-[24px] ">
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
                <div
                  className={`${
                    filter === category.paramName
                      ? 'after:w-full after:border-b-[3px] border-white'
                      : 'hover:after:border-b-[3px] hover:after:border-white hover:after:border-opacity-50'
                  } relative after:content-['']  after:absolute hover:after:w-full  after:h-full   after:mt-3 group-hover:cursor-pointer group`}
                  // onClick={() => setFilter(category.paramName)}
                >
                  <li className=" flex gap-[10px] font-navtext group">
                    <p className="font-bold">{category.number} </p>

                    <p>{category.name}</p>
                  </li>
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
        {menuOpen === 'right-[-254px]' && (
          <GiHamburgerMenu
            className="text-white w-[40px] h-[40px] z-30 cursor-pointer"
            onClick={() => setMenuOpen('right-0')}
          />
        )}

        {menuOpen && (
          <div
            className={`fixed w-[254px] min-h-screen bg-[#FFFFFF0A] backdrop-blur-[81.5485px] ml-auto ${menuOpen} bottom-0 z-50 stroke-[#979797] transition-[width,.4s,ease-in-Out]`}
          >
            <div className="w-[80px] h-[80px] top-0 right-0 ml-auto">
              <HiX
                onClick={() => setMenuOpen('right-[-254px]')}
                className="text-[#D0D6F9] w-[80px] h-[80px] p-6 cursor-pointer"
              />
            </div>
            <ul className="flex flex-col justify-center text-white gap-[30px] text-[18px] tracking-[4px] py-[40px] pl-8">
              {categories.map((category) => {
                return (
                  <NavLink to={category.to}>
                    <div
                      className="group"
                      onClick={() => setMenuOpen('right-[-254px]')}
                    >
                      <li className=" flex gap-[10px] font-navtext">
                        <p className="font-bold">{category.number}</p>

                        <p>{category.name}</p>
                      </li>
                    </div>
                  </NavLink>
                );
              })}
            </ul>{' '}
          </div>
        )}
      </div>
      {/* Mobile Menu Ends Here */}
    </div>
  );
};

export default Navbar;
