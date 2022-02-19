import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import { useGlobalContext } from '../../context/contextCart'

const HeaderCartButton = (props) => {
	const { items } = useGlobalContext()
	const numberItems = items.reduce((acc, item) => {
		return acc + item
	}, 0)

	return (
		<button className={classes.button} onClick={props.onShow}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={classes.badge}>{numberItems}</span>
		</button>
	)
}

export default HeaderCartButton
