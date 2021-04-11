import React from 'react';
import Container from '../layouts/Container';
import styles from './Article.module.scss';

const Article = ({ index, topArticle }) => {
	return (
		<div key={index} className='mb-96 w-screen'>
			<img
				src={topArticle.multimedia[0].url}
				alt=''
				className={`w-full object-cover ${styles.carouselImg}`}
			/>
			<Container>
				<div className='w-8/12 m-auto'>
					<h2>{topArticle.title}</h2>
					<p>{topArticle.abstract}</p>
				</div>
			</Container>
			{/* <button onClick={() => like(article)}>Like</button> */}
		</div>
	);
};

export default Article;
