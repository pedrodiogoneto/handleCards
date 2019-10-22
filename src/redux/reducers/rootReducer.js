const initialState = { userAction: '', posts: [{title: 'GOLF', description: 'kjhaslkdjhflkasjdhflkhjaslkdfhaskldjhfkajshdfklhasdlkfhkalsdhjfkjahsdfkhasdklfjh', url: 'https://www.mallorcadiario.com/fotos/1/408551_golf_thumb_708.jpg'}],   error: '' };

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
			posts: [...state.posts, action.payload.data]
		};
	}
	case 'UPDATE_USER_ACTION_POST': {
		return {
			...state,
			userAction: action.payload.userAction
		};
	}
	default: {
		return state;       
	}   
	}
}
