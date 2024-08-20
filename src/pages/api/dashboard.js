import { fetchWeatherApi } from 'openmeteo'

export default async function handler(req, res) {
	try {
		const { query } = req.query

		const location_response = await fetch(
			`https://geocoding-api.open-meteo.com/v1/search?name=${query}&count=1&language=en&format=json`
		)
		const location_data = await location_response.json()

		const params = {
			latitude: location_data.results[0].latitude,
			longitude: location_data.results[0].longitude,
			current: [
				'temperature_2m',
				'relative_humidity_2m',
				'apparent_temperature',
				'weather_code',
				'surface_pressure',
				'wind_speed_10m',
				'wind_direction_10m',
			],
			daily: [
				'weather_code',
				'temperature_2m_max',
				'temperature_2m_min',
				'sunrise',
				'sunset',
			],
			temperature_unit: 'fahrenheit',
			wind_speed_unit: 'mph',
			precipitation_unit: 'inch',
		}

		const url = 'https://api.open-meteo.com/v1/forecast'
		const responses = await fetchWeatherApi(url, params)

		const range = (start, stop, step) =>
			Array.from({ length: (stop - start) / step }, (_, i) => start + i * step)

		const response = responses[0]

		const utcOffsetSeconds = response.utcOffsetSeconds()
		const current = response.current()
		const daily = response.daily()

		const weatherData = {
			current: {
				time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
				temperature2m: current.variables(0).value(),
				relativeHumidity2m: current.variables(1).value(),
				apparentTemperature: current.variables(2).value(),
				weatherCode: current.variables(3).value(),
				surfacePressure: current.variables(4).value(),
				windSpeed10m: current.variables(5).value(),
				windDirection10m: current.variables(6).value(),
			},
			daily: {
				time: range(
					Number(daily.time()),
					Number(daily.timeEnd()),
					daily.interval()
				).map(t => new Date((t + utcOffsetSeconds) * 1000)),
				weatherCode: daily.variables(0).valuesArray(),
				temperature2mMax: daily.variables(1).valuesArray(),
				sunrise: daily.variables(2).valuesArray(),
				sunset: daily.variables(3).valuesArray(),
			},
		}

		res.status(200).json(weatherData)
	} catch (e) {
		res.status(500).json({
			error: e,
		})
	}
}
