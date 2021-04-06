import { useState } from 'react';
import axios from 'axios';

import { FiSearch } from 'react-icons/fi';
import Container from '../components/layouts/Container';
import ContainerFluid from '../components/layouts/ContainerFluid';

const Browse = () => {
	const [query, setQuery] = useState('');
	const [articles, setArticles] = useState(null);
	const [alert, setAlert] = useState(false);

	const onChange = (e) => {
		e.preventDefault();
		setQuery(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		setArticles(null);

		if (!query) {
			setAlert(true);
		} else {
			setAlert(false);
			getArticles(query);
		}
	};

	const getArticles = async (query) => {
		try {
			const options = {
				method: 'GET',
				url: `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${process.env.NYT_Key}`,
			};

			const res = await axios.request(options);
			// console.log('---------------------------');
			// console.log(res);
			const arr = res.data.response.docs;
			setArticles(arr);
		} catch (err) {
			console.log(err);
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
				</form>

				{alert && (
					<div>
						<p>Please enter search</p>
					</div>
				)}
			</Container>

			<ContainerFluid>
				<article>
					{articles &&
						articles.map((article, index) => {
							console.log(article);
							let picture;
							if (article.multimedia.length > 0) {
								picture = article.multimedia[8].url;
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
			</ContainerFluid>
		</div>
	);
};

export default Browse;
