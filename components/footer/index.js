import React from 'react';
import Link from 'next/link';
import Container from '../layouts/Container';
import { BiHomeCircle, BiSearchAlt2, BiStar } from 'react-icons/bi';

const Footer = () => {
	return (
		<div className='w-full fixed bottom-0 left-0 bg-gray-100 px-4 py-6 z-10'>
			<Container>
				<ul className='flex w-6/12 m-auto justify-between'>
					<li>
						<Link href='/'>
							<a>
								<div className='flex flex-col items-center'>
									<BiHomeCircle />
									Home
								</div>
							</a>
						</Link>
					</li>
					<li>
						<Link href='/search'>
							<a>
								<div className='flex flex-col items-center'>
									<BiSearchAlt2 />
									Search
								</div>
							</a>
						</Link>
					</li>
					<li>
						<Link href='/topstories'>
							<a>
								<div className='flex flex-col items-center cursor-pointer'>
									<BiStar />
									Top Stories
								</div>
							</a>
						</Link>
					</li>
				</ul>
			</Container>
		</div>
	);
};

export default Footer;
