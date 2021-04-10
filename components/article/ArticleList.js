import { useContext, useEffect } from 'react';
import { TopArticlesContext } from '../../context/topArticles/topArticlesContext';
import Spinner from '../spinner/Spinner';

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
							return (
								<div key={index}>
									<h2>{article.title}</h2>
									<p>{article.abstract}</p>
									<button onClick={() => like(article)}>Like</button>
								</div>
							);
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
