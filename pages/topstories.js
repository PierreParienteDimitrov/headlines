import ArticleList from '../components/article/ArticleList';
import TopArticleState from '../context/topArticles/TopArticlesState';

const browse = () => {
	return (
		<TopArticleState>
			<div>
				<ArticleList />
			</div>
		</TopArticleState>
	);
};

export default browse;
