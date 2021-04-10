import { GET_TOP_ARTICLES, SET_LOADING, LIKE_ARTICLE } from '../types';

export const topArticlesReducer = (state, action) => {
	switch (action.type) {
		case GET_TOP_ARTICLES:
			return { ...state, articles: action.payload, loading: false };
		case SET_LOADING:
			return { ...state, loading: true };
		case LIKE_ARTICLE:
			return { ...state, loading: true };
		default:
			return state;
	}
};
