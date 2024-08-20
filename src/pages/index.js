import { useForecast } from 'context/ForecastContext'

import Attract from 'components/Attract'
import Forecast from 'components/Forecast'
import Header from 'components/Header'
import OtherCities from 'components/OtherCities'
import Overview from 'components/Overview'
import Precipitation from 'components/Precipitation'

const Dashboard = () => {
	const { forecast, loading, error } = useForecast()

	return (
		<div className="page-wrapper">
			<Header />
			{(loading ||
				(!loading && error) ||
				(!loading && !forecast && !error)) && <Attract />}

			{!loading && forecast && (
				<div className="main-wrapper">
					<div className="main">
						<Forecast />
						<Overview />
					</div>
					<div className="rail">
						<Precipitation />
						<OtherCities />
					</div>
				</div>
			)}
		</div>
	)
}

export default Dashboard
