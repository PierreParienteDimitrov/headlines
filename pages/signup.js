import { useState } from 'react';
import { useRouter } from 'next/router';
import { dbConnect, jsonify } from '../utils/dbConnect';
import User from '../models/User';
import Container from '../components/layouts/Container';

const signIn = ({ users }) => {
	const router = useRouter();

	// Call this function to refresh props
	const refreshData = () => router.replace(router.asPath);

	// States
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

		console.log(user);

		const data = await fetch('http://localhost:3000/api/users', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user),
		});

		refreshData();
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
				{users.map((user) => {
					return (
						<div key={user._id}>
							<h2>{user.username}</h2>
							<p>{user.email}</p>
							<p>{user.password}</p>
						</div>
					);
				})}
			</div>
		</Container>
	);
};

export async function getServerSideProps(context) {
	dbConnect();
	const users = await User.find({});

	return {
		props: {
			users: jsonify(users),
		},
	};
}

export default signIn;
