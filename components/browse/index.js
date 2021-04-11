import { useContext, useEffect } from 'react';
import { TopArticlesContext } from '../../context/topArticles/topArticlesContext';
import Spinner from '../spinner';
import Article from '../article';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Browse = () => {
	const topArticleContext = useContext(TopArticlesContext);

	// console.log(data);

	const {
		topArticles,
		loading,
		setLoading,
		getTopArticles,
		likeArticle,
	} = topArticleContext;

	console.log(topArticles);

	// Passing the data to the context when component mounts
	useEffect(() => {
		// setLoading();
		getTopArticles();
		// console.log(topArticles);
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
					{topArticles &&
						topArticles.map((topArticle, index) => {
							return <Article key={index} topArticle={topArticle} index={index} />;
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

export default Browse;
