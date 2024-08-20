import { createContext, useState, useContext } from 'react'

const ForecastContext = createContext()

export const ForecastPRovider = ({ children }) => {
	const [location, setLocation] = useState(null)
	const [forecast, setForecast] = useState(null)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)

	const fetchSearchResults = async query => {
		setLocation(query)
		setLoading(true)
		setError(false)
		try {
			const response = await fetch(
				`/api/dashboard?query=${encodeURIComponent(query)}`
			)
			const data = await response.json()
			setForecast(data)
		} catch (error) {
			console.error('Error fetching search results:', error)
			setError(true)
			setForecast(null)
		} finally {
			setLoading(false)
		}
	}

	return (
		<ForecastContext.Provider
			value={{ forecast, loading, location, error, fetchSearchResults }}
		>
			{children}
		</ForecastContext.Provider>
	)
}

export const useForecast = () => {
	const context = useContext(ForecastContext)
	if (!context) {
		throw new Error('useForecast must be used within a ForecastProvider')
	}
	return context
}
