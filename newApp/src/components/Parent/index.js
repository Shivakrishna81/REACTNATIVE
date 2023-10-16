import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import HeaderMenu from '../HeaderMenu/header';

const Parent = ({navigation}) => (
  <View style={styles.homeContainer}>
    <HeaderMenu navigation={navigation} />
    <View style={styles.homeContent}>
      <Text style={styles.welcome}>
        Welcome to <Text style={styles.studentText}>Parent</Text> component,
        Have a Good Experience!!
      </Text>
      <Button onPress={() => navigation.push('Home')} style={styles.button}>
        Go to Home
      </Button>
    </View>
  </View>
);

export default Parent;

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: '#E6EDF1',
    flex: 1,
  },
  menuBar: {
    backgroundColor: '#CDDBE4',
    padding: 15,
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  student: {
    fontSize: 10,
    color: '#000000',
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  homeContent: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    textAlign: 'center',
  },
  welcome: {
    fontSize: 20,
    color: '#000000',
    textAlign: 'center',
  },
  studentText: {
    fontSize: 30,
    color: '#4E7791',
  },
  button: {
    borderWidth: 1,
    borderColor: '#243743',
    borderRadius: 8,
    padding: 10,
    margin: 10,
    color: '#365264',
  },
});
