import react, { Fragment, useState } from 'react'
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'

function App() {
	const [modal, setIsModal] = useState(false)

	const handleModalShow = () => {
		setIsModal(true)
	}
	const hideModalShow = () => {
		setIsModal(false)
	}

	return (
		<Fragment>
			{modal && <Cart onClose={hideModalShow} />}
			<Header onShow={handleModalShow} />
			<main style={{ backgroundColor: '#e95014' }}>
				<Meals />
			</main>
		</Fragment>
	)
}

export default App
