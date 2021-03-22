import { useState } from 'react';
import axios from 'axios';

const contact = () => {
	const [email, setEmail] = useState('');
	const [state, setState] = useState('IDLE');
	const [errorMessage, setErrorMessage] = useState(null);

	const subscribe = async () => {
		setState('LOADING');
		setErrorMessage(null);

		try {
			const response = await axios.post('/api/form', { email });
			setState('SUCCESS');
		} catch (e) {
			setErrorMessage(e.reponse.data.error);
			setState('ERROR');
		}
	};

	return (
		<div className='bg-gray-300'>
			<div>
				<input
					type='text'
					placeholder='Enter Email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<button
					className={`w-full text-center ${
						state === 'LOADING' ? 'bg-red-800' : 'bg-yellow-100'
					}`}
					type='button'
					disabled={state === 'LOADING'}
					onClick={subscribe}
				>
					SEND
				</button>
			</div>
			<div>
				{state === 'ERROR' && <p>{errorMessage}</p>}
				{state === 'SUCCESS' && <p>Success!</p>}
			</div>
		</div>
	);
};

export default contact;
