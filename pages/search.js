import { useState, useContext } from 'react';
import Form from '../components/form/Form';
import IsLoading from '../components/isLoading/IsLoading';
import Spinner from '../components/spinner/Spinner';
import { ArticlesContext } from '../context/articles/articlesContext';
import ArticlesState from '../context/articles/ArticlesState';

const Search = () => {
	return (
		<ArticlesState>
			<IsLoading>
				<div>
					<Form />
				</div>
			</IsLoading>
		</ArticlesState>
	);
};

export default Search;
