const initialState = { posts: [{title: '', description: '', url: '...'}],   error: '' };

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
	default: {
		return state;       
	}   
	}
}
