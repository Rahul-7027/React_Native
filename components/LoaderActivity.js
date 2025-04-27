import React, { useState } from 'react'
import { ActivityIndicator, Button, View } from 'react-native'

const LoaderActivity = () => {
    const[loader,setLoader]=useState(false);

    // const handleLoaderShow=()=>{
    //     setLoader(!loader)
    //     setTimeout(() => {
            
    //     }, timeout);
    // }


    const handleLoaderShow=()=>{
        setLoader(true)
        setTimeout(() => {
            setLoader(false)
        }, 2000);
    }
  return (
    <View>
        <ActivityIndicator size={100} color={"red"} animating={loader}/>
        <Button title='Show Loader' onPress={handleLoaderShow}/>
    </View>
  )
}

export default LoaderActivity
