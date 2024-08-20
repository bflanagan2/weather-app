import { Montserrat } from 'next/font/google'

import { ForecastPRovider } from 'context/ForecastContext'

import 'styles/globals.scss'

const montserrat = Montserrat({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
	variable: '--font-montserrat',
})

export default function App({ Component, pageProps }) {
	return (
		<main className={montserrat.variable}>
			<ForecastPRovider>
				<Component {...pageProps} />
			</ForecastPRovider>
		</main>
	)
}
