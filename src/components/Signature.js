import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Signature = () => {
  return (
    <View style={styles.adminCont}>
      <View style={styles.adminButton}>
        <Text style={styles.signature}>HADO.pk</Text>
      </View>
    </View>
  );
};
export default Signature;

const styles = StyleSheet.create({
  adminButton: {
    marginVertical: 5,
  },
  signature: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0f0f0f',
    fontStyle: 'italic',
    fontFamily: 'Orbitron',
  },
  adminCont: {
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
});
