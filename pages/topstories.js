import ArticleList from '../components/browse/ArticleList';
import Browse from '../components/browse';
import TopArticleState from '../context/topArticles/TopArticlesState';

const browse = () => {
	return (
		<TopArticleState>
			<div>
				<Browse />
			</div>
		</TopArticleState>
	);
};

export default browse;
