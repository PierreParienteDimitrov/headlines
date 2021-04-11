import axios from 'axios';
import Browse from '../components/browse';
import TopArticleState from '../context/topArticles/TopArticlesState';
import { jsonify } from '../utils/dbConnect';

const browse = ({ data }) => {
	return (
		<TopArticleState>
			<div>
				<Browse data={data} />
			</div>
		</TopArticleState>
	);
};

export const getServerSideProps = async () => {
	const options = {
		method: 'GET',
		url: `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.NYT_Key}`,
	};

	const res = await axios.request(options);

	const data = await res.data.results;
	// console.log(data);

	return {
		props: { data: jsonify(data) },
	};
};

export default browse;
