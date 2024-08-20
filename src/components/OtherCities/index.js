import cn from 'classnames'

import WeatherIcon from 'components/WeatherIcon'

import styles from './index.module.scss'

export const OtherCities = () => {
	return (
		<div className={styles['other-cities-container']}>
			<h2>
				Other Cities <span>See All</span>
			</h2>
			<div className={styles['panels-container']}>
				<div className={cn(styles['panel'], 'panel')}>
					<div className={styles['details-container']}>
						<label>China</label>
						<div className={styles['city']}>Beijing</div>
						<div className={styles['forecast']}>Cloudy</div>
					</div>
					<div className={styles['icon-container']}>
						<WeatherIcon code={2} />
					</div>
				</div>
				<div className={cn(styles['panel'], 'panel')}>
					<div className={styles['details-container']}>
						<label>US</label>
						<div className={styles['city']}>California</div>
						<div className={styles['forecast']}>Windy</div>
					</div>
					<div className={styles['icon-container']}>
						<WeatherIcon code={45} />
					</div>
				</div>
				<div className={cn(styles['panel'], 'panel')}>
					<div className={styles['details-container']}>
						<label>Dubai</label>
						<div className={styles['city']}>Arab Emirates</div>
						<div className={styles['forecast']}>
							Mostly Sunny. It&apos;s a desert.
						</div>
					</div>
					<div className={styles['icon-container']}>
						<WeatherIcon code={0} />
					</div>
				</div>
				<div className={cn(styles['panel'], 'panel')}>
					<div className={styles['details-container']}>
						<label>Canada</label>
						<div className={styles['city']}>Charlottetown</div>
						<div className={styles['forecast']}>Light Snow Shower</div>
					</div>
					<div className={styles['icon-container']}>
						<WeatherIcon code={71} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default OtherCities
