import  { useEffect, useState} from 'react'
import axios from "axios"

const MiniLab = () => {
    const [Objects, setObjects]= useState ([])

    useEffect(()=>{
axios("https://dummyjson.com/products").then((response)=>{
    console.log (response)
    let array = response.data.products;
    setObjects(array)
})


    }, [])
  return (
    <div> 
        {Objects.map((object)=>{
            return <div key ={object.price}>
                Name: {object.title}  Price: ${object.price}</div>
        })}


    </div>
  )
}

export default MiniLab