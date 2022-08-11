export const initialState = {
    basket: [],
}

export const getTotalBasket = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0)


const reducer = (state, action) => {
    console.log("This is an action", action)
    switch (action.type) {
        case "ADD_TO_BASKET":

            return {
                ...state,
                basket: [...state.basket, action.item]
            }

        case "REMOVE_FROM_BASKET":

            const index = state.basket.findIndex((item) => item.id === action.id)
            console.log("index is", index)
            let newBasket = [...state.basket]

            if (index >= 0) {
                newBasket.splice(index, 1)
            } else {
                console.log("nothing to remove")
            }

            return {
                ...state,
                basket: newBasket
            }


        default:
            return state;

    }

}
export default reducer