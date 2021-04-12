import axios from 'axios';
import Browse from '../components/browse';
import TopArticleState from '../context/topArticles/TopArticlesState';
import { jsonify } from '../utils/dbConnect';

const browse = ({ data }) => {
	return (
		<TopArticleState>
			<Browse data={data} />
		</TopArticleState>
	);
};

export const getStaticProps = async () => {
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
