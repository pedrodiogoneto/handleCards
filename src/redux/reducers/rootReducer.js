const initialState = { posts: [],   error: '' };

export default function reduxReducer(state = initialState, action) {
	switch (action.type) {
	case 'GET_POSTS': {
		return {
			...state,
		};
	}				
	default: {           
		return state;       
	}   
	}
}
