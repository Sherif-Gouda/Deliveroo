import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { XMarkIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import * as Progress from 'react-native-progress'
import MapView, {Marker} from 'react-native-maps'
import { useSelector } from 'react-redux'
import { getRestaurant } from '../features/RestaurantSlice'

const DeliveryScreen = ({route}) => {

  const restaurant = useSelector(getRestaurant)
  console.log("laaaat" + restaurant.lat)
  const navigation = useNavigation()
  return (
    <View className='bg-[#00CCBB] flex-1 z-50'>
        <SafeAreaView >
            <View className='flex-row justify-between p-5 items-center'>
                <TouchableOpacity onPress={()=>navigation.navigate('Home')}><XMarkIcon color={'white'} size={25} /></TouchableOpacity>
                <Text className='text-sm text-white'>Order Help</Text>
            </View>
                <View className='bg-white rounded-md p-4 mx-5 mt-2 shadow-xl z-50'>
                        <View className='flex-row justify-between items-center'>
                            <View>
                                <Text className='text-gray-500 text-sm'>Estimated Arrival</Text>
                                <Text className='text-black text-2xl font-bold'>45-55 Minutes</Text>
                            </View>
                            <Image source={{uri:'https://links.papareact.com/fls'}} className='w-20 h-20'/>
                        </View>
                        <Progress.Bar indeterminate  color='#00CCBB' className='w-32'/>
                        <Text className='text-gray-500 text-xs py-3'>Your order at {route.params.name} is being prepared</Text>
                </View>
                <MapView initialRegion={{
                    longitude: restaurant.long,
                    latitude: restaurant.lat,
                    longitudeDelta: 0.005,
                    latitudeDelta: 0.005
                }}
                className='w-full h-full z-0 -mt-10'
                mapType='mutedStandard'
                >
                    <Marker coordinate={{longitude: restaurant.long, latitude: restaurant.lat}}
                    description={restaurant.short_description}
                    pinColor='#00CCBB'
                    identifier='origin'
                    />
                </MapView>
         </SafeAreaView>
    </View>
  )
}

export default DeliveryScreen