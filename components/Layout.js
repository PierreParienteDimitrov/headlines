import Head from 'next/head';

const Layout = ({ children }) => {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			{children}
		</div>
	);
};

export default Layout;
