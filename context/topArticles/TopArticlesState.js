import { useReducer } from 'react';
import { topArticlesReducer } from './topArticlesReducer';
import { TopArticlesContext } from './topArticlesContext';
import axios from 'axios';
import { GET_TOP_ARTICLES, SET_LOADING } from '../types';

const TopArticlesState = (props) => {
	const initialState = {
		topArticles: [],
		loading: false,
	};

	const [state, dispatch] = useReducer(topArticlesReducer, initialState);

	// Get top articles
	const getTopArticles = async () => {
		try {
			setLoading();
			const options = {
				method: 'GET',
				url: `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.NYT_Key}`,
			};

			const res = await axios.request(options);

			const data = res.data.results;

			dispatch({ type: GET_TOP_ARTICLES, payload: data });
			// console.log(data);
		} catch (err) {
			console.log(err);
		}
	};

	// set loading
	const setLoading = () => dispatch({ type: SET_LOADING });

	return (
		<TopArticlesContext.Provider
			value={{ articles: state.articles, loading: state.loading, getTopArticles }}
		>
			{props.children}
		</TopArticlesContext.Provider>
	);
};

export default TopArticlesState;
