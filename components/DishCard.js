import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { urlFor } from '../sanity'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../features/CartSlice'

const DishCard = ({id, name, imgUrl, short_description, price}) => {
  const dispatch = useDispatch()
  const quantity = useSelector(state=>state.cart.items[id])
  const [pressed, setPressed] = useState(false)
  return (
    <>
        <TouchableOpacity className={`pb-3 ${pressed ? 'border-t' : 'border'} border-gray-200`} onPress={()=>setPressed(!pressed)}>
            <View className='flex-row items-center p-2'>
                <View className='w-56 mr-4'>
                    <Text className='text-xl font-light'>{name}</Text>
                    <Text className='text-xs text-gray-500'>{short_description}</Text>
                </View>
                <Image source={{uri: urlFor(imgUrl).url()}} className='w-16 h-16'/>
            </View>
            <Text className='text-xs text-gray-500 px-2'>${price}</Text>
        </TouchableOpacity>

        {
        pressed &&
        <View className='flex-row space-x-1 p-2 items-center'>
            <TouchableOpacity onPress={()=>dispatch(decrement({id, price}))}><MinusCircleIcon size={30} opacity={0.5} color='green' /></TouchableOpacity>
            <Text>{quantity ? quantity['amount'] : 0}</Text>
            <TouchableOpacity onPress={()=>dispatch(increment({id, name, price, image:imgUrl}))}><PlusCircleIcon size={30} opacity={0.5} color='green' /></TouchableOpacity>
        </View>
        
        }
    </>
  )
}

export default DishCard