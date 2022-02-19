import react, { Fragment } from 'react'
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'

function App() {
	return (
		<Fragment>
			<Header />
			<main style={{ backgroundColor: '#e95014' }}>
				<Meals />
			</main>
		</Fragment>
	)
}

export default App
