import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {windowWidth, windowHeight} from '../Assets/Dimensions';

const Header = ({navigation, title, iconType, ...rest}) => {
  return (
    <>
      <View style={styles.HeaderCont}>
        <Icon
          style={styles.drawericon}
          name={iconType}
          {...rest}
          color="#0f0f0f"
          size={26}
        />
        <View style={styles.headerTitleCont}>
          <Text style={styles.headerTitle}>{title}</Text>
        </View>
      </View>
    </>
  );
};
export default Header;

const styles = StyleSheet.create({
  HeaderCont: {
    width: windowWidth,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  headerTitleCont: {
    flex: 1,
    paddingHorizontal: 5,
    justifyContent: 'center',
    textAlign: 'center',
  },
  drawericon: {
    marginVertical: 10,
    marginHorizontal: 15,
  },
});
