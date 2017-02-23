import {
  LOAD_FAVORITE,
  ADD_TO_FAVORITE,
  REMOVE_FROM_FAVORITE,
} from '../constants/ActionTypes'

const initialState = {
  addedIds: [],
  checkedById: {}
}

const addedIds = (state = initialState.addedIds, action) => {
  const { productId } = action
  switch (action.type) {
    case ADD_TO_FAVORITE:
      if (state.indexOf(productId) !== -1) {
        return state
      }
      return [...state, productId]
    case REMOVE_FROM_FAVORITE:
      return state.filter((id) => {
        return id !== productId
      })
    default:
      return state
  }
}

export const getAddedIds = state => state.addedIds

const checkedById = (state = initialState.checkedById, action) => {
  const { productId } = action
  switch (action.type) {
    case ADD_TO_FAVORITE:
      return {...state,
        [productId]: true
      }
    case REMOVE_FROM_FAVORITE:
      return {...state,
        [productId]: false
      }
    default:
      return state
  }
}

export const getChecked = (state, productId) =>
  state.checkedById[productId] || 0


const favorite = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_FAVORITE:
      return initialState
    default:
      return {
        addedIds: addedIds(state.addedIds, action),
        checkedById: checkedById(state.checkedById, action)
      }
  }
}

export default favorite