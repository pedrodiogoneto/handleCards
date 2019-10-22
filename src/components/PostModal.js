import React, { useState, useEffect } from 'react'
import Modal from '@material-ui/core/Modal';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import styled from 'styled-components'

export default function PostModal({ showModal, handleOnClose, handleOnSubmit }) {
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const [image, setImage] = useState('')
	const [errorMessage, setErrorMessage] = useState('')
    

	useEffect(() => {
		return clearForm()
	}, [showModal])
    
	const clearForm = () => {
		setTitle('')
		setDescription('')
		return setImage('')
	}
    
	const isFormValid = () => title && description

	const handleSave = () => {
		if(!isFormValid()) return setErrorMessage('Título y Descripcíon obligatórios')

		const data = { title, description, image }
		handleOnSubmit(data)
		return handleOnClose()
	}
    
	return (
		<div>
			<Modal 
				open={showModal}
				onClose={handleOnClose}
				disableAutoFocus={true}
				style={{
					position: 'absolute',
					top: '25%',
					left: '30%',
					width: '40%',
					userSelect: 'none'
				}}>
				<div style={{ 
					backgroundColor: 'white',
					padding: '10%',

				}}>
					<h2>Nueva tarjeta</h2>

					<Input fullWidth required value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Título" />
					<Input fullWidth required value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Descripción" />
					<Input fullWidth value={image} onChange={(e) => setImage(e.target.value)} placeholder="Imagen (Url)" />
                
					{ errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage> }

					<Button color="secondary" onClick={()=> handleSave()}>Anadir</Button>
				</div>    
			</Modal>
		</div>
	)
}

const ErrorMessage = styled.p`
    color: red
`