import React from 'react';
import {StyleSheet, View, Text, Button, TouchableOpacity} from 'react-native';
import {Checkbox} from 'react-native-paper';
import {connect} from 'react-redux';
import {deleteTodo, todoStatus} from '../redux/action';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TodoCard = ({
  navigation,
  id,
  todoText,
  status,
  deleteTodo,
  todoStatus,
}) => {
  const [checked, setChecked] = React.useState(status);
  const checkHandler = () => {
    setChecked(!checked);
    todoStatus({id: id, status: !checked});
  };

  return (
    <>
      <View id={id} style={styles.TodoCard_mainCont}>
        <View style={styles.TodoCard_todoCont}>
          <Checkbox
            style={styles.TodoCard_checkBok}
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => checkHandler()}
            color="#0bbc37"
          />
          <TouchableOpacity onPress={() => checkHandler()}>
            <Text
              style={{
                ...styles.TodoCard_text,
                textDecorationLine: checked ? 'line-through' : null,
                color: checked ? '#0bbc37' : '#0f0f0f',
              }}>
              {todoText}
            </Text>
          </TouchableOpacity>
        </View>
        <Ionicons
          name="ios-trash-outline"
          // onPress={() => addTodo({id: 5, task: 'redux', done: false})}
          onPress={() => deleteTodo(id)}
          color="#c61515"
          size={20}
          style={{marginHorizontal: 15}}
        />
      </View>
    </>
  );
};

// const mapStateToProps = (state) => ({
//   todoArr: state.todos,
// });
const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (data) => dispatch(deleteTodo(data)),
  todoStatus: (data) => dispatch(todoStatus(data)),
});
export default connect(null, mapDispatchToProps)(TodoCard);
// ----------------- Style below
const styles = StyleSheet.create({
  TodoCard_mainCont: {
    // backgroundColor: 'aqua',
    height: 50,
    alignItems: 'center',
    // justifyContent: 'center',
    paddingHorizontal: 10,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ededed',
    borderBottomRightRadius: 22,
    borderBottomLeftRadius: 22,
  },
  TodoCard_todoCont: {
    // justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  TodoCard_checkBok: {},
  TodoCard_text: {
    fontSize: 20,
    textTransform: 'capitalize',
  },
});
