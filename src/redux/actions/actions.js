export const GET_POSTS = () => {
	return {
		type: 'GET_POSTS',
	}
}

export const ADD_POST = (data) => {
	return {
		type: 'ADD_POST',
		payload: {
			data
		}
	}
}

export const UPDATE_USER_ACTION_POST = (data) => {
	return {
		type: 'UPDATE_USER_ACTION_POST',
		payload: {
			userAction: data
		}
	}
}