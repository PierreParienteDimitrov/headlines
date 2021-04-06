import {
	SEARCH_ARTICLES,
	CLEAR_ARTICLES,
	SET_LOADING,
	REMOVE_ALERT,
	SET_ALERT,
} from '../types';

export const ArticlesReducer = (state, action) => {
	switch (action.type) {
		case SEARCH_ARTICLES:
			return { ...state, articles: action.payload, loading: false };
		case SET_LOADING:
			return { ...state, loading: true };
		case SET_ALERT:
			return { ...state, alert: true };
		case REMOVE_ALERT:
			return { ...state, alert: false };
		case CLEAR_ARTICLES:
			return { ...state, articles: action.payload };
		default:
			return state;
	}
};
