import cn from 'classnames'

import { useForecast } from 'context/ForecastContext'

import DashboardIcon from 'svgs/dashboard.svg'
import NotificationIcon from 'svgs/notification.svg'
import PinIcon from 'svgs/pin.svg'

import styles from './index.module.scss'

export const Navigation = () => {
	const { location } = useForecast()

	return (
		<div className={styles['navigation-container']}>
			<div className={cn(styles['icon-container'], 'panel')}>
				<DashboardIcon />
			</div>
			<div className={cn(styles['icon-container'], 'panel')}>
				<NotificationIcon />
			</div>
			<div className={styles['location-container']}>
				<PinIcon />
				{location}
			</div>
		</div>
	)
}

export default Navigation
