import React, { useReducer, useState } from 'react';
import axios from 'axios';
import { ArticlesContext } from './articlesContext';
import { ArticlesReducer } from './articlesReducer';
import {
	SEARCH_ARTICLES,
	CLEAR_ARTICLES,
	SET_LOADING,
	REMOVE_ALERT,
	SET_ALERT,
} from '../types';

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
			console.log(res.data.response.docs);

			dispatch({ type: SEARCH_ARTICLES, payload: res.data.response.docs });
		} catch (err) {
			console.log(err);
		}
	};

	// Clear Articles
	const clearArticles = () => dispatch({ type: CLEAR_ARTICLES });

	// Set Alert
	const setAlert = () => dispatch({ type: SET_ALERT });

	// Remove Alert
	const removeAlert = () => dispatch({ type: REMOVE_ALERT });

	// Set Loading
	const setLoading = () => dispatch({ type: SET_LOADING });

	return (
		<ArticlesContext.Provider
			value={{
				articles: state.articles,
				loading: state.loading,
				alert: state.alert,
				getArticles,
				setAlert,
				removeAlert,
				clearArticles,
			}}
		>
			{props.children}
		</ArticlesContext.Provider>
	);
};

export default ArticlesState;
