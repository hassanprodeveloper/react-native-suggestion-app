import React from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import {Avatar, Caption, Drawer, Title} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Signature from './Signature';
import {connect} from 'react-redux';
import {resetTodo} from '../redux/action';

const DrawerContent = (props) => {
  const clearTodosData = () => {
    // this function clear all todos data
    props.navigation.closeDrawer();
    Alert.alert(
      'Are You Sure?',
      'If you press Yes then all your task will be deleted',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            props.clearTodo([]);
          },
        },
      ],
    );
  };

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image
                source={{
                  uri:
                    'data:image/png;base64,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',
                }}
                size={50}
              />
              <View style={{marginLeft: 15}}>
                <Title style={styles.title}>Guest</Title>
                <Caption style={styles.caption}>@task management</Caption>
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              label="Home"
              onPress={() => props.navigation.navigate('DrawerWelcome')}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="notification-clear-all" color={color} size={size} />
              )}
              label="Clear All Todos"
              onPress={() => clearTodosData()}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      {/* HADO.pk signature */}
      <Signature />
    </View>
  );
};
const mapDispatchToProps = (dispatch) => ({
  clearTodo: (data) => dispatch(resetTodo(data)),
});
export default connect(null, mapDispatchToProps)(DrawerContent);
// STYLE SHEET DWON HERE
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 3,
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    marginRight: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preferences: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
