import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { RxCaretDown } from "react-icons/rx";
import { IoMdSearch } from "react-icons/io";
import { TbDiscount } from "react-icons/tb";
import { MdOutlineAssignmentInd } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
import { MdLiveHelp } from "react-icons/md";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Header = () => {
    // useState to manage menu visibility
    const [menuOpen, setMenuOpen] = useState(false);

    // Function to toggle the menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const links = [
        {
            icon: <IoMdSearch />,
            name: 'Search'
        },
        {
            icon: <TbDiscount />,
            name: 'Offers',
            sup: "New"
        },
        {
            icon: <MdLiveHelp />,
            name: 'Help'
        },
        {
            icon: <MdOutlineAssignmentInd />,
            name: 'Sign In'
        },
        {
            icon: <FaCartPlus />,
            name: 'Cart',
            sup: '(0)'
        },
    ];

    return (
        <>
            <header className='p-[15px] shadow-xl text-[#686b78]'>
                <div className="md:max-w-[1200px] w-full mx-2 md:mx-auto flex items-center gap-3">
                    <div className='w-[30px]'>
                        <img src={logo} alt="" className='w-full' />
                    </div>
                    <div className="">
                        <span className='font-bold border-b-[2px] border-[#686b78] hover:text-[#fc8019] hover:border-[#fc8019] cursor-pointer p-[1px]'>Restaurant</span>, Bashundhara R/A, Dhaka
                    </div>
                    {/* Menu icon for mobile */}
                    <div className='md:hidden flex justify-center items-center' onClick={toggleMenu}>
                        <HiOutlineMenuAlt3 className='inline' fontSize={30} />
                    </div>
                    {/* Desktop menu */}
                    <nav className='md:flex list-none gap-7 ml-auto font-semibold text-[18px] hidden'>
                        {
                            links.map((link, index) => {
                                return <li key={index} className='flex items-center gap-2 cursor-pointer hover:text-[#fc8019]'>
                                    {link.icon}
                                    {link.name}
                                    <sup>{link.sup}</sup>
                                </li>
                            })
                        }
                    </nav>
                </div>

                {/* Mobile menu, conditionally rendered */}
                {menuOpen && (
                    <nav className='md:hidden list-none flex flex-col gap-3 mt-3'>
                        {
                            links.map((link, index) => {
                                return <li key={index} className='flex items-center gap-2 cursor-pointer hover:text-[#fc8019]'>
                                    {link.icon}
                                    {link.name}
                                    <sup>{link.sup}</sup>
                                </li>
                            })
                        }
                    </nav>
                )}
            </header>
        </>
    );
}

export default Header;
