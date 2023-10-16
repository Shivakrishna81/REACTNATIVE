import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import styles from './Style'

const HeaderMenu = ({navigation}) => {
    
  const [selectedIcon,setSelected]=useState(false)
  const [color,setColor]=useState("student")
  const studentIconContainer=color==="student"?styles.selectedIconContainer:styles.iconContainer
  const parentIconContainer=color==="parent"?styles.selectedIconContainer:styles.iconContainer
  const facultyIconContainer=color==="faculty"?styles.selectedIconContainer:styles.iconContainer
  return (<View style={styles.menuBar}>
    <Button onPress={() => navigation.push('Student')}>
      <View style={studentIconContainer}>
        <Icon name="user-circle" size={27} color="#53809B" />
        <Text style={styles.student}>Student</Text>
      </View>
    </Button>

    <Button onPress={() => navigation.push('Parent')}>
      <View style={styles.iconContainer}>
        <Icon name="user" size={27} color="#53809B" />
        <Text style={styles.student}>Parent</Text>
      </View>
    </Button>

    <Button onPress={() => navigation.push('StudentMarksView')}>
      <View style={styles.iconContainer}>
        <Icon name="book" size={27} color="#53809B" />
        <Text style={styles.student}>Faculty</Text>
      </View>
    </Button>
  </View>
);
}
export default HeaderMenu;


