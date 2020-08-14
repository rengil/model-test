import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';


const formData = new FormData();
formData.append('username', 'admin');
formData.append('password', 'Gil212121');


const url = 'http://192.168.1.1/cgi-bin/luci';
export default function App() {


  axios.post(url, formData, { 
    headers: {
      'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
      },
  }).then((response) => {
    console.log(response);
  });

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
