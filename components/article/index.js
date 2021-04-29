import React from 'react';
import ContainerFluid from '../layouts/ContainerFluid';
import Container from '../layouts/Container';
import styles from './Article.module.scss';

const Article = ({ index, topArticle }) => {
	return (
		<div key={index} className='mb-16 w-screen '>
			<div
				className={`w-full md:w-4/12 md:m-auto ${styles.card} ${styles.element2}`}
			>
				<div className='mb-4'>
					<img
						src={topArticle.image}
						alt=''
						className={`w-full ${styles.imgRadius}`}
					/>
				</div>

				<div className={`w-full pb-10 px-4`}>
					{/* <ul className='flex flex-wrap mb-2'>
						{topArticle.des_facet.map((el, index) => {
							return (
								<div className='mr-1 pb-1' key={index}>
									<li className='text-xxs uppercase' key={index}>
										{el} -
									</li>
								</div>
							);
						})}
					</ul> */}

					<h2 className='mb-2'>{topArticle.title}</h2>
					<p>{topArticle.description}</p>

					<div className='mt-6 flex  align-items'>
						<a
							href={topArticle.url}
							target='blank'
							className='text-sm uppercase underline'
						>
							Read Full Article on {topArticle.source}
						</a>
					</div>
				</div>
			</div>

			{/* <button onClick={() => like(article)}>Like</button> */}
		</div>
	);
};

export default Article;
