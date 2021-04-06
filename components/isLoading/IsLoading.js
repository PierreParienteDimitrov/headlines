import { useContext } from 'react';
import { ArticlesContext } from '../../context/articles/articlesContext';
import Form from '../form/Form';

import Spinner from '../spinner/Spinner';

import From from '../form/Form';

const IsLoading = ({ children }) => {
	const articleContext = useContext(ArticlesContext);
	// console.log('--------');
	// console.log(articleContext);
	const { loading } = articleContext;

	return <div>{loading ? <Spinner /> : children}</div>;
};

export default IsLoading;
