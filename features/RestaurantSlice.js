import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    current: {}
}

export const RestaurantSlice = createSlice({

    name: 'restaurant',
    initialState,
    reducers:{
        setRestaurant: (state, action)=>{
            state.current = action.payload
        }
    }

})
export const { setRestaurant} = RestaurantSlice.actions

export const getRestaurant = (state)=>state.restaurant.current 

export default RestaurantSlice.reducer