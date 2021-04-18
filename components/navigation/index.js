import Link from 'next/link';
import { useRouter } from 'next/router';
import { Links } from './links';
import Container from '../layouts/Container';

const Navigation = () => {
	const router = useRouter();

	return (
		<Container>
			<div className='pt-6 pb-10 md:w-6/12 md:m-auto'>
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
		</Container>
	);
};

export default Navigation;
