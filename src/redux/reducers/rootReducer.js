const initialState = { 
	userAction: '', 
	posts: [
		{id: '1', title: 'GOLF', description: 'kjhaslkdjhflkasjdhflkhjaslkdfhaskldjhfkajshdfklhasdlkfhkalsdhjfkjahsdfkhasdklfjh', url: 'https://www.mallorcadiario.com/fotos/1/408551_golf_thumb_708.jpg'},
		{id: '2', title: 'GOLF', description: 'kjhaslkdjhflkasjdhflkhjaslkdfhaskldjhfkajshdfklhasdlkfhkalsdhjfkjahsdfkhasdklfjh', url: 'https://www.mallorcadiario.com/fotos/1/408551_golf_thumb_708.jpg'},
		{id: '3', title: 'GOLF', description: 'kjhaslkdjhflkasjdhflkhjaslkdfhaskldjhfkajshdfklhasdlkfhkalsdhjfkjahsdfkhasdklfjh', url: 'https://www.mallorcadiario.com/fotos/1/408551_golf_thumb_708.jpg'}
	],   
	error: '' 
};

const getSelectedPost = (posts, id) => posts.find(post => post.id === id)
const deleteSelectedPost = (posts, id) => posts.filter(post => post.id !== id)
const editSelectedPost = (posts, id, data) => {
	return posts.map(post => {
		if(post.id === id) {
			post.title = data.title
			post.description = data.description
			post.image = data.image ? data.image : post.image
		}
		return post
	})
}
const addNewPost = data => Object.assign({ id: + new Date()}, data)


export default function reduxReducer(state = initialState, action) {
	console.log(action)
	switch (action.type) {
	case 'GET_POSTS': {
		return {
			...state,
		};
	}				
	case 'ADD_POST': {
		return {
			...state,
			posts: [...state.posts, addNewPost(action.payload.data)]
		};
	}
	case 'UPDATE_USER_ACTION_POST': {
		return {
			...state,
			userAction: action.payload.userAction,
			selectedPost: getSelectedPost(state.posts, action.payload.id)
		};
	}
	case 'DELETE_POST': {
		return {
			...state,
			posts: deleteSelectedPost(state.posts, action.payload.id)
		};
	}
	case 'EDIT_POST': {
		return {
			...state,
			posts: editSelectedPost(state.posts, action.payload.id, action.payload.data)
		};
	}

	default: {
		return state;       
	}   
	}
}
