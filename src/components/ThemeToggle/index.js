import { useState, useEffect } from 'react'

import cn from 'classnames'

import MoonIcon from 'svgs/moon.svg'
import SunIcon from 'svgs/sun.svg'

import styles from './index.module.scss'

export const getInitialTheme = () => {
	if (typeof window !== 'undefined') {
		const storedTheme = localStorage.getItem('theme')
		if (storedTheme) return storedTheme

		return 'dark'
	}

	return 'dark'
}

export const ThemeToggle = () => {
	const [theme, setTheme] = useState(null)

	useEffect(() => {
		const initialTheme = getInitialTheme()
		setTheme(initialTheme)
		document.documentElement.setAttribute('data-theme', initialTheme)
	}, [])

	useEffect(() => {
		if (theme !== null) {
			localStorage.setItem('theme', theme)
			document.documentElement.setAttribute('data-theme', theme)
		}
	}, [theme])

	const toggleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark')
	}

	return (
		<div
			className={cn(styles['theme-toggle-container'], 'panel', 'bordered', {
				[styles['light']]: theme === 'light',
			})}
			onClick={toggleTheme}
		>
			<div className={styles['toggle-container']}>
				{theme === 'dark' ? <MoonIcon /> : <SunIcon />}
			</div>
		</div>
	)
}

export default ThemeToggle
