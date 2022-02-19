import React from 'react'
import ReactDOM from 'react-dom'

const Backdrop = (props) => {
	return <div></div>
}

const ModalOverlay = (props) => {
	return (
		<div>
			<div></div>
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
