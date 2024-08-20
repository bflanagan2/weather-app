import { useEffect } from 'react'

import { useForecast } from 'context/ForecastContext'

import styles from './index.module.scss'

export const Attract = () => {
	const { loading, error } = useForecast()

	useEffect(() => {
		document.documentElement.setAttribute('data-attract', 'attract')

		return () => {
			document.documentElement.removeAttribute('data-attract')
		}
	}, [])

	return (
		<div className={styles['attract-container']}>
			<div className={styles['video-background']}>
				<video autoPlay muted loop playsInline controls>
					<source src="/images/backdrop.mp4" type="video/mp4" />
				</video>
			</div>
			{loading && <h1>Hang tight... gathering data</h1>}
			{!loading && !error && (
				<h1>Enter a city above to get your local weather forecast.</h1>
			)}
			{error && (
				<>
					<h1>
						💥 We&apos;re sorry, but we can&apos;t find data for that location.
						💥
					</h1>
					<p>
						Please try another City. (please only enter the city - you don&apos;
						need to enter the state or country. 😀
					</p>
				</>
			)}
		</div>
	)
}

export default Attract
