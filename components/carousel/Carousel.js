import styles from './Carousel.module.scss';

const Carousel = () => {
	return (
		<div className={styles.carousel}>
			<div className={styles.slide}>
				<h1>Slide One</h1>
				<p>Slide Content 1</p>
			</div>
			<div className={styles.slide}>
				<h1>Slide Two</h1>
				<p>Slide Content 2</p>
			</div>
			<div className={styles.slide}>
				<h1>Slide Three</h1>
				<p>Slide Content 3</p>
			</div>
			<div className={styles.slide}>
				<h1>Slide Four</h1>
				<p>Slide Content 4</p>
			</div>
		</div>
	);
};

export default Carousel;
