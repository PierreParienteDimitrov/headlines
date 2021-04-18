import React from 'react';
import ContainerFluid from '../layouts/ContainerFluid';
import Container from '../layouts/Container';

const Article = ({ index, topArticle }) => {
	return (
		<div key={index} className='mb-16 w-screen'>
			<Container>
				<div className='mb-4'>
					<img
						src={topArticle.multimedia[0].url}
						alt=''
						className={`w-full md:w-6/12 md:m-auto`}
					/>
				</div>

				<div className={`w-full md:w-6/12 md:m-auto`}>
					<ul className='flex flex-wrap mb-2'>
						{topArticle.des_facet.map((el, index) => {
							return (
								<div className='mr-1 pb-1' key={index}>
									<li className='text-xxs uppercase' key={index}>
										{el} -
									</li>
								</div>
							);
						})}
					</ul>

					<h2 className='mb-2'>{topArticle.title}</h2>
					<p>{topArticle.abstract}</p>

					<div className='mt-6'>
						<a
							href={topArticle.url}
							target='blank'
							className='text-sm uppercase underline'
						>
							Read Full Article
						</a>
					</div>
				</div>
			</Container>

			{/* <button onClick={() => like(article)}>Like</button> */}
		</div>
	);
};

export default Article;
