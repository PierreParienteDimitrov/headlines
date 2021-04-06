import { userReducer } from 'react';
import axios from 'axios';
import ArticlesContext from './articlesContext';
import ArticlesReducer from './articlesReducer';
import {
	SEARCH_ARTICLES,
	CLEAR_ARTICLES,
	SET_ALERT,
	SET_LOADING,
} from '../types';

const ArticlesState = (props) => {
	const initialState = {
		articles: null,
	};
};
