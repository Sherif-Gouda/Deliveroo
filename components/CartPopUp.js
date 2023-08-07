import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

const CartPopUp = ({name}) => {
  const navigation = useNavigation()
  const cart = useSelector(state=>state.cart)
  return cart.length > 0 ? <TouchableOpacity
   className='bg-[#00CCBB] rounded-lg flex-row items-center justify-between absolute w-full p-2 bottom-8 z-50'
   onPress={()=>navigation.navigate('Cart', {name})}
   >
          <Text className=' text-lg text-white font-extrabold px-2 bg-[#01A296] py-1 ml-1'>{cart.length}</Text>
          <Text className=' text-lg text-white font-extrabold'>View Cart</Text>
          <Text className=' text-lg text-white font-extrabold p-2'>${cart.total}</Text>
</TouchableOpacity> : <></>
}

export default CartPopUp