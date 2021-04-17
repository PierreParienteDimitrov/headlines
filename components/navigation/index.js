import { useState, useEffect } from 'react';
import Link from 'next/link';
import { BiHomeCircle, BiSearchAlt2, BiStar } from 'react-icons/bi';
import ContainerFluid from '../layouts/ContainerFluid';
import NavLinks from '../navLinks';

const Navigation = () => {
	const [active, setActive] = useState({
		link1: false,
		link2: false,
		link3: false,
	});

	// console.log(active);

	const { link1, link2, link3 } = active;

	useEffect(() => {
		console.log(window.location.href);
		switch (window.location.href) {
			case 'http://localhost:3000/':
				return setActive({ link1: true, link2: false, link3: false });
			case 'http://localhost:3000/search':
				return setActive({ link1: false, link2: true, link3: false });
			case 'http://localhost:3000/topstories':
				return setActive({ link1: false, link2: false, link3: true });
			default:
				return;
		}
	}, []);

	const click = (e) => {
		const clicked = e.target.getAttribute('data-id');
		// console.log(clicked);
		switch (clicked) {
			case 'link1':
				return setActive({ link1: true, link2: false, link3: false });
			case 'link2':
				return setActive({ link1: false, link2: true, link3: false });
			case 'link3':
				return setActive({ link1: false, link2: false, link3: true });
			default:
				return setActive({ link1: false, link2: false, link3: false });
		}
	};

	return (
		<ContainerFluid>
			<div className='pt-6 pb-10 px-12'>
				<ul className='flex w-full justify-between'>
					<li>
						<Link href='/' passHref>
							<a
								className={
									link1
										? 'px-4 py-2 bg-gray-200 rounded-full'
										: 'px-4 py-2 white rounded-full'
								}
								data-id='link1'
								onClick={click}
							>
								Home
							</a>
						</Link>
					</li>
					<li>
						<Link href='/search'>
							<a
								className={
									link2
										? 'px-4 py-2 bg-gray-200 rounded-full'
										: 'px-4 py-2 white rounded-full'
								}
								data-id='link2'
								onClick={click}
							>
								Search
							</a>
						</Link>
					</li>
					<li>
						<Link href='/topstories'>
							<a
								className={
									link3
										? 'px-4 py-2 bg-gray-200 rounded-full'
										: 'px-4 py-2 white rounded-full'
								}
								data-id='link3'
								onClick={click}
							>
								Top Stories
							</a>
						</Link>
					</li>
				</ul>
			</div>
		</ContainerFluid>
	);
};

export default Navigation;
