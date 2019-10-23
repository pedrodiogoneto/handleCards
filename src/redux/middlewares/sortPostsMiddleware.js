const sortPostsMiddleware = (store) => (next) => (action) => {
	if(action.type !== 'SORT_POSTS') return next(action)
    
	const sortedList = store.getState().posts.sort((a, b) => {
		const sortCondition1 = action.payload.sortDirection === 'ascending' ? 1 : -1
		const sortCondition2 = action.payload.sortDirection === 'ascending' ? -1 : 1
		if(a.id > b.id) return sortCondition1
		else return sortCondition2
	})

	action.posts = sortedList
	next(action)
}

export default sortPostsMiddleware