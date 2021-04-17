import { useContext, useEffect } from 'react';
import { TopArticlesContext } from '../../context/topArticles/topArticlesContext';
import Spinner from '../spinner';
import Article from '../article';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Browse = ({ data }) => {
	const topArticleContext = useContext(TopArticlesContext);

	// console.log(data);

	const {
		topArticles,
		loading,
		setLoading,
		getTopArticles,
		likeArticle,
	} = topArticleContext;

	console.log(topArticles);

	// Passing the data to the context when component mounts
	useEffect(() => {
		// setLoading();
		getTopArticles(data);
		// console.log(topArticles);
	}, []);

	return (
		<div>
			{topArticles &&
				topArticles.map((topArticle, index) => {
					return <Article key={index} topArticle={topArticle} index={index} />;
				})}
		</div>
	);
};

export default Browse;
