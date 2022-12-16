import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View , Pressable} from 'react-native';
import React from 'react';
import ImageViewer from './components/ImageViewer';
import Button from './components/Button';


const PlaceholderImage = require("./assets/xdx.jpg");

export default function App() {
  return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <ImageViewer placeholderImageSource={PlaceholderImage} />
        </View>
        <View style={styles.footerContainer}>
          <Button theme="primary" label="Argentina"/>
          <Button theme="one" label="Francia"/>
          <Button theme="two" label="Marruecos"/>
        </View>    
      <StatusBar style="auto"/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
},
imageContainer: {
    flex: 1,
    paddingTop: 58,
},
 
  footerContainer: {
    flex: 1 / 2,
    alignItems: 'center',
  },

});
