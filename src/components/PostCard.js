import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux';
import { UPDATE_USER_ACTION_POST } from '../redux/actions/actions'

const defaultImage = "https://resize-pdm.francedimanche.ladmedia.fr/r/1024,/img/2019-05/artichaux-2.jpg?ffb5cbaff3"

function PostCard({ post: { title, description, image = defaultImage, id}, UPDATE_USER_ACTION_POST }) {
	return (
		<CardWrapper>
			<Image src={image} alt={title}/>
			<TextWrapper>
				<Title>{title}</Title>
				<Description>{description}</Description>
			</TextWrapper>
			<ButtonsWrapper>
				<button onClick={() => UPDATE_USER_ACTION_POST('edit', id)}>edit</button>
				<button onClick={() => UPDATE_USER_ACTION_POST('delete', id)}>delete</button>
			</ButtonsWrapper>
		</CardWrapper>
	)
}

const mapDispatchToProps = dispatch => ({
	UPDATE_USER_ACTION_POST: (action, id) => dispatch(UPDATE_USER_ACTION_POST(action, id)),
})

const mapStateToProps = state => ({
	posts: state.posts
});

export default connect(mapStateToProps, mapDispatchToProps)(PostCard)


const ButtonsWrapper = styled.div`
    background-color: grey;   
`

const CardWrapper = styled.div`
    width: 25%;
    background-color: white;
    border-radius: 2px;
    margin: 20px;
    min-width: 250px;
    -webkit-box-shadow: 0px 5px 15px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 5px 15px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 5px 15px 0px rgba(0,0,0,0.75);
`

const Image = styled.img`
    width: 100%
`

const TextWrapper = styled.div`
    padding: 0px 5% 5%;
    margin-top: -50px
    width: 100%;
`

const Description = styled.p`
    white-space: nowrap;
    text-overflow: ellipsis;
    display: block;
    overflow: hidden;
    max-width: 80%;
    max-height: 35px;
`

const Title = styled.h5`
    white-space: nowrap;
    text-overflow: ellipsis;
    display: block;
    overflow: hidden;
    max-width: 80%;
    color:white;
`
