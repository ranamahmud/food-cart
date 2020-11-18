import { ADD_FOOD, REMOVE_FOOD } from "./actionTypes";


export const addFood = content => ({
    type: ADD_FOOD,
    payload: {
        content
    }
});


export const removeFood = content => ({
    type: REMOVE_FOOD,
    payload: {
        content
    }
});


// export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
