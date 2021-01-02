//action
const ADD_FOUND_ITEMS = 'addItemsFromSearch/SEARCH'
//action creator
export const searchItems = (arrayOfFoundItems) => {
    return {
        type: ADD_FOUND_ITEMS,
        arrayOfFoundItems
    }
}
//reducer
let initialState = [];

const searchReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case ADD_FOUND_ITEMS:
            newState = [...action.arrayOfFoundItems]
            return newState;
        default:
            return state
    }
}

export default searchReducer;