import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

import { connect } from 'react-redux';

import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

import { GET_POSTS } from '../redux/actions/actions'


const Homepage = (props) => {
	const 


	return(
		<Wrapper>

			<Fab color="secondary" aria-label="add">
				<AddIcon />
			</Fab>

		</Wrapper>
	)
}

const mapDispatchToProps = dispatch => ({
	GET_POSTS: () => dispatch(GET_POSTS())
})

const mapStateToProps = state => ({
	posts: state.posts,
	
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)

const Wrapper = styled.div`
	display: flex;
	align-self: flex-end;
	flex-direction: row-reverse;
`