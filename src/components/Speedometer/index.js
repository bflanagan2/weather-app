import styles from './index.module.scss'

export const Speedometer = ({ value }) => {
	return (
		<div className={styles['speedometer-container']}>
			<div
				className={styles['speedometer-overlay']}
				style={{ '--value': value }}
			></div>
			<div className={styles['speedometer-marks']}>
				<span className={styles['mark']}>0</span>
				<span className={styles['mark']}>2</span>
				<span className={styles['mark']}>4</span>
				<span className={styles['mark']}>6</span>
				<span className={styles['mark']}>8</span>
				<span className={styles['mark']}>10</span>
				<span className={styles['mark']}>12</span>
			</div>
		</div>
	)
}

export default Speedometer
