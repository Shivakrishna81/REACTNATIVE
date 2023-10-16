import React,{useState} from 'react'
import { Text, View,StyleSheet} from 'react-native'
import Button from 'react-native-button' 
import HeaderMenu from '../HeaderMenu/header'
import DropDown from '../Dropdown'

const semData=[
            {label:"I SEM",value:'1'},
            {label:'II SEM',value:'2'},
            {label:'III SEM',value:'3'},
            {label:'IV SEM',value:'4'},
            {label:'V SEM',value:'4'},
            {label:'VI SEM',value:'4'},
]
const yeardata=[
      {label:'2021-2022',value:'2'},
      {label:'2022-2023',value:'3'},
      {label:'2023-2024',value:'4'},
      {label:'2024-2025',value:'5'},
]      

const level=[
    {label:'UG',value:'1'},
    {label:'PG',value:'2'},
    {label:'PhD',value:'3'},
]


const StudentMarksView=({navigation})=>
  (
        <View style={styles.homeContainer}>
            <HeaderMenu navigation={navigation}/>
          <View style={styles.homeContent}>
                <View style={{marginBottom:30}}>
                  <Text style={styles.inputHead}>Graduation Level</Text>
                  <DropDown data={level}/>
                </View>
                <View style={{marginBottom:30}}>
                <Text style={styles.inputHead}>Semester</Text>
                  <DropDown data={semData}/>
                </View>
                <View style={{marginBottom:30}}>
                   <Text style={styles.inputHead}>Academic year</Text>
                  <DropDown data={yeardata}/>
                </View>
          </View>
        </View>
    )



export default StudentMarksView;


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
    display:"flex",
    flexDirection:'column',

  },
  welcome:{
    fontSize:20,
    color:"#000000",
    textAlign:"center",
  },
  studentText:{
    fontSize:30,
    color:"#4E7791"
  },
  button:{
    borderWidth:1,
    borderColor:"#243743",
    borderRadius:8,
    padding:10,
    margin:10,
    color:"#365264"
  },
  inputHead:{
    fontSize:18,
    color:"#000000",
    marginLeft:20,
  }
})
    