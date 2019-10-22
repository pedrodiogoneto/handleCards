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

export const UPDATE_USER_ACTION_POST = (userAction, id) => {
	return {
		type: 'UPDATE_USER_ACTION_POST',
		payload: {
			userAction,
			id
		}
	}
}

export const DELETE_POST = (id) => {
	return {
		type: 'DELETE_POST',
		payload: {
			id
		}
	}
}

export const EDIT_POST = (data, id) => {
	return {
		type: 'EDIT_POST',
		payload: {
			id,
			data
		}
	}
}