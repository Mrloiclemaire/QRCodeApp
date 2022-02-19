
import { useState } from 'react'

import Header from './Components/Layout/Header'
import Meals from './Components/Meals/Meals'
import Cart from './Components/Cart/Cart'
import CartProvider from './store/CartProvider'

import "./App.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Admin from "./Components/Main/Admin"
import Main from "./Components/Main/Main"




function App() {
	const [cartIsShown, setCartIsShown] = useState(false)
	const [table, setTable] = useState("")

	const showCartHandler = () => {
		setCartIsShown(true)
	}

	const hideCartHandler = () => {
		setCartIsShown(false)
	}

	return (

		<CartProvider>
			{cartIsShown && <Cart onClose={hideCartHandler} />}

			<Header onShowCart={showCartHandler} />
			<main style={{ backgroundColor: 'rgb(233, 80, 20)' }}>
			<Router>
     	 <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/QR" element={<Admin nbTables={table} setTable={setTable}/>}/>
        <Route path="/Menu" element={<Meals />}/>
      	</Routes>
    	</Router>
				
			</main>
		
		</CartProvider>
	)
}

export default App
