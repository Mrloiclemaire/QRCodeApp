import React from 'react'
import ReactDOM from 'react-dom'
import classes from './Modal.module.css'

const Backdrop = (props) => {
	return (
		<div className={classes.backdrop}>
			<div>{props.children}</div>
		</div>
	)
}

const ModalOverlay = (props) => {
	return (
		<div className={classes.modal}>
			<div className={classes.content}>{props.children}</div>
		</div>
	)
}

const portalElement = document.getElementById('overlay')

const Modal = ({ children }) => {
	return (
		<>
			{ReactDOM.createPortal(<Backdrop />, portalElement)}
			{ReactDOM.createPortal(
				<ModalOverlay>{children}</ModalOverlay>,
				portalElement
			)}
		</>
	)
}

export default Modal
