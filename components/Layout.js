import Head from 'next/head';
import Nav from './Nav';

const Layout = ({ children }) => {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Nav />
			{children}
			<div>
				<h1>This is the footer</h1>
			</div>
		</div>
	);
};

export default Layout;
