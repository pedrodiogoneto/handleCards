const reduxMiddlewarePostsDataHelpper = {
	getSelectedPost: (posts, id) => posts.find(post => post.id === id),
	deleteSelectedPost: (posts, id) => posts.filter(post => post.id !== id),
	editSelectedPost: (posts, id, data) => {
		return posts.map(post => {
			if(post.id === id) {
				post.title = data.title
				post.description = data.description
				post.image = data.image ? data.image : post.image
			}
			return post
		})
	},
	addNewPost: data => Object.assign({ id: + new Date()}, data)
}

export default reduxMiddlewarePostsDataHelpper 