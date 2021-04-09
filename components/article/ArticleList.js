import { useContext, useEffect } from 'react';
import { TopArticlesContext } from '../../context/topArticles/topArticlesContext';
import Spinner from '../spinner/Spinner';

const ArticleList = () => {
	const topArticleContext = useContext(TopArticlesContext);

	const { articles, loading, getTopArticles } = topArticleContext;
	console.log(articles);

	useEffect(async () => {
		getTopArticles();
	}, []);

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
