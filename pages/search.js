import SearchArticle from '../components/searchArticles';
import ArticlesState from '../context/articles/ArticlesState';

const search = () => {
	return (
		<ArticlesState>
			<div>
				<SearchArticle />
			</div>
		</ArticlesState>
	);
};

export default search;
