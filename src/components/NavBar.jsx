import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'

const NavBar = ({ mode, setMode, lightModeStyles, darkModeStyles }) => {

    const onButtonClick = () => {
        fetch('Resume.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Resume.pdf';
                alink.click();
            })
        })
    }

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleModeToggle = () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    };

    return (
        <div className='fixed w-full h-[60px] flex justify-between items-center px-4' style={mode === 'light' ? lightModeStyles : darkModeStyles}>
            {/* <img src={Logo} alt='logo' style={{ marginTop: '10px', width: '150px', height: 'auto', backgroundColor: 'transparent' }} /> */}
            <label className='switch'>
                <input type='checkbox' checked={mode === 'light'} onChange={handleModeToggle} />
                <span className='slider'></span>
            </label>

            {/* Menu */}
            <ul className='hidden md:flex'>
                <li>
                    <Link to="home" smooth={true} offset={50} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} offset={50} duration={500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} offset={50} duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="projects" smooth={true} offset={50} duration={500}>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} offset={50} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile Menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="home" smooth={true} offset={50} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="about" smooth={true} offset={50} duration={500}>
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="skills" smooth={true} offset={50} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="projects" smooth={true} offset={50} duration={500}>
                        Projects
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="contact" smooth={true} offset={50} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Social Icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-pink-500'>
                        <button className='flex justify-between items-center w-full text-gray-300' onClick={onButtonClick}>Resume <BsFillPersonLinesFill size={30} /></button>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-800'>
                        <a className='flex justify-between items-center w-full text-gray-300' href='https://www.linkedin.com/in/subhan--khan/'>Linkedin <FaLinkedin size={30} /></a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-700'>
                        <a className='flex justify-between items-center w-full text-gray-300' href='https://github.com/subhank97'>Github <FaGithub size={30} /></a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-100'>
                        <a className='flex justify-between items-center w-full text-black' href='https://medium.com/@subhank1997'>Medium <FaMedium size={30} /></a>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default NavBar