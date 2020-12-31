//cart reducer

//possibly a thunk action to fetch users items bought prior
//this can be used to check if user had previously bought an item
//and if they can leave a comment or not

//action
const ADD_ITEM = 'addAnItem/CART';
const REMOVE_ITEM = 'removeAnItem/CART';
const DELETE_AN_ITEM = 'deleteAnItem/CART';
const EMPTY = 'emptyCart/CART';
//action creator
export const addItem = (item) => {
    return {
        type: ADD_ITEM,
        item
    };
};

export const removeItem = (item) => {
    return {
        type: REMOVE_ITEM,
        item
    }
}

export const deleteItem = (item) => {
    return {
        type: DELETE_AN_ITEM,
        item
    }
}

export const empty = () => {
    return {
        type: EMPTY,
    }
}

//thunks
//add items to userItems

//reducer
const initialState = {}

const CartReducer = (state = initialState, action) => {
    let newState;
    let theItem;
    switch(action.type) {
        case ADD_ITEM:
            newState = Object.assign({}, state)
            theItem = newState[action.item.id]
            if(!theItem) {
                newState[action.item.id] = {
                  item: action.item,
                  count: 1,
                };
            } else {
                theItem.count ++;
            }
            return newState;
        case REMOVE_ITEM:
            newState = Object.assign({}, state);
            theItem = newState[action.item.id]
            if (theItem) {
              theItem.count--;
              if (theItem.count === 0) {
                delete newState[action.item.id];
              }
            }
            return newState;
        case DELETE_AN_ITEM:
            newState = Object.assign({}, state);
            delete newState[action.item.id];
            return newState;
        case EMPTY:
            return {};
        default:
            return state;
    }
}

export default CartReducer;