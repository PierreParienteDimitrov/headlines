import React, { useState } from 'react';
import Link from 'next/link';

const Nav = () => {
	const [close, setclose] = useState(true);

	const handleMenu = () => {
		setclose(!close);
	};

	return (
		<>
			{/* Mobile Nav */}
			<div className='w-full h-16 bg-gray-800 flex justify-end items-center md:hidden'>
				{/* Icon */}
				<div
					className='bg-gray-200 w-10 h-10 mr-2 cursor-pointer'
					onClick={handleMenu}
				></div>
			</div>

			<nav
				className={`bg-gray-800 h-screen flex items-center justify-center transition delay-150 duration-700 ease-in-out ${
					close ? 'transform translate-x-full' : 'transform translate-x-0'
				} md:flex md:h-20 md:w-full md:transform md:translate-x-0`}
			>
				{/* MenuItems */}
				<ul className='flex flex-col items-center text-white md:flex-row md:w-w-9/12 md:space-x-12'>
					<li>
						<Link href='/'>Home</Link>
					</li>
					<li>
						<Link href='/about'>About us</Link>
					</li>
					<li>
						<Link href='/contact'>Contact</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Nav;
