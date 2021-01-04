//userItems reducer
//fetch
// import { fetch } from './csrf'
//actions
const PREVIOUS_PURCHASES = 'setUsersPreviouslyBoughtItems/USERITEMS'
const PREVIOUS_REVIEWS = "setUsersPreviouslyReviewedItems/USERITEMS";
const REMOVE = "removeUsersPurchaseHistory/USERITEMS"
//actions creator
export const userItems = (items) => {
    return {
        type: PREVIOUS_PURCHASES,
        items
    }
}

export const userReviews = (reviews) => {
    return {
        type: PREVIOUS_REVIEWS,
        reviews
    }
}

export const remove = () => {
    return {
        type: REMOVE,
    }
}
//thunks
// export const getUserItems = () => async dispatch => {
//     const response = await fetch('/api/users/purchases')
// }
export const setUserItems = () => async dispatch => {
    const response = await fetch('/api/users/purchases')
    const data = await response.json(); 

    if(response.ok) {
        dispatch(userItems(data.Items))
        dispatch(userReviews(data.Reviews));
    }
}
//reducer
const initialState = {}

const userPurchases = (state = initialState, action) => {
    let newState;
    switch(action.type) {
        case PREVIOUS_PURCHASES:
            newState = {...state}
            newState.items = [...action.items]
            return newState;
        case PREVIOUS_REVIEWS:
            newState = {...state};
            newState.reviews = [...action.reviews]
            return newState;
        case REMOVE:
            newState = {}
            return newState;
        default:
            return state
    }
}

export default userPurchases;