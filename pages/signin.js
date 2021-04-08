import { useState } from 'react';
import Container from '../components/layouts/Container';

const signIn = () => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const createUser = async (e) => {
		e.preventDefault();

		const user = {
			username: { username },
			email: { email },
			password: { password },
		};

		const data = await fetch('http://localhost:3000/api/users', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user),
		});
		// const content = await data.json();

		console.log(data);

		// console.log(res);

		// console.log('-------------');
		// console.log(user);
	};

	return (
		<Container>
			<form
				action='submit'
				onSubmit={createUser}
				className='flex flex-col w-10/12 m-auto'
			>
				{/* username */}
				<input
					type='text'
					placeholder='Enter your name'
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					className='border-b mb-4'
				/>

				{/* email */}
				<input
					type='text'
					placeholder='Enter your email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className='border-b mb-4'
				/>

				{/* password */}
				<input
					type='text'
					placeholder='Enter your password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					className='border-b mb-4'
				/>

				<input type='submit' placeholder='submit' className='cursor-pointer' />
			</form>
		</Container>
	);
};

export default signIn;
