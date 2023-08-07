import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { MapPinIcon, StarIcon } from 'react-native-heroicons/solid'
import { urlFor } from '../sanity'
import { useNavigation } from '@react-navigation/native'

const RestaurantCard = ({id, imgUrl, title, rating, category, address, short_description, dishes, long, lat}) => {
    const navigation = useNavigation()
  return (
   <TouchableOpacity className='p-2' onPress={()=>navigation.navigate('Restaurant', {
    id, imgUrl, title, rating, category, address, short_description, dishes, long, lat
   })}>
    <Image source={{uri: urlFor(imgUrl).url()}} className='w-48 h-24' />
    <View className='bg-white pb-5 px-3'>
    <Text className='text-lg font-bold pt-2'>{title}</Text>
        <View className='flex-row space-x-1  items-center'>
            <StarIcon size={22} color='green' opacity={0.5}/>
            <Text className='text-xs text-gray-500'>{rating} . </Text>
            <Text className='text-xs text-gray-500'>{category}</Text>
        </View>
        <View className = 'flex-row space-x-1 mt-2 items-center'>
            <MapPinIcon size={22} color='gray'/>
            <Text className='text-xs text-gray-500'>{`Nearby . ${address}`}</Text>
        </View>
    </View>
   </TouchableOpacity>
  )
}

export default RestaurantCard