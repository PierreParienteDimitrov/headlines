import React, { useReducer, useState } from 'react';
import axios from 'axios';
import { ArticlesContext } from './articlesContext';
import { ArticlesReducer } from './articlesReducer';
import { SEARCH_ARTICLES, CLEAR_ARTICLES, SET_LOADING } from '../types';

const ArticlesState = (props) => {
	const initialState = {
		articles: [],
		loading: false,
		alert: false,
	};

	const [state, dispatch] = useReducer(ArticlesReducer, initialState);

	// Search Articles
	const getArticles = async (query) => {
		try {
			setLoading();
			const options = {
				method: 'GET',
				url: `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${process.env.NYT_Key}`,
			};

			const res = await axios.request(options);

			dispatch({ type: SEARCH_ARTICLES, payload: res.data.response.docs });
		} catch (err) {
			console.log(err);
		}
	};

	// // Clear Articles

	// // Set Alert

	// Set Loading
	const setLoading = () => dispatch({ type: SET_LOADING });

	console.log(state);

	return (
		// <ArticlesContext.Provider
		// 	value={{
		// 		articles: [],
		// 		loading: false,
		// 		// getArticles,
		// 	}}
		// >
		// 	{props.children}
		// </ArticlesContext.Provider>

		<ArticlesContext.Provider
			value={{
				articles: state.articles,
				loading: state.false,
				alert: state.false,
				getArticles,
			}}
		>
			{props.children}
		</ArticlesContext.Provider>
	);
};

export default ArticlesState;
