const initialState = { 
	userAction: '', 
	posts: [
		{id: 1, title: 'GOLF', description: 'Golf is an amazing sport!', image: 'https://www.mallorcadiario.com/fotos/1/408551_golf_thumb_708.jpg'},
		{id: 2, title: 'SURF', description: 'The biggest wave ever surfed was in nazaré, portugal', image: 'https://as.com/deportes_accion/imagenes/2019/04/30/surf/1556616678_839082_1556617141_noticia_normal.jpg'},
		{id: 3, title: 'FOOTBALL', description: 'Also known as Ronaldo`s playground', image: 'https://zap.aeiou.pt/wp-content/uploads/2019/06/41d82ef9aa72abcc10169bf69db1411c-783x450.jpg'}
	],   
	error: '' 
};

export default function reduxReducer(state = initialState, action) {
	switch (action.type) {
	case 'GET_POSTS': {
		return {
			...state,
			posts: action.posts ? action.posts : state.posts
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
	case 'SORT_POSTS': {
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
