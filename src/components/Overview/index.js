import cn from 'classnames'

import { useForecast } from 'context/ForecastContext'

import Speedometer from 'components/Speedometer'

import Foggy from 'images/foggy.png'
import HumidityIcon from 'svgs/humidity.svg'
import WindIcon from 'svgs/wind.svg'

import styles from './index.module.scss'
import Image from 'next/image'

export const Overview = () => {
	const { forecast } = useForecast()

	return (
		<>
			<h2>Today&apos;s Overview</h2>
			<div className={styles['overview-wrapper']}>
				<div className={styles['overview-container']}>
					<div className={cn(styles['overview-panel'], 'panel')}>
						<label>Wind Status</label>
						<div className={styles['chart-container']}>
							<div className={styles['chart']}>
								<WindIcon />
							</div>
						</div>
						<div className={styles['footer-container']}>
							<span className={styles['detail']}>
								{forecast.current?.windSpeed10m?.toFixed(2)} mph
							</span>
							<span className={styles['detail']}>
								{new Date().toLocaleTimeString('en-US', {
									hour: 'numeric',
									minute: '2-digit',
									hour12: true,
								})}
							</span>
						</div>
					</div>
					<div className={cn(styles['overview-panel'], 'panel')}>
						<label>UV Index</label>
						<div className={styles['chart-container']}>
							<div className={styles['chart']}>
								<Speedometer value={6} />
							</div>
						</div>
						<div className={cn(styles['footer-container'], styles['single'])}>
							<span className={styles['detail']}>5.50 UV</span>
						</div>
					</div>
					<div className={cn(styles['overview-panel'], 'panel')}>
						<label>Humidity</label>
						<div className={styles['chart-container']}>
							<div className={styles['chart']}>
								<HumidityIcon />
							</div>
						</div>
						<div className={styles['footer-container']}>
							<span className={styles['detail']}>
								{forecast.current?.relativeHumidity2m}%
							</span>
							<span v>
								The dew point is {forecast.current?.temperature2m?.toFixed()}
								&deg; right now
							</span>
						</div>
					</div>
					<div className={cn(styles['overview-panel'], 'panel')}>
						<label>Visibility</label>
						<div className={styles['chart-container']}>
							<Image src={Foggy} height={90} alt="visibility" />
						</div>
						<div className={styles['footer-container']}>
							<span className={styles['detail']}>04 km</span>
							<span className={styles['detail']}>
								Haze is affecting visibility
							</span>
						</div>
					</div>
				</div>
				<div className={styles['cta-container']}>
					<label>Explore global map of wind weather and ocean condition </label>
					<button className="cta-trigger">Get Started</button>
				</div>
			</div>
		</>
	)
}

export default Overview
