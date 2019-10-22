import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { GET_POSTS, ADD_POST, UPDATE_USER_ACTION_POST } from '../redux/actions/actions'
import PostModal from '../components/PostModal';
import PostsGrid from '../components/PostsGrid';

import styled from 'styled-components'
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

const Homepage = (props) => {
	const [posts, setPosts] = useState([])
	const [showModal, setShowModal] = useState(false)
	const [userAction, setUserAction] = useState('')

	useEffect(() => { props.GET_POSTS() }, [])

	useEffect(() => { setPosts(props.posts) }, [props.posts])

	useEffect(() => { setUserAction(props.userAction) }, [props.userAction])

	useEffect(() => { 
		setShowModal(true)
		return (
			setUserAction(''),
			props.UPDATE_USER_ACTION_POST('')
		)
	}, [userAction])

	const handleShowModal = (value) => { setShowModal(value) }

	return (
		<Wrapper>
			<PostModal showModal={showModal} handleOnClose={() => handleShowModal(false)} handleOnSubmit={(data)=> props.ADD_POST(data)}/>

			<PostsGrid posts={posts}/>

			<ButtonWrapper>
				<Fab color="secondary" aria-label="add" onClick={() => props.UPDATE_USER_ACTION_POST('add')}>
					<AddIcon />
				</Fab>
			</ButtonWrapper>

		</Wrapper>
	)
}

const mapDispatchToProps = dispatch => ({
	GET_POSTS: () => dispatch(GET_POSTS()),
	ADD_POST: (data) => dispatch(ADD_POST(data)),
	UPDATE_USER_ACTION_POST: (action) => dispatch(UPDATE_USER_ACTION_POST(action)),

})

const mapStateToProps = state => ({
	posts: state.posts,
	userAction: state.userAction,
	
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)

const Wrapper = styled.div`
	height: 100%;
`

const ButtonWrapper = styled.div`
	display: flex;
	align-self: flex-end;
	flex-direction: row-reverse;
`