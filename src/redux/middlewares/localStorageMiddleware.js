const localStorageMiddleware = (store) => (next) => (action) => {
	if(action.type === 'UPDATE_USER_ACTION_POST' || action.type === 'SORT_POSTS') return next(action)
    
	if(action.type === 'GET_POSTS') {
		if(JSON.parse(localStorage.getItem('posts'))) {
			action.posts = JSON.parse(localStorage.getItem('posts'))
		}
	}
	
    const posts = action.posts ? action.posts : store.getState().posts
	localStorage.setItem('posts', JSON.stringify(posts));

	next(action)
}

export default localStorageMiddleware