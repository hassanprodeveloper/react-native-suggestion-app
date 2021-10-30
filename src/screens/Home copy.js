import React, {useState} from 'react';
import {StyleSheet, View, FlatList, TextInput} from 'react-native';
import {connect} from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';
import {storeObj, getObj} from '../config/AsyncConfig';
import {todoData, deleteTodo} from '../redux/action';
// importing components
import Header from '../components/Header';
import TodoCard from '../components/TodoCard';

const Welcome = ({navigation, todoArr, addTodo, deleteTodo}) => {
  const [InputData, setInputData] = useState('');

  storeObj(todoArr, 'todosArr');

  const addTodoHandler = () => {
    let totalTodo = todoArr.length;
    if (InputData !== '') {
      const obj = {id: totalTodo, task: InputData, done: false};
      addTodo(obj);
      setInputData('');
    } else {
      alert('Please Enter Some Data');
    }
  };
  return (
    <>
      <View style={styles.appCont}>
        <Header
          title="Todo List"
          iconType="ios-menu-sharp"
          onPress={() => navigation.openDrawer()}
        />
        {/* Input Container */}
        <View style={styles.todoCont}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.TodoTextInput}
              onChangeText={(e) => setInputData(e)}
              value={InputData}
              placeholder="Enter Task"
            />
            {InputData === '' ? null : (
              <Entypo
                name="circle-with-cross"
                onPress={() => setInputData('')}
                color="#0f0f0f"
                size={22}
              />
            )}
          </View>
          <Entypo
            name="add-to-list"
            onPress={() => addTodoHandler()}
            color="#0f0f0f"
            size={26}
            style={{marginHorizontal: 10}}
          />
        </View>
        {/* List View */}
        <FlatList
          showsVerticalScrollIndicator={false}
          style={styles.FlatList}
          data={todoArr}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <TodoCard id={item.id} status={item.done} todoText={item.task} />
          )}
        />
      </View>
    </>
  );
};
const mapStateToProps = (state) => ({
  todoArr: state.todos,
});
const mapDispatchToProps = (dispatch) => ({
  addTodo: (data) => dispatch(todoData(data)),
  deleteTodo: (data) => dispatch(deleteTodo(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
// STYLE_SHEET
const styles = StyleSheet.create({
  appCont: {
    flex: 2,
    backgroundColor: '#fff',
  },
  todoCont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    paddingHorizontal: 15,
    alignSelf: 'center',
    marginVertical: 10,
    width: '80%',
    height: 40,
    borderRadius: 100 / 2,
    backgroundColor: '#ededed',
    flexDirection: 'row',
    alignItems: 'center',
  },
  TodoTextInput: {
    flex: 1,
  },
  FlatList: {
    marginTop: 10,
  },
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    margin: 10,
  },
});
