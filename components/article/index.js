import React from 'react';
import Container from '../layouts/Container';

const Article = ({ index, article }) => {
	return (
		<Container>
			<div key={index}>
				<img src={article.multimedia[0].url} alt='' className='w-9/12 m-auto' />
				<h2>{article.title}</h2>
				<p>{article.abstract}</p>
				{/* <button onClick={() => like(article)}>Like</button> */}
			</div>
		</Container>
	);
};

export default Article;
