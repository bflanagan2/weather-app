import { useState } from 'react'

import cn from 'classnames'

import { useForecast } from 'context/ForecastContext'

import SearchIcon from 'svgs/search.svg'

import styles from './index.module.scss'

export const SearchForm = () => {
	const [query, setQuery] = useState('')
	const { fetchSearchResults } = useForecast()

	const handleSubmit = async e => {
		e.preventDefault()

		if (query.trim()) {
			const _q = query
			setQuery('')
			await fetchSearchResults(_q)
		}
	}

	const handleChange = e => {
		setQuery(e.target.value)
	}

	return (
		<form
			className={cn(styles['search-form-container'], 'panel')}
			onSubmit={handleSubmit}
		>
			<SearchIcon />
			<input
				type="text"
				placeholder="Search City"
				value={query}
				onChange={handleChange}
			/>
		</form>
	)
}

export default SearchForm
