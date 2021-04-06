import Image from 'next/image';

const Spinner = () => {
	return (
		<div>
			<img src='/loading.gif' alt='loading...' />
		</div>
	);
};

export default Spinner;
