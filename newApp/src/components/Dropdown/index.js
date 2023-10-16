import {Dropdown} from 'react-native-element-dropdown' 
import { Text,View,StyleSheet } from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';


const DropDown=(props)=>{
    
    const [value,setValue]=useState("")
    const [isFocus, setIsFocus] = useState(false);
    const {data}=props
    

    const renderLabel = () => {
        if (value || isFocus) {
          return (
            <Text style={[styles.label, isFocus && { color: 'blue' }]}>
              Dropdown label
            </Text>
          );
        }
        return null;
      };

    return(
        <View>
            <View style={styles.container}>
                <Dropdown data={data} search 
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                itemTextStyle={styles.itemTextStyle}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select item' : '...'}
                searchPlaceholder="Search"
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                setValue(item.value);
                setIsFocus(false);
                }}
                />
            </View>
        </View>
    )

}

export default DropDown;


const styles = StyleSheet.create({
    container: {
     borderWidth:0.8,
     borderRadius:8,
     borderColor:'grey',
      padding: 16,
      paddingTop:8,
      paddingBottom:8,
      margin:20,
      marginTop:5,
      marginBottom:5,
    },
    dropdown: {
      height: 50,
      borderColor: 'blue',
      margin:10,
      padding:10,
      borderWidth:2,
      borderRadius: 8,
      paddingHorizontal: 8,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
      color:"#000000"
    },
    selectedTextStyle: {
      fontSize: 16,
      color:"#000000"
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
      color:"grey"
    },
    itemTextStyle:{
      color:"#000000"
    }
  });