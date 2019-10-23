import reduxMiddlewarePostsDataHelpper from '../../helpers/reduxMiddlewarePostsDataHelpper'

const handlePostsDataMiddleware = (store) => (next) => (action) => {
	if(action.type === 'GET_POSTS') return next(action)
    
	const { addNewPost, getSelectedPost, deleteSelectedPost, editSelectedPost } = reduxMiddlewarePostsDataHelpper

	switch (action.type) {
	case 'ADD_POST': {
		action.posts = [...store.getState().posts, addNewPost(action.payload.data)]
		break
	}
	case 'UPDATE_USER_ACTION_POST': {
		action.selectedPost = getSelectedPost(store.getState().posts, action.payload.id)
		break
	}
	case 'DELETE_POST': {
		action.posts = deleteSelectedPost(store.getState().posts, action.payload.id)
		break
	}
	case 'EDIT_POST': {
		action.posts = editSelectedPost(store.getState().posts, action.payload.id, action.payload.data)
		break
	}
	default: {
		return action;
	}
	}
	next(action);
}

export default handlePostsDataMiddleware