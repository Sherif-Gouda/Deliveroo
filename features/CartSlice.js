import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: {},
    total: 0,
    length: 0
}

export const cartSlice = createSlice({

    name: 'cart',
    initialState,
    reducers:{
        increment: (state, action) => {
            state.length+=1
            state.total += action.payload.price
            if(!(`${action.payload.id}` in state.items)){
                state.items = {...state.items, [action.payload.id]: {name: action.payload.name, image: action.payload.image, price: action.payload.price, amount: 1}}
            }
            else{
                state.items[action.payload.id]['amount'] += 1
            }
            
        },
        
        decrement: (state, action) => {
            if(`${action.payload.id}` in state.items){
                state.length -= 1
                state.total -= action.payload.price
                if(state.items[action.payload.id]['amount'] === 1){
                    delete state.items[action.payload.id]
                }
                else{
                    state.items[action.payload.id]['amount'] -= 1
                }
          }
        
        },

        removeItem: (state, action)=>{
            state.total -= action.payload.price
            state.length -= action.payload.amount
            delete state.items[action.payload.id]
        }
    }

})
export const { increment, decrement, removeItem } = cartSlice.actions

export const getCartItemById = (state, id)=>state.items[id]

export default cartSlice.reducer