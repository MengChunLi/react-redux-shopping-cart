import { SEE_DETAIL } from '../constants/ActionTypes'

const initState = {
	"id": 0,
	"title": "",
	"price": 0,
	"inventory": 0,
	"img": "",
	"content": ""
}

const detail = (state = initState, action) => {
	switch (action.type) {
		case SEE_DETAIL:
			return {
				...action.detail
			}
		default:
			return state
	}
}

export default detail