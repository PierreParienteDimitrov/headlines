import { useContext, useEffect } from 'react';
import { TopArticlesContext } from '../../context/topArticles/topArticlesContext';
import Article from '../article';
import Spinner from '../spinner';

const ArticleList = () => {
	const topArticleContext = useContext(TopArticlesContext);

	const { articles, loading, getTopArticles, likeArticle } = topArticleContext;
	console.log(articles);

	useEffect(async () => {
		getTopArticles();
	}, []);

	const like = (article) => {
		likeArticle(article);
	};

	const IsLoading = () => {
		if (loading) {
			return <Spinner />;
		} else {
			return (
				<div>
					{articles &&
						articles.map((article, index) => {
							return <Article article={article} index={index} />;
						})}
				</div>
			);
		}
	};

	return (
		<div>
			<IsLoading />
		</div>
	);
};

export default ArticleList;
