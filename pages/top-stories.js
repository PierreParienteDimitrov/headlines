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

const sources = 'guardian,ny-times,le-monde';

export const getStaticProps = async () => {
	const options = {
		method: 'GET',
		url: `http://api.mediastack.com/v1/news?access_key=${process.env.MEDIASTACK_Key}&sources=${sources}`,
	};

	const res = await axios.request(options);

	const data = await res.data.results;
	console.log(typeof res.data.data);

	return {
		props: { data: res.data.data },
		// props: { data: jsonify(data) },
	};
};

export default browse;
