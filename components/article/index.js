import React from 'react';
import ContainerFluid from '../layouts/ContainerFluid';
import Container from '../layouts/Container';
import styles from './Article.module.scss';

const Article = ({ index, topArticle }) => {
	return (
		<div key={index} className='mb-16 w-screen'>
			<ContainerFluid>
				<div className='mb-4'>
					<img src={topArticle.multimedia[0].url} alt='' className={`w-full`} />
				</div>
				<Container>
					<h2 className='mb-2'>{topArticle.title}</h2>
					<p>{topArticle.abstract}</p>
				</Container>
			</ContainerFluid>

			{/* <button onClick={() => like(article)}>Like</button> */}
		</div>
	);
};

export default Article;
