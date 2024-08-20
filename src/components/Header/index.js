import Avatar from 'components/Avatar'
import Navigation from 'components/Navigation'
import SearchForm from 'components/SearchForm'
import ThemeToggle from 'components/ThemeToggle'

import styles from './index.module.scss'

export const Header = () => {
	return (
		<div className="main-wrapper">
			<div className="main">
				<div className={styles['header-container']}>
					<Navigation />
					<SearchForm />
				</div>
			</div>
			<div className="rail">
				<div className="rail-controls-container">
					<ThemeToggle />
					<Avatar />
				</div>
			</div>
		</div>
	)
}

export default Header
