import Image from 'next/image'

import weather_codes from 'helpers/weather-codes'

import Clear from 'images/clear.png'
import Cloudy from 'images/cloudy.png'
import Foggy from 'images/foggy.png'
import Rain from 'images/rain.png'
import Snow from 'images/snow.png'
import Thunderstorm from 'images/thunderstorm.png'

export const WeatherIcon = ({ code }) => {
	let imageSrc
	const weather = weather_codes[code]

	if (weather.indexOf('mainly') > -1) imageSrc = Clear
	if (weather.indexOf('partly') > -1) imageSrc = Cloudy
	if (weather.indexOf('overcast') > -1) imageSrc = Cloudy
	if (weather.indexOf('fog') > -1) imageSrc = Foggy
	if (weather.indexOf('drizzle') > -1) imageSrc = Rain
	if (weather.indexOf('rain') > -1) imageSrc = Rain
	if (weather.indexOf('snow') > -1) imageSrc = Snow
	if (weather.indexOf('thunderstorm') > -1) imageSrc = Thunderstorm

	imageSrc = imageSrc || Clear

	return <Image src={imageSrc} alt="Weather Icon" width={50} height={50} />
}

export default WeatherIcon
