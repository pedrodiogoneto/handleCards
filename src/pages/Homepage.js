import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { GET_POSTS, ADD_POST, UPDATE_USER_ACTION_POST, DELETE_POST, EDIT_POST, SORT_POSTS } from '../redux/actions/actions'
import PostModal from '../components/PostModal';
import PostsGrid from '../components/PostsGrid';

import styled from 'styled-components'
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';

const Homepage = (props) => {
	const [posts, setPosts] = useState([])
	const [showModal, setShowModal] = useState(false)
	const [userAction, setUserAction] = useState('')
	const [sortDirection, setSortDirection] = useState('ascending')

	useEffect(() => { props.GET_POSTS() }, [])

	useEffect(() => { setPosts(props.posts) }, [props.posts])

	useEffect(() => { setUserAction(props.userAction) }, [props.userAction])

	useEffect(() => {
		if(userAction === 'add' || userAction === 'edit') {
			setShowModal(true)
		} else if(userAction === 'delete' && props.selectedPost) {
			props.DELETE_POST(props.selectedPost.id)
		}
	}, [userAction])

	const cleanUserAction = () => {
		setUserAction('')
		props.UPDATE_USER_ACTION_POST('', '')
	}

	const handleShowModal = (value) => { 
		if(!value) {
			cleanUserAction()
		}
		return setShowModal(value)
	}

	const handleOnSubmit = (data) => {
		if(userAction === 'edit') props.EDIT_POST(data, props.selectedPost.id)
		else props.ADD_POST(data)
	}

	const handleSort = () => {
		const newDirection = sortDirection === 'descending' ? 'ascending' : 'descending'
		props.SORT_POSTS(newDirection)
		setSortDirection(newDirection)
	}

	console.log('PROPS ON HOMEPAGE', props)

	return (
		<Wrapper>
			<div>
				<SortButton onClick={()=> handleSort()}>Sort<Icon style={{ transform: `rotate(${sortDirection === 'ascending' ? '-90deg' : '90deg'})`, fontSize: '20pt'}}>arrow_right</Icon></SortButton>
			</div>
			
			<PostModal showModal={showModal} handleOnClose={() => handleShowModal(false)} handleOnSubmit={(data)=> handleOnSubmit(data)} userAction={userAction} selectedPost={props.selectedPost}/>

			<PostsGrid posts={posts}/>

			<AddButtonWrapper>
				<Fab color="secondary" aria-label="add" onClick={() => props.UPDATE_USER_ACTION_POST('add', '')}>
					<AddIcon />
				</Fab>
			</AddButtonWrapper>
		</Wrapper>
	)
}

const mapDispatchToProps = dispatch => ({
	GET_POSTS: () => dispatch(GET_POSTS()),
	ADD_POST: (data) => dispatch(ADD_POST(data)),
	UPDATE_USER_ACTION_POST: (action, id) => dispatch(UPDATE_USER_ACTION_POST(action, id)),
	DELETE_POST: (id) => dispatch(DELETE_POST(id)),
	EDIT_POST: (data, id) => dispatch(EDIT_POST(data, id)),
	SORT_POSTS: (sortDirection) => dispatch(SORT_POSTS(sortDirection)),
})

const mapStateToProps = state => ({
	posts: state.posts,
	userAction: state.userAction,
	selectedPost: state.selectedPost
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)

const Wrapper = styled.div`
	height: 100%;
`

const AddButtonWrapper = styled.div`
	display: flex;
	align-self: flex-end;
	flex-direction: row-reverse;
`

const SortButton = styled.button`
	float: right;
	font-size: 18pt;
	border: 0px;
	background-color: transparent;

`