
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// const button_variations = StyleSheet.create({
//   l23943: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   text: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   rectangle: {
//     width: 200,
//     height: 100,
//     backgroundColor: 'blue',
//   },
// });

const title_variations = StyleSheet.create({
  l23943: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  rectangle: {
    width: 200,
    height: 100,
    backgroundColor: 'blue',
  },
});

const subtitle_variations = StyleSheet.create({
  l23943: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  rectangle: {
    width: 200,
    height: 100,
    backgroundColor: 'blue',
  },
});

const $grid_variations = StyleSheet.create({
  l23943: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  rectangle: {
    width: 200,
    height: 100,
    backgroundColor: 'blue',
  },
});



export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

export function Title(a: number, b: number): Promise<number> {
  return (
    <View>
    <Text>hellooo</Text>
    </View>
  )
}
