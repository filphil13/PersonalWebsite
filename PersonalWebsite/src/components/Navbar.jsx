import { useState } from 'react';
import {
	FaBars,
	FaTimes,
	FaGithub,
	FaLinkedin,
  } from 'react-icons/fa';

import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

function Navbar() {
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);

    return (
		<>
			<div className='font-mono w-full h-[80px] fixed bg-[#000814] flex justify-between items-center px-4 mb-'>
				<div>
					<h1 className='text-5xl  text-color5 ml-10 '>FM</h1>
				</div>

				<div className="hidden md:inline-flex items-center">
					<button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
						Resume
					</button>
					<button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4">
						Projects
					</button>
					<button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4">
						Contact
					</button>
					<button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
						Cool Shit
					</button>
				</div>

				{/* Hamburger */}
				<div onClick={handleClick} className='md:hidden z-10'>
					{!nav ? <FaBars /> : <FaTimes />}
				</div>
		
				{/* Mobile menu */}
				<ul
					className={
					!nav
						? 'hidden'
						: 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
					}
				>	
					<li className='font-mono py-6 text-4xl'>
						<Link onClick={handleClick} to='home' smooth={true} duration={500}>
							Home
						</Link>
					</li>
					<li className='font-mono py-6 text-4xl'>
						{' '}
						<Link onClick={handleClick} to='about' smooth={true} duration={500}>
							About
						</Link>
					</li>
					<li className='font-mono py-6 text-4xl'>
						{' '}
						<Link onClick={handleClick} to='skills' smooth={true} duration={500}>
							Skills
						</Link>
					</li>
					<li className='font-mono py-6 text-4xl'>
						{' '}
						<Link onClick={handleClick} to='work' smooth={true} duration={500}>
							Work
						</Link>
					</li>
					<li className='font-mono py-6 text-4xl'>
						{' '}
						<Link onClick={handleClick} to='contact' smooth={true} duration={500}>
							Contact
						</Link>
					</li>
				</ul>

				{/* Social icons */}
				<div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
					<ul>
						<li className='w-[160px] h-[60px] px-4 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
							<a
								className='flex justify-between items-center w-full text-gray-300'
								href='https://www.linkedin.com/in/filipe-madureira-b0a2861b5/'
							>
								Linkedin <FaLinkedin size={30} />
							</a>
						</li>
						<li className='w-[160px] h-[60px] px-4 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
							<a
								className='flex justify-between items-center w-full text-gray-300'
								href='https://github.com/filphil13'
							>
								Github <FaGithub size={30} />
							</a>
						</li>
						<li className='w-[160px] h-[60px] px-4 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
							<a
								className='flex justify-between items-center w-full text-gray-300'
								href='/'
							>
								Email <HiOutlineMail size={30} />
							</a>
						</li>
						<li className='w-[160px] h-[60px] px-4 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
							<a
								className='flex justify-between items-center w-full text-gray-300'
								href='/'
								>
								Resume <BsFillPersonLinesFill size={30} />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	)
  }
  
  export default Navbar