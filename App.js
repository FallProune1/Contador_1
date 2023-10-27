import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contenedor</Text>
      <View style={styles.subcontainer}>
        <TouchableOpacity style={styles.btn} onPress={decrement}>
          <Text style={styles.textBoton}>-</Text>
        </TouchableOpacity>
        <Text style={styles.count}>{counter}</Text>
        <TouchableOpacity style={styles.btn} onPress={increment}>
          <Text style={styles.textBoton}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titulo:{
    fontSize:20,
    color:'ffffff',
    alignItems:'center'
  },
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#2192FF',

  },
  subcontainer:{
    height: 50,
    weight: '100%',
    padding:10,
    flexDirection:'row'
  },
  btn:{
    height:100,
    weight:100,
    padding:30,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#38E54D',
  },
  textBoton:{
    fontSize:40,
    color:'ffffff',
    fontWeight:'bold'
  },
  count:{
    flex1:1,
    justifyContent:'center',
    alignItems:'center'

  }

});
