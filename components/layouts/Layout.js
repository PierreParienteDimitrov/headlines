import Head from 'next/head';
import Footer from '../footer';

const Layout = ({ children }) => {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
