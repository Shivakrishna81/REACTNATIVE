import {StyleSheet} from 'react-native'

export default styles=StyleSheet.create({
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
      minWidth:70,
    },
    selectedIconContainer:{
      display:"flex",
      flexDirection:"column",
      alignItems: 'center',
      borderBottomWidth:2,
      borderBottomColor:"#53809B",
      minWidth:70,
    },
  });