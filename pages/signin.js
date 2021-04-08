import { useState } from 'react';
import { connectToDatabase } from '../utils/mongodb';

import Container from '../components/layouts/Container';

const signIn = ({ allUsers }) => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	// Create New User
	const createUser = async (e) => {
		e.preventDefault();

		const user = {
			username: username,
			email: email,
			password: password,
		};

		const data = await fetch('http://localhost:3000/api/users', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user),
		});

		window.location.reload();
	};

	return (
		<Container>
			<form
				action='submit'
				onSubmit={createUser}
				target='/'
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

			<div>
				{allUsers.map((user) => {
					return (
						<div key={user._id}>
							<h2>{user.username}</h2>
						</div>
					);
				})}
			</div>
		</Container>
	);
};

export async function getStaticProps() {
	const { db } = await connectToDatabase();

	const allUsers = await db.collection('users').find({}).limit(20).toArray();

	return {
		props: {
			allUsers: JSON.parse(JSON.stringify(allUsers)),
		},
	};
}

export default signIn;
