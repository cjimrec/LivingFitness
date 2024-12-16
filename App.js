import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {
  return (
    <ImageBackground 
      style={styles.fondo}
      source = {require('./assets/1-583fbaed.png')}>
    
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  fondo:{
    marginTop:300
  }
});
