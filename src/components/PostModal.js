import React, { useState, useEffect } from 'react'
import Modal from '@material-ui/core/Modal';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import styled from 'styled-components'

export default function PostModal({ showModal, handleOnClose, handleOnSubmit, userAction, selectedPost }) {
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const [image, setImage] = useState('')
	const [errorMessage, setErrorMessage] = useState('')
	
	useEffect(() => {
		if(userAction === 'edit' && Object.keys(selectedPost).length !== 0) {
			setTitle(selectedPost.title)
			setDescription(selectedPost.description)
			setImage(selectedPost.image)
		}
	}, [userAction, selectedPost])

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
		<Modal open={showModal} onClose={handleOnClose} style={ModalStyles}>
			<InnerModalWrapper>
				<Title>Nueva tarjeta</Title>
				<Input fullWidth required value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Título" />
				<Input fullWidth required value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Descripción" />
				<Input fullWidth value={image} onChange={(e) => setImage(e.target.value)} placeholder="Imagen (Url)" />
				{ errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage> }
				<ButtonWrapper>
					<Button color="secondary" onClick={()=> handleSave()}>Anadir</Button>
				</ButtonWrapper>    
			</InnerModalWrapper>    
		</Modal>
	)
}

const ModalStyles = {
	position: 'absolute',
	top: '25%',
	left: '30%',
	width: '40%',
	userSelect: 'none'
}

const ErrorMessage = styled.p`
    color: red
`

const Title = styled.h2`
    text-align: center
`

const ButtonWrapper = styled.div`
	width: 100%;
	text-align: center;
	margin-top: 25px;
`

const InnerModalWrapper = styled.div`
	background-color: white;
	padding: 10%;
`