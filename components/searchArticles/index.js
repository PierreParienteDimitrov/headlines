import { useState, useContext } from 'react';
import { ArticlesContext } from '../../context/articles/articlesContext';
import Container from '../layouts/Container';
import ContainerFluid from '../layouts/ContainerFluid';
import { FiSearch } from 'react-icons/fi';
import Spinner from '../spinner';

const SearchArticle = () => {
	const articleContext = useContext(ArticlesContext);
	// console.log('--------');
	// console.log(articleContext);
	const {
		articles,
		alert,
		loading,
		getArticles,
		setAlert,
		removeAlert,
		clearArticles,
	} = articleContext;

	const [query, setQuery] = useState('');

	// onChange
	const onChange = (e) => {
		e.preventDefault();
		setQuery(e.target.value);
	};

	// onSubmit
	const onSubmit = (e) => {
		e.preventDefault();

		if (!query) {
			setAlert();
		} else {
			removeAlert();
			// setLoading(true);
			getArticles(query);
		}
	};

	// clear articles
	const onClick = () => {
		setQuery('');
		clearArticles();
	};

	// isLoading
	const IsLoading = () => {
		if (loading) {
			return <Spinner />;
		} else {
			return (
				<article>
					{articles &&
						articles.map((article, index) => {
							console.log(article);
							let picture;
							if (article.multimedia.length > 0) {
								picture = article.multimedia[0].url;
							} else {
								return;
							}

							return (
								<div key={index} className='w-full py-6'>
									{picture && (
										<a href={article.web_url} target='blank' className='cursor-pointer'>
											<img
												src={`https://www.nytimes.com/${picture}`}
												alt='Picture of the author'
												width={500}
												height={500}
												className='object-cover -z-10'
											/>
										</a>
									)}

									<div className='z-10'>
										<h3>{article.headline.main}</h3>
										<p>{article.abstract}</p>
										<a href={article.web_url} target='blank'>
											LINK
										</a>
									</div>
								</div>
							);
						})}
				</article>
			);
		}
	};

	return (
		<div className='h-full w-full relative top-20'>
			<div className='text-center mb-16'>
				<h3>Headlines</h3>
			</div>
			<Container>
				<form
					className='flex items-center px-4 border-b border-gray-200'
					onSubmit={onSubmit}
				>
					<FiSearch className='w-6 h-6 mr-6 text-gray-300' />
					<input
						type='text'
						name='search'
						placeholder='Search articles'
						value={query}
						onChange={onChange}
						className='w-full focus:outline-none'
					/>
					<input type='submit' placeholder='submit' className='cursor-pointer' />

					{articles.length > 0 && <button onClick={onClick}>Clear Search</button>}
				</form>
				{alert && (
					<div>
						<p>Please enter search</p>
					</div>
				)}
			</Container>

			<ContainerFluid>
				<IsLoading />
			</ContainerFluid>
		</div>
	);
};

export default SearchArticle;
