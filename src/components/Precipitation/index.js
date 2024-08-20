import Image from 'next/image'

import PrecipPlaceholder from 'images/precip-chart.png'

export const Precipitation = () => {
	return (
		<div>
			<h2>Chance of Rain</h2>
			<div>
				<Image src={PrecipPlaceholder} alt="precipitation" />
			</div>
		</div>
	)
}

export default Precipitation
