import React, { useState,useEffect } from 'react'
import { View ,Text, Button} from 'react-native'

const HooksLearn = () => {
    const [count, setcount] = useState(0)
    const [data, setData] = useState(10)

    const Increment=()=>{
        setcount(count+1);
    }
    const Decrement=()=>{
        setcount(count-1)
    }

    const DataIncrement=()=>{
        setData(data+1)
    }


    // ComponentDidMount are exceute for the initial time page are render 

    // useEffect(() => {
    //   console.log("Hello World")
    // },[])



// ComponentDidUpdate are always execute for when any change in Dom and i pass the empty array show the particular state is update
    useEffect(() => {
      console.log("Hello World")
    },[count,data])
    
  return (
    <View>
        <Text>UseEffect Learning</Text>
        <Text>My count is {count}</Text>
        <Button title='Increment' onPress={Increment}/>
        <Button disabled={count===0} title='Decrement' onPress={Decrement}/>
        <Button  title='Data Increment' onPress={DataIncrement}/>
    </View>
  )
}

export default HooksLearn
