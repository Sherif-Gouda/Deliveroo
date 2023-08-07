import { View, Text, ScrollView } from 'react-native'
import React, {useState, useEffect} from 'react'
import CategoryCard from './CategoryCard'
import sanityClient from '../sanity'

const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(()=>{
    sanityClient.fetch(`
        *[_type=="category"]{
          ...
        }
    `).then(data=>setCategories(data))
  },[])
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {categories.map(cat=>{
        return(
          <CategoryCard key={cat._id} imgUrl={cat.image} title={cat.name}/>
        )
      })}
    </ScrollView>
  )
}

export default Categories