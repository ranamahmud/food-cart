import { ADD_FOOD, REMOVE_FOOD } from "../actionTypes";

const initialState = {
    foodCart: [],
    totalPrice: {}
};

const foods = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FOOD: {
            let food = action.payload;
            food.count = food.count + 1;
            let totalPrice = state.foodCart.reduce((sum, food) => sum + food.count * food.price, 0);
            return {
                ...state,
                foodCart: [...state.foodCart, food],
                totalPrice: {
                    totalPrice
                }
            };
        }
        case REMOVE_FOOD: {
            let food = action.payload;
            food.count = food.count - 1;
            let totalPrice = state.foodCart.reduce((sum, food) => sum + food.count * food.price, 0);
            return {
                ...state,
                foodCart: [...state.foodCart, food],
                totalPrice: {
                    totalPrice
                }
            };
        }
        default:
            return state;
    }
}
export default foods;