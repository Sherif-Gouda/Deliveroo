import { View, Text, ScrollView,Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { urlFor } from '../sanity'
import { ArrowLeftIcon, MapPinIcon, StarIcon } from 'react-native-heroicons/solid'
import { Line } from 'react-native-svg'
import { ChevronRightIcon, QuestionMarkCircleIcon } from 'react-native-heroicons/outline'
import DishCard from '../components/DishCard'
import CartPopUp from '../components/CartPopUp'
import CartScreen from './CartScreen'
import { useDispatch } from 'react-redux'
import { setRestaurant } from '../features/RestaurantSlice'

const RestaurantScreen = ({route}) => {
  const {id, imgUrl, title, rating, category, address, short_description, dishes, long, lat} = route.params
  const navigation = useNavigation()
  const dispatch = useDispatch()
  useLayoutEffect(()=>{
    navigation.setOptions({
        headerShown: false
    })
  },[])
  useEffect(()=>{
    dispatch(setRestaurant(route.params))
  },[dispatch])
  console.log(route.params)
  return (
    <SafeAreaView className='bg-gray-300'>
       <CartPopUp name={title}/> 
      <ScrollView>
        <View className='bg-white'>
        <View className ='relative'>
            <Image source={{uri: urlFor(imgUrl).url()}} className='w-max h-48'/>
            <TouchableOpacity className='absolute left-3 top-3 p-2 bg-gray-100 rounded-full' onPress={()=>navigation.goBack()}>
                <ArrowLeftIcon size={20} color='#00ccbb' />
            </TouchableOpacity>
        </View>
        <Text className = 'text-xl font-bold p-2'>{title}</Text>
        <View className='flex-row space-x-1 items-center m-1'>
            <StarIcon color={'gray'} size={16}/>
            <Text className='text-xs text-gray-500'>{rating} . {category}</Text> 
            <MapPinIcon color={'gray'} size={16}/>
            <Text className='text-xs text-gray-500'>Nearby . {address}</Text> 
        </View>
        <Text className='text-xs text-gray-500 p-2'>{short_description}</Text>
        <View className='flex-row items-center p-2 border-y border-gray-300'>
            <TouchableOpacity className='flex-row flex-1 space-x-2 items-center'>
                <QuestionMarkCircleIcon size={20} color='gray' />
                <Text className='font-bold text-md '>Have a food allergy?</Text>
            </TouchableOpacity>
            <ChevronRightIcon size={18} color='#00ccbb' />
        </View>
        </View>
        {/* body */}
        <Text className='text-xl font-bold p-2'>Menu</Text>
        <View className='bg-white'>
            {dishes.map((dish)=>{
                return(
                <DishCard key={dish._id} id={dish._id} name={dish.name} short_description={dish.short_description} price={dish.price} imgUrl={dish.image}/>
                )
            })}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default RestaurantScreen