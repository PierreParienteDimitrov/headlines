import Form from '../components/form/Form';
import IsLoading from '../components/isLoading/IsLoading';
import ArticlesState from '../context/articles/ArticlesState';

const Search = () => {
	return (
		<ArticlesState>
			<div>
				<Form />
			</div>
		</ArticlesState>
	);
};

export default Search;
