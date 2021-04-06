import { useContext } from 'react';
import { ArticlesContext } from '../../context/articles/articlesContext';

import Spinner from '../spinner/Spinner';

const IsLoading = ({ children }) => {
	const articleContext = useContext(ArticlesContext);
	const { loading } = articleContext;

	return <div>{loading ? <Spinner /> : children}</div>;
};

export default IsLoading;
