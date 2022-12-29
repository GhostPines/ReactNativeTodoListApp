import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View, TouchableOpacity, SafeAreaView, TextInput, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  const onPress = () => {
    console.log('button pressed');
  };


  const [text, onChangeText] = React.useState("Useless Text");

  return (
    // 버튼 세개 생성
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={onPress}><Text>JavaScript</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onPress}><Text>React</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onPress}><Text>Coding Test</Text></TouchableOpacity>
      </View>

      <View style={styles.lineDivider}></View>

      <TextInput
        style={styles.todoTextInput}
        onChangeText={onChangeText}
        value={text}
      />
      <View style={styles.lineDivider}></View>

      <ScrollView style={styles.listContainer}>

        <View style={styles.eachTodoCard}>
          <View style={styles.todoCard}><Text style={styles.todoText}>Todo List</Text></View>
          <View style={styles.fuctionBox}>
            <AntDesign name="checkcircleo" size={30} color="black" />
            <Feather name="edit" size={30} color="black" />
            <AntDesign name="delete" size={30} color="black" />
          </View>
        </View>
        <View style={styles.eachTodoCard}>
          <View style={styles.todoCard}><Text style={styles.todoText}>Todo List</Text></View>
          <View style={styles.fuctionBox}>
            <AntDesign name="checkcircleo" size={30} color="black" />
            <Feather name="edit" size={30} color="black" />
            <AntDesign name="delete" size={30} color="black" />
          </View>
        </View>
        <View style={styles.eachTodoCard}>
          <View style={styles.todoCard}><Text style={styles.todoText}>Todo List</Text></View>
          <View style={styles.fuctionBox}>
            <AntDesign name="checkcircleo" size={30} color="black" />
            <Feather name="edit" size={30} color="black" />
            <AntDesign name="delete" size={30} color="black" />
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: 'white',

  },
  listContainer: {
    flex: 1,
    width: '90%',
  },
  button: {
    backgroundColor: '#80ccff',
    width: 100,
    height: 40,

    alignItems: 'center',
    justifyContent: 'center',

    fontWeight: 'bold',
    fontSize: 30,

  },
  lineDivider: {
    width: '90%',
    height: 2,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    marginTop: 10,
    marginBottom: 10,
  },
  todoTextInput: {
    height: 40,
    width: '90%',
    paddingLeft: 5,
    borderColor: 'gray',
    borderWidth: 1,
  },
  todoCard: {
    marginTop: 5,
    paddingLeft: 5,
    height: 40,
    width: '65%',
    borderWidth: 1,
    borderColor: 'gray',
    justifyContent: 'center',

  },
  todoText: {
    fontSize: 16,
  },
  fuctionBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'center',
    marginTop: 5,
    paddingTop: 2,
    width: '35%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',

  },
  eachTodoCard: {
    flexDirection: 'row',
  }



});


