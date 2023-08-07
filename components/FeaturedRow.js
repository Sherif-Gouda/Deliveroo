import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'
import { urlFor } from '../sanity'

const FeaturedRow = ({id, title, description, restaurants}) => {
  return (
    <View>
        <View className='flex-row items-center space-x-2 bg-gray-100 px-2 mt-4' >
      <View className='flex-1'>
        <Text className='text-lg font-bold'>{title}</Text>
        <Text className='text-xs text-gray-500'>{description}</Text>
      </View>
      <ArrowRightIcon color={'#00ccbb'} />
    </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {restaurants.map(r=>{
          return(
            <RestaurantCard key = {r._id} imgUrl={urlFor(r.image).url()} title={r.name} category={r.type.name} rating={r.rating} address={r.address}
              lat={r.lat} long={r.long} short_description={r.short_description} dishes={r.dishes}
            />
          )
        })}
      </ScrollView>
    </View>
  )
}

export default FeaturedRow