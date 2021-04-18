import Link from 'next/link';
import { useRouter } from 'next/router';
import { Links } from './links';

import ContainerFluid from '../layouts/ContainerFluid';

const Navigation = () => {
	const router = useRouter();

	return (
		<ContainerFluid>
			<div className='pt-6 pb-10 px-12'>
				<ul className='flex w-full justify-between'>
					{Links.map((link, index) => {
						return (
							<li
								className={
									router.pathname == link.href
										? `px-4 py-2 bg-gray-200 rounded-full`
										: `px-4 py-2 white rounded-full`
								}
							>
								<Link href={link.href}>
									<a>{link.title}</a>
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</ContainerFluid>
	);
};

export default Navigation;
