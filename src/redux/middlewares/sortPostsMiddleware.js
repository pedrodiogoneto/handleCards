const sortPostsMiddleware = (store) => (next) => (action) => {
	if(action.type !== 'SORT_POSTS') return next(action)
    
    console.log('action on sort middleware', action)

	next(action)
}

export default sortPostsMiddleware