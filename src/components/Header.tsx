import React from 'react';
import Navbar from './navBar';
import logo from '../assets/logo.svg'

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between w-[100%] whitespace-nowrap border-b border-solid border-b-[#e7ebf3] px-10 py-3">
      <div className="flex items-center gap-4 text-[#0e121b]">
        <div className="size-4">
          <img src={logo} alt="logo" />
        </div>
        <h2 className="text-[#0e121b] text-lg font-bold">Bouhvli</h2>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
