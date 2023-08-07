import { View, Text, Image, Modal } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { urlFor } from '../sanity'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem'
import { TouchableOpacity } from 'react-native'
import { ShoppingCartIcon } from 'react-native-heroicons/outline'

const CartScreen = ({route}) => {
    const restaurant = useSelector(state=>state.restaurant)
    console.log(restaurant)
  const navigation = useNavigation()
  const cart = useSelector(state=>state.cart)
  const {name} = route.params
  return cart.length > 0 ? (
    <SafeAreaView className='bg-gray-100 flex justify-between h-full'>
      <View>
        <View className='flex justify-center items-center bg-white py-3 rounded'>
            <Text className='text-xl font-bold'>Cart</Text>
            <Text className='text-xs text-gray-500'>{name}</Text>
        </View>
        <View className='flex-row justify-between items-center bg-white my-3 p-2 border-y border-gray-200'>
            <View className='flex-row space-x-1 items-center'>
                <Image source={{uri: 'https://links.papareact.com/wru'}} className='w-7 h-7 rounded-full'/>
                <Text className='text-xs'>Deliver in 50-75 min</Text>
            </View>
            <Text className='text-xs text-[#00CCBB]'>Change</Text>
        </View>
        {
            Object.keys(cart.items).map(id=>{
                return(
                    <CartItem key={id} id={id} />
                )
            })
        }
      </View>
    <View className='shadow-lg'>
      <View className='flex-row justify-between p-2 bg-white'>
            <View className='space-y-2'>
                <Text className='text-xs text-gray-400'>Subtotal</Text>
                <Text className='text-xs text-gray-400'>Delivery fee</Text>
                <Text className='text-xs font-bold'>Order Total</Text>
            </View>
            <View className='space-y-2'>
                <Text className='text-xs text-gray-400'>${cart.total}</Text>
                <Text className='text-xs text-gray-400'>$5.99</Text>
                <Text className='text-xs font-bold'>${+(cart.total + 5.99).toFixed(2)}</Text>
            </View>
        </View>

        <View className='bg-white content-center'>
        <TouchableOpacity className='bg-[#00CCBB] justify-center items-center rounded w-5/6 py-3 my-3 ml-7'
            onPress={()=>navigation.navigate('AcceptingOrder', {name})}
        >
            <Text className='text-l font-bold text-white'>Place Order</Text>
        </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  ) : <SafeAreaView className='items-center content-center m-auto'>
      <ShoppingCartIcon color={'#00CCBB'} size={200}/>
      <Text className='text-2xl font-Bold'>Your cart is empty!</Text>
  </SafeAreaView>
}

export default CartScreen