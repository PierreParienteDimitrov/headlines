import { useState, useContext } from 'react';

import Form from '../components/form/Form';

import Spinner from '../components/spinner/Spinner';
import { ArticlesContext } from '../context/articles/articlesContext';
import ArticlesState from '../context/articles/ArticlesState';

const Browse = () => {
	// const value = useContext(ArticlesContext);
	// console.log(value);

	// const [query, setQuery] = useState('');
	// // const [articles, setArticles] = useState([]);
	// const [alert, setAlert] = useState(false);
	// // const [loading, setLoading] = useState(false);

	// const clearArticles = (e) => {
	// 	e.preventDefault();
	// 	setArticles([]);
	// 	setQuery('');
	// 	setAlert(false);
	// };

	// Form Function

	return (
		<ArticlesState>
			<Form />
			{/* {loading ? (
			<div>
				<Spinner />
			</div>
		) : (
			form()
		)} */}
			{/* <p>Hello</p> */}
		</ArticlesState>
	);
};

export default Browse;
