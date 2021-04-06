import { SEARCH_ARTICLES, CLEAR_ARTICLES, SET_LOADING } from '../types';

export const ArticlesReducer = (state, action) => {
	switch (action.type) {
		case SEARCH_ARTICLES:
			return { ...state, articles: action.payload, loading: false };
		case SET_LOADING:
			return { ...state, loading: true };
		default:
			return state;
	}
};
