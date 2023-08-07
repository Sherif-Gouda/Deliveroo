import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartItemById, removeItem } from '../features/CartSlice'
import { urlFor } from '../sanity'

const CartItem = ({id}) => {
  const dispatch = useDispatch()
  const item = useSelector((state) => getCartItemById(state.cart, id))
  return (
        <View className='flex-row items-center justify-between p-2 bg-white border-y border-gray-200'>
            <View className='flex-row items-center space-x-1'>
                <Text className='text-xs text-[#00CCBB]'>{item.amount}x</Text>
                <Image className='w-7 h-7 rounded-full' source={{uri: urlFor(item.image).url()}} />
                <Text className='text-xs'>{item.name}</Text>
            </View>
            <View className='flex-row items-center space-x-1'>
            <Text className='text-xs'>${item.price * item.amount}</Text>
            <Text className='text-xs text-[#00CCBB]' onPress={()=>dispatch(removeItem({id, price: (item.price * item.amount),
            amount: item.amount
            }))}>Remove</Text>
            </View>
       
    </View>
  )
}

export default CartItem