import cn from 'classnames'

import styles from './index.module.scss'

export const Avatar = () => {
	return (
		<div className={cn(styles['avatar-container'], 'avatar-container')}>
			<div
				className={styles['avatar']}
				style={{ backgroundImage: `url(/images/avatar.png)` }}
			/>
		</div>
	)
}

export default Avatar
