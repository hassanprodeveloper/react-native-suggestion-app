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
  const arrDataList = ['alu', 'gobbi', 'matter', 'gagher', 'chawal'];
  const rendomNumber = () => {
    let rendom_number = Math.floor(Math.random() * arrDataList.length);
    setSugestedIndex(rendom_number);
    return;
  };
  useEffect(() => {
    rendomNumber();
  }, []);
  return (
    <View style={styles.homeContainer}>
      {/* suggestion display card */}
      <View style={styles.suggestion_display_card_container}>
        {/* card header */}
        <View style={styles.suggestion_display_card_header}>
          <Text style={styles.headerDateText}>{new Date().toDateString()}</Text>
        </View>
        {/* card body */}
        <View style={styles.suggestion_display_card_body}>
          <Text
            numberOfLines={1}
            style={styles.suggestion_display_card_body_Text}>
            {arrDataList[sugestedIndex]}
          </Text>
        </View>
      </View>
      {/* suggestion List */}
      <View style={styles.section_2_scrollView_container}>
        <ScrollView contentContainerStyle={styles.section_2_scrollView}>
          {arrDataList.map((item, index) => (
            <>
              <View style={styles.list_card_container}>
                <Text style={styles.list_card_container_text}>
                  {index + 1} {item}
                </Text>
              </View>
              {index === arrDataList.length - 1 ? null : (
                <View style={styles.horizontal_divider} />
              )}
            </>
          ))}
        </ScrollView>
        <Pressable onPress={rendomNumber} style={styles.add_list_item_fab}>
          <Ionicons name="add" size={30} color="#fff" />
        </Pressable>
      </View>
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

const styles = StyleSheet.create({
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
});
