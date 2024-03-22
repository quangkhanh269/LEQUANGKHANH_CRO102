import { useState } from "react";
import { Button, View, Text } from "react-native";
import {styles} from './styles';


export default function CounterState(){
    const[counter, setCounter] = useState(0)

    const handleIncrease = () =>{
        setCounter(counter+1)
    }
    return(
        <View style ={styles.container}>
            <Text>{counter}</Text>
            <Button title="Tang" onPress={handleIncrease}></Button>
        </View>
    )
}
