import { fetch } from './csrf.js'

//action
const REMOVE_FROM_INVENTORY = "removeAmount/inventory"
const SET_INVENTORY = "populate/inventory"

//action creator that produces object
const removeInventory = () => ({
    type: REMOVE_FROM_INVENTORY,
    //payload?
});

const setInventory = (inventory) => {
    return { 
        type: SET_INVENTORY,
        inventory,
    }
}

//thunks
// get all of inventory
export const fetchInventory = () => async(dispatch) => {
    const response = await fetch('/api/items');
    dispatch(
        setInventory(response.data)
    )
}

//inventory reducer
const initialState = []

const inventoryReducer = (state = initialState, action) => {
    let newState;
    switch(action.type) {
        case SET_INVENTORY:
            newState = action.inventory;
            return newState;
        default:
            return state
    }
}

export default inventoryReducer;

