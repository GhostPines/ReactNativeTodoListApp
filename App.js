import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View, TouchableOpacity, SafeAreaView, TextInput, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  //Category State 생성 
  const [todos, setTodos] = React.useState([]);
  const [category, setCategory] = React.useState('JavaScript'); // JavaScript, React, Coding Test
  const [text, setText] = React.useState('');
  //Data Structure
  const newTodo = {
    id: Date.now,
    text,
    completed: false,
    editMode: false,
    category,
  }

  // addTodo가 State 변경시키게 생성 
  const addTodo = () => {
    setTodos(prev => [...prev, ...newTodo]);
    setText('');
  }



  // setDone이 State 변경시키게 생성
  const setDone = (id) => {
    // 1. id를 매개변수로 받는다. 
    // 2. todos를 복사한다.
    // 3. id와 일치하는 todo의 completed를 변경한다.
    // 4. setTodos를 호출한다.
    const newTodos = [...todos];
    const idx = newTodos.findIndex((todo) => todo.id === id);
    newTodos[idx].completed = !newTodos[idx].completed;
    setTodos(newTodos);
  };




  return (
    // 버튼 세개 생성
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => setCategory("JavaScript")} style={{
          ...styles.tab,
          backgroundColor: category === "JavaScript" ? "#0FBCF9" : "grey",
        }}><Text>JavaScript</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => setCategory("React")} style={{
          ...styles.tab,
          backgroundColor: category === "React" ? "#0FBCF9" : "grey",
        }}><Text>React</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => setCategory("CodingTest")} style={{
          ...styles.tab,
          backgroundColor: category === "CodingTest" ? "#0FBCF9" : "grey",
        }}><Text>Coding Test</Text></TouchableOpacity>
      </View>

      <View style={styles.lineDivider}></View>
      <TextInput onSubmitEditing={addTodo} style={styles.todoTextInput} placeholder="할 일을 입력하세요"></TextInput>
      <View style={styles.lineDivider}></View>

      <ScrollView style={styles.listContainer}>


        {/* map 생성 후 addTodo 해야함 */}

        {todos.map(todo => {
          if (category === todo.category) {
            return (
              <View style={styles.eachTodoCard} key={todo.id}>
                <View style={styles.todoCard}><Text style={styles.todoText}>{todo.text}</Text></View>
                <View style={styles.fuctionBox}>
                  <TouchableOpacity onPress={() => setDone(todo.id)}>
                    <AntDesign name="checkcircleo" size={30} color="black" />
                  </TouchableOpacity>
                  <Feather name="edit" size={30} color="black" />
                  <AntDesign name="delete" size={30} color="black" />
                </View>
              </View>
            );
          }
        })}




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
    </SafeAreaView >


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


