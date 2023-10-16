import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  Alert,
  ToastAndroid,
  StyleSheet,
  Image,
} from 'react-native';

export default function Login({navigation}) {
  const [value, setValue] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const onPressAuthorize = async () => {
    try {
      const url = 'https://apis.ccbp.in/login';
      const userDetails = {username, password};
      const options = {
        method: 'POST',
        body: JSON.stringify(userDetails),
      };
      const response = await fetch(url, options);
      const data = await response.json();
      if (response.ok) {
        setUsername('');
        setPassword('');
        navigation.push('Home');
      } else {
        setError(true);
      }
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Image
        source={{
          uri: 'https://res.cloudinary.com/dywrzseia/image/upload/v1697028386/logo_rwaz7q.png',
        }}
        style={{width: 310, height: 110, margin: 20}}
      />
      <View style={{margin: 10}}>
        <Text style={styles.username}>Username</Text>
        <TextInput
          onChangeText={text => setUsername(text)}
          style={styles.inputField}
          placeholder="Enter Username"
        />
      </View>
      <View style={{margin: 10}}>
        <Text style={styles.password}>Password</Text>
        <TextInput
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
          style={styles.inputField}
          placeholder="Enter Password"
        />
        {error && <Text style={styles.errorMsg}>Enter Valid Credentials</Text>}
      </View>
      <View>
        <TouchableOpacity style={styles.button}>
          <Button title="Login" onPress={onPressAuthorize} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#d3eaf2',
    flex: 1,
  },
  username: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
  },
  password: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
  },
  button: {
    padding: 10,
    borderRadius: 10, // Border radius for rounded corners
    alignItems: 'center', // Center content horizontally
    justifyContent: 'center', // Center content vertically
    cursor: 'pointer', // Add the cursor pointer effect (Web only)
  },
  buttonText: {
    color: 'white', // Text color
    fontWeight: 'bold', // Text font weight
  },
  errorMsg: {
    fontSize: 14,
    color: '#c4371b',
    margin: 10,
  },
  inputField: {
    padding: 10,
    borderRadius: 8,
    borderWidth: 0.5,
    width: 250,
    borderColor: '#000000',
    color: '#000000',
  },
});
