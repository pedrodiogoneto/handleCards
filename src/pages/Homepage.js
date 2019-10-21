import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

import { connect } from 'react-redux';

import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

import { GET_POSTS, ADD_POST } from '../redux/actions/actions'


const Homepage = (props) => {
	const [posts, setPosts] = useState([])

	useEffect(() => { props.GET_POSTS() }, [])

	useEffect(() => { setPosts(props.posts) }, [props.posts])
	console.log('POSTS', posts)
	return (
		<Wrapper>

			<Fab color="secondary" aria-label="add" onClick={()=> props.ADD_POST({title: '1', description: '2', url: '...'})}>
				<AddIcon />
			</Fab>

		</Wrapper>
	)
}

const mapDispatchToProps = dispatch => ({
	GET_POSTS: () => dispatch(GET_POSTS()),
	ADD_POST: (data) => dispatch(ADD_POST(data))
})

const mapStateToProps = state => ({
	posts: state.posts,
	
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)

const Wrapper = styled.div`
	display: flex;
	align-self: flex-end;
	flex-direction: row-reverse;
	background-color: rgba(229, 229, 229);
`