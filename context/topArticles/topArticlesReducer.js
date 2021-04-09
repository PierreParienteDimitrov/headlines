import { GET_TOP_ARTICLES, SET_LOADING } from '../types';

export const topArticlesReducer = (state, action) => {
	switch (action.type) {
		case GET_TOP_ARTICLES:
			return { ...state, articles: action.payload, loading: false };
		case SET_LOADING:
			return { ...state, loading: true };
		default:
			return state;
	}
};
