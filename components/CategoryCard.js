import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { urlFor } from '../sanity'


const CategoryCard = ({imgUrl, title}) => {
  return (
    <TouchableOpacity className='relative mx-2 pt-2'>
        <Image source={{uri: urlFor(imgUrl).url()}} className='w-24 h-24 rounded'/>
        <Text className='absolute left-2 bottom-2 text-white'>{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard