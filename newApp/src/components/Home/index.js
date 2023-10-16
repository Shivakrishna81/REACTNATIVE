import React,{useState} from 'react'
import { Text, View,StyleSheet} from 'react-native'
import HeaderMenu from '../HeaderMenu/header';
import { useRoute } from '@react-navigation/native';

const Home=({navigation})=>{
    const route=useRoute()
    const [value,setValue]=useState("")
    const [isFocus, setIsFocus] = useState(false);
    
  
    return(
        <View style={styles.homeContainer}>
          <HeaderMenu navigation={navigation}/>
          <View style={styles.homeContent}>
                <Text style={styles.welcome}>
                  Welcome to home component, Have a Good Experience!!
                </Text>
          </View>
        </View>
    )

}

export default Home;


const styles = StyleSheet.create({
  homeContainer:{
    backgroundColor:"#E6EDF1",
    flex:1,
  },
  menuBar:{
    backgroundColor:"#CDDBE4",
    padding:15,
    height:60,
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingLeft:20,
    paddingRight:20,
  },
  student:{
    fontSize:10,
    color:"#000000"
  },
  iconContainer:{
    display:"flex",
    flexDirection:"column",
    alignItems:'center'
  },
  homeContent:{
    width:"100%",
    flex:1,
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    padding:20,
    textAlign:"center",
  },
  welcome:{
    fontSize:20,
    color:"#000000",
    textAlign:"center",
  },
})
    