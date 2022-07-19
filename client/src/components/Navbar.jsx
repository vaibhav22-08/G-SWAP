import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from 'react-icons/ai';
import logo from '../images/full-logo.svg';
import { useState } from "react";
const NavbarItem = ({ title, classProps }) => {
  return (
    <li className={`mx-4 cursor-pointer ${classProps}`}>
      {title}
    </li>
  )
}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="w-full flex justify-between items-center md:px-8 px-5 md:pt-8 pt-5 max-w-screen-2xl mx-auto">
      <div className="md:flex-[0.8] flex-initial justify-center items-center z-50">
        <img src={logo} alt="logo" className="w-32 cursor-pointer w-min-fit " />
      </div>

      <ul className=" text-black text-xs font-spot md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {[<a href='#transaction' >TRANSACTIONS</a>,<a href="https://metamask.io/download" target='_blank'>METAMASK</a>].map((item, index) => (
          <NavbarItem classProps={"bg-opacity-20 h-7 opacity-80 bg-white px-4 hover:bg-opacity-70 rounded flex justify-center items-center"} key={item + index} title={item} />
        ))}
        <li className="bg-black font-mono text-white py-2 px-7 mx-4 rounded cursor-pointer hover:bg-[#3a3a3a]">
        <a href="https://vaibhav22-portfolio.netlify.app" target='_blank'>CONTACT</a>
        </li>
      </ul>

      <div className="flex relative ">
        {toggleMenu
          ? <AiOutlineClose fontSize={28} className="text-black md:hidden cursor-pointer z-20 " onClick={() => setToggleMenu(false)} />
          : <HiMenuAlt4 fontSize={28} className="text-black md:hidden cursor-pointer z-20 " onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <ul className=" text-2xl animate-fade w-screen font-styrene font-black z-10 fixed top-0 -right-0 px-2 h-screen md:hidden flex flex-col justify-start items-start pt-20 bg-white bg-opacity-60 backdrop-blur-lg animate-slide-in">
            {/*  <li className="text-xl my-2">
              <AiOutlineClose className="stroke-3" onClick={() => setToggleMenu(false)} />
            </li> */}
            {[<a href='#transaction' >TRANSACTIONS</a>,<a href="https://metamask.io/download" target='_blank'>METAMASK</a>,<a href="https://vaibhav22-portfolio.netlify.app" target='_blank'>CONTACT</a>].map((item, index) => (
              <NavbarItem key={item + index} title={item} classProps="font-900 w-full items-center flex block relative text-block my-2 py-3 text-2xl  border-b border-black border-opacity-10 " />
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
