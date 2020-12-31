//cart reducer

//possibly a thunk action to fetch users items bought prior
//this can be used to check if user had previously bought an item
//and if they can leave a comment or not

//action
const ADD_ITEM = 'addAnItem/CART';
const REMOVE_ITEM = 'removeAnItem/CART';
const UPDATE_COUNT = 'updateQuantityInCart/CART';
const EMPTY = 'emptyCart/CART';
//action creator
export const addItem = (itemId) => {
    return {
        type: ADD_ITEM,
        itemId
    };
};

//thunks

//reducer
const initialState = {}

const CartReducer = (state = initialState, action) => {
    let newState;
    switch(action.type) {
        case ADD_ITEM:
            newState = Object.assign({}, state)
            newState[action.itemId] = {
                id: action.itemId,
                count: 1,
            }
            return newState;
        default:
            return state;
    }
}

export default CartReducer;