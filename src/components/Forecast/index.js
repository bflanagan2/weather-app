import cn from 'classnames'

import { useForecast } from 'context/ForecastContext'

import WeatherIcon from 'components/WeatherIcon'

import styles from './index.module.scss'

export const Forecast = () => {
	const { forecast } = useForecast()

	const getPrettyDay = timestamp => {
		const fullDay = [
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday',
		]
		const dayAbbreviations = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
		const date = new Date(timestamp)
		const dayIndex = date.getUTCDay()
		return {
			day: fullDay[dayIndex],
			abbr: dayAbbreviations[dayIndex],
		}
	}

	return (
		<div className={styles['forecast-container']}>
			<div className={styles['days-container']}>
				{forecast.daily?.time?.map((timestamp, i) => (
					<div key={timestamp} className={cn(styles['day-container'], 'panel')}>
						<div className={cn(styles['day'], 'day')}>
							{getPrettyDay(timestamp).abbr}
						</div>
						<div className={styles['weather-code']}>
							<WeatherIcon code={forecast.daily.weatherCode[i]} />
						</div>
						<div className={styles['temp']}>
							{forecast.daily.temperature2mMax[i].toFixed()}&deg;
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Forecast
