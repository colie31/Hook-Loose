//userItems reducer
//fetch
// import { fetch } from './csrf'
//actions
const PREVIOUS_PURCHASES = 'setUsersPreviouslyBoughtItems/USERITEMS'
//actions creator
export const setUserItems = (items) => {
    return {
        type: PREVIOUS_PURCHASES,
        items
    }
}
//thunks
// export const getUserItems = () => async dispatch => {
//     const response = await fetch('/api/users/purchases')
// }
//reducer
const initialState = []

const userPurchases = (state = initialState, action) => {
    let newState;
    switch(action.type) {
        case PREVIOUS_PURCHASES:
            newState = [...state, ...action.items]
            return newState;
        default:
            return state
    }
}

export default userPurchases;