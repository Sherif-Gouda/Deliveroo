import { View, Text, Image, TextInput, ScrollView} from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AdjustmentsVerticalIcon, ChevronDownIcon, MagnifyingGlassIcon, SparklesIcon, UserIcon } from "react-native-heroicons/outline"
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'
import sanityClient from '../sanity'

const HomeScreen = () => {
  const [featuredCategories, setFeaturedCategories] = useState([])
  const navigation = useNavigation()
  useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: false
    })
  }, [])

useEffect(()=>{
  sanityClient.fetch(`
      *[_type=="featured"]{
        ...,
        restaurants[]->{
          ...,
          dishes[]->{
            ...
          },
          type->{
            name
          }
        }
      }
  `).then(data=>setFeaturedCategories(data))
},[])

  return (
  <SafeAreaView className='pt-5 bg-white'>
    <View className = 'flex-row items-center mx-4 space-x-2' >
        <Image className = 'rounded-full h-5 w-5 bg-gray-300 p-4' source={{uri: 'https://links.papareact.com/wru'}}/>
        <View className='flex-1'>
            <Text className='font-bold text-xs text-gray-400'>Deliver now!</Text>
            <View className='flex-row items-center'>
                <Text className = 'font-bold text-xl'>Current Location</Text>
                <ChevronDownIcon color='#00ccbb' size={15} />
            </View>

        </View>
        <UserIcon color='#00ccbb' size={30} className='ml-2'/>
    </View>

    {/* Search */}

    <View className='px-4 flex-row space-x-2 py-2 items-center'>
        <View className='flex-row bg-gray-200 items-center space-x-2 p-1 flex-1'>
            <MagnifyingGlassIcon color='gray' size={20}/>
            <TextInput placeholder='Restaurants and cuisines' keyboardType='default'/>
        </View>
        <AdjustmentsVerticalIcon color={'#00ccbb'} />
    </View>

  {/*Body*/}
  
  {/*Categories*/}
  <ScrollView className='bg-gray-100' contentContainerStyle={{paddingBottom: 100}}>
    <Categories/>
    {/*Featured Categories*/}
  {featuredCategories.map(fc => {
    return(
      <FeaturedRow key = {fc._id} title={fc.name} description = {fc.short_description} restaurants={fc.restaurants}/>
    )
  })}
  </ScrollView>
  
  </SafeAreaView>
  )
}

export default HomeScreen