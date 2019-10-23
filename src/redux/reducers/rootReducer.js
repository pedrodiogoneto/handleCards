const initialState = { 
	userAction: '', 
	posts: [
		{id: '1', title: 'GOLF', description: 'kjhaslkdjhflkasjdhflkhjaslkdfhaskldjhfkajshdfklhasdlkfhkalsdhjfkjahsdfkhasdklfjh', url: 'https://www.mallorcadiario.com/fotos/1/408551_golf_thumb_708.jpg'},
		{id: '2', title: 'GOLF', description: 'kjhaslkdjhflkasjdhflkhjaslkdfhaskldjhfkajshdfklhasdlkfhkalsdhjfkjahsdfkhasdklfjh', url: 'https://www.mallorcadiario.com/fotos/1/408551_golf_thumb_708.jpg'},
		{id: '3', title: 'GOLF', description: 'kjhaslkdjhflkasjdhflkhjaslkdfhaskldjhfkajshdfklhasdlkfhkalsdhjfkjahsdfkhasdklfjh', url: 'https://www.mallorcadiario.com/fotos/1/408551_golf_thumb_708.jpg'}
	],   
	error: '' 
};

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
			posts: action.posts
		};
	}
	case 'UPDATE_USER_ACTION_POST': {
		return {
			...state,
			userAction: action.payload.userAction,
			selectedPost: action.selectedPost
		};
	}
	case 'DELETE_POST': {
		return {
			...state,
			posts: action.posts
		};
	}
	case 'EDIT_POST': {
		return {
			...state,
			posts: action.posts
		};
	}

	default: {
		return state;       
	}   
	}
}
