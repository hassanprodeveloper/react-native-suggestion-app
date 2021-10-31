import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
  TouchableHighlight,
  Pressable,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {storeObj, getObj} from '../config/AsyncConfig';
import {todoData, deleteTodo} from '../redux/action';
// importing components
import Header from '../components/Header';
import TodoCard from '../components/TodoCard';
import Modal from '../components/Modal';
import AddSuggestion from './AddSuggestion';

/*
colors
#2A3D8E
#272660
  #29A9E0
  #1F76BA
*/

const Home = (props) => {
  const {navigation, todoArr, addTodo, deleteTodo} = props;
  const [sugestedIndex, setSugestedIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const arrDataList = ['alu', 'gobbi', 'matter', 'gagher', 'chawal'];
  const rendomNumber = () => {
    let rendom_number = Math.floor(Math.random() * todoArr.length);
    setSugestedIndex(rendom_number);
    return;
  };
  useEffect(() => {
    rendomNumber();
  }, []);
  console.log('todoArr', todoArr);
  const [InputData, setInputData] = useState('');

  storeObj(todoArr, 'todosArr');

  const addTodoHandler = () => {
    let totalTodo = todoArr.length;
    // console.log('input data', InputData);
    if (InputData !== '') {
      const obj = {id: totalTodo, task: InputData, done: false};
      addTodo(obj);
      setInputData('');
    } else {
      alert('Please Enter Some Data');
    }
  };
  return (
    <View style={styles.homeContainer}>
      {/* suggestion display card */}
      {todoArr.length > 0 ? (
        <View style={styles.suggestion_display_card_container}>
          {/* card header */}
          <View style={styles.suggestion_display_card_header}>
            <Ionicons
              style={styles.drawericon}
              name="ios-menu-sharp"
              onPress={() => navigation.openDrawer()}
              color="#fff"
              size={26}
            />
            <Text style={styles.headerDateText}>
              {new Date().toDateString()}
            </Text>
          </View>
          {/* card body */}
          <View style={styles.suggestion_display_card_body}>
            <Text
              numberOfLines={1}
              style={styles.suggestion_display_card_body_Text}>
              {todoArr[sugestedIndex].task}
            </Text>
          </View>
          {/* card footer */}
          <View style={styles.suggestion_display_card_footer}>
            <Pressable
              onPress={rendomNumber}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 5,
              }}>
              <Text style={[styles.headerDateText, {marginRight: 3}]}>
                Next
              </Text>
              <Ionicons name="play-skip-forward" size={12.5} color="#fff" />
            </Pressable>
          </View>
        </View>
      ) : null}
      {/* suggestion List */}
      <View style={styles.section_2_scrollView_container}>
        {todoArr.length > 0 ? (
          <ScrollView contentContainerStyle={styles.section_2_scrollView}>
            {todoArr.map((item, index) => (
              <>
                <View style={styles.list_card_container}>
                  <Text style={styles.list_card_container_text}>
                    {index + 1} {item.task}
                  </Text>
                </View>
                {index === todoArr.length - 1 ? null : (
                  <View style={styles.horizontal_divider} />
                )}
              </>
            ))}
          </ScrollView>
        ) : (
          <EmptyList />
        )}
        <Pressable
          onPress={() => setModalVisible(true)}
          style={styles.add_list_item_fab}>
          <Ionicons name="add" size={30} color="#fff" />
        </Pressable>
      </View>
      <Modal
        body={
          <AddSuggestion
            onSave={() => {
              setModalVisible(false);
              addTodoHandler();
            }}
            onCancel={() => setModalVisible(false)}
            label={InputData}
            setLabel={setInputData}
          />
        }
        modalVisible={modalVisible}
        setModalVisible={() => setModalVisible(!modalVisible)}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  todoArr: state.todos,
});
const mapDispatchToProps = (dispatch) => ({
  addTodo: (data) => dispatch(todoData(data)),
  deleteTodo: (data) => dispatch(deleteTodo(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);

const EmptyList = () => {
  return (
    <>
      <View style={[styles.empty_list_container]}>
        <Text>List is Empty</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  drawericon: {
    // marginVertical: 10,
    marginRight: 15,
  },
  homeContainer: {
    flex: 1,
    // backgroundColor: '#272660',
    backgroundColor: '#2A3D8E',
  },
  suggestion_display_card_container: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  suggestion_display_card_header: {
    margin: 5,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    // alignItems: 'flex-end',
  },
  suggestion_display_card_footer: {
    margin: 5,
    padding: 5,
    alignItems: 'flex-end',
  },
  headerDateText: {
    fontSize: 13,
    color: '#fff',
  },
  section_2_scrollView_container: {
    backgroundColor: '#fff',
    borderRadius: 30,
    position: 'relative',
    paddingTop: 10,
    flex: 1,
    overflow: 'hidden',
  },
  section_2_scrollView: {
    alignItems: 'center',
  },
  suggestion_display_card_body: {
    margin: 5,
    padding: 5,
  },
  suggestion_display_card_body_Text: {
    margin: 5,
    padding: 5,
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  list_card_container: {
    // backgroundColor: 'red',
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 5,
    borderRadius: 5,
    width: '95%',
  },
  list_card_container_text: {
    // backgroundColor: 'red',
    // width: '90%',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5,
    color: '#2A3D8E',
    textTransform: 'capitalize',
  },
  add_list_item_fab: {
    // paddingHorizontal: 10,
    backgroundColor: '#2A3D8E',
    width: 60,
    height: 60,
    borderRadius: 50,
    position: 'absolute',
    bottom: 15,
    right: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  horizontal_divider: {
    width: '95%',
    borderBottomColor: '#2A3D8E',
    borderBottomWidth: 1,
    // alignSelf: 'center',
  },
  empty_list_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
