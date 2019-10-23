const localStorageMiddleware = (store) => (next) => (action) => {
	if(action.type === 'UPDATE_USER_ACTION_POST') return next(action)
    
	if(action.type === 'GET_POSTS') {
		if(JSON.parse(localStorage.getItem('posts'))) {
			action.posts = JSON.parse(localStorage.getItem('posts'))
		}
    }
    
	localStorage.setItem('posts', JSON.stringify(action.posts));

	next(action)
}

export default localStorageMiddleware