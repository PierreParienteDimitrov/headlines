import ArticleList from '../components/article/ArticleList';
import IsLoading from '../components/isLoading/IsLoading';
import TopArticleState from '../context/topArticles/TopArticlesState';

const browse = () => {
	return (
		<TopArticleState>
			{/* <IsLoading>
		
			</IsLoading> */}
			<div>
				<ArticleList />
			</div>
		</TopArticleState>
	);
};

export default browse;
