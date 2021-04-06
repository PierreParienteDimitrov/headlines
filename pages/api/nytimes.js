import axios from 'axios';

export const GetArticles = async (query) => {
	try {
		const options = {
			method: 'GET',
			url: `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&fq=body.search&api-key=${process.env.NYT_Key}`,
		};

		const res = await axios.request(options);
		// console.log(res.data);
		return res;
	} catch (err) {
		console.log(err);
	}
};
