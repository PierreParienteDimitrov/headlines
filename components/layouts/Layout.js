import Head from 'next/head';
import Navigation from '../navigation';

const Layout = ({ children }) => {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navigation />
			{children}
		</div>
	);
};

export default Layout;
