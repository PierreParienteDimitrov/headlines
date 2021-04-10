import { useContext, useEffect } from 'react';
import axios from 'axios';
import { TopArticlesContext } from '../../context/topArticles/topArticlesContext';
import Spinner from '../spinner';
import Article from '../article';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { jsonify } from '../../utils/dbConnect';

const Browse = ({ data }) => {
	const topArticleContext = useContext(TopArticlesContext);

	console.log(data);

	const { articles, loading, getTopArticles, likeArticle } = topArticleContext;
	console.log(articles);

	useEffect(async () => {
		getTopArticles();
	}, []);

	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
	};

	const IsLoading = () => {
		if (loading) {
			return <Spinner />;
		} else {
			return (
				// Carousel Component
				<Carousel
					arrows={true}
					swipeable={true}
					draggable={false}
					showDots={false}
					responsive={responsive}
					ssr={true} // means to render carousel on server-side.
					autoPlay={false}
					keyBoardControl={true}
					customTransition='all 1s'
					transitionDuration={1000}
					// containerClass='carousel-container'
				>
					{articles &&
						articles.map((article, index) => {
							return <Article key={index} article={article} index={index} />;
						})}
				</Carousel>
			);
		}
	};

	return (
		<div>
			<div>
				<h3>Browse</h3>
			</div>
			<IsLoading />
		</div>
	);
};

// export async function getStaticProps() {
// 	const options = {
// 		method: 'GET',
// 		url: `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.NYT_Key}`,
// 	};

// 	const res = await fetch(
// 		`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.NYT_Key}`
// 	);

// 	const data = await res.json();
// 	console.log(res);

// 	return {
// 		props: { data },
// 	};
// }

export default Browse;
