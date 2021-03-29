import Head from 'next/head';
import Nav from './Nav';

const Layout = ({ children }) => {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			{/* <Nav /> */}
			{children}
		</div>
	);
};

export default Layout;
