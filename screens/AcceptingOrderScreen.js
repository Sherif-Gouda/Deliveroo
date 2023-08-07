import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable'
import * as Progress from 'react-native-progress'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native'

const AcceptingOrderScreen = () => {
  const {params} = useRoute()
  const navigation = useNavigation()
  useEffect(()=>{
    setTimeout(()=>{
        navigation.navigate('Delivery', {name: params.name})
    }, 2000)
  }, [])
  return (
    <SafeAreaView className='flex justify-center h-full items-center bg-[#00CCBB]'>
      <Animatable.Image
       source={{uri: 'https://cdn.dribbble.com/users/118459/screenshots/7025288/deliveroodribbbble.gif'}}
       className='w-80 h-80'
       iterationCount={1}
       />
       <Animatable.Text animation={'slideInUp'} className='text-md text-white font-bold'>Waiting for {params.name} to accept your order!</Animatable.Text>
       <Progress.Circle size={60} indeterminate color='white' className='my-8'/>
    </SafeAreaView>
  )
}

export default AcceptingOrderScreen