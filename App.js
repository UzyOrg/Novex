/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView, 
  StyleSheet, 
  View, 
  Text, 
  StatusBar, 
  Dimensions,
  Button, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';

//Se usara este componente despues 
import Login from './src/Components/LoginForm';
import {Colors} from 'react-native/Libraries/NewAppScreen';



//Obtener las dimensiones directamente de la pantalla
const {width, height} = Dimensions.get('window');

//Animación zoomIn
const zoomIn = {
  1: {
    opacity: 1,
    scale: 1,
    
  },
  0.5: {
    opacity: 1,
    scale: 0.3,
  },
  0: {
    opacity: 0,
    scale: 0,
   
  },
};

// Animación movimiento en Y
const tranformY = {
  0:{
    translateY: 50,
    scale:2,
  },
  1:{
    translateY: -height/3+228,
    scale:1,
  },
};

const App: () => React$Node = () => {

  // Quitar los warnings
  console.disableYellowBox = true

  const [displaySesion, setDisplaySesion] = useState(false);


  const displayForm =() => {

    if(!displaySesion)
    {
        setDisplaySesion(true);    
    }   
    
  }
        return (
          <>
              {/* <StatusBar barStyle="dark-content" />  Es para que los iconos de notificaciones sean negros */}
              
              {/* Imagen de fondo */}
              <View style={StyleSheet.absoluteFill}>
                  <Animatable.Image animation={tranformY}style={{flex: 1, height: null, width: null}} source={require('./src/Images/bg.png')}/>
              </View>

              {/* Contenedor - Logo y texto */}
              <SafeAreaView style={styles.view}>
                  <Animatable.Image animation="fadeInUp" style={styles.logo} source={require('./src/Images/Logo.png')}/>
                  <Animatable.Text animation={zoomIn} delay={1000} style={{alignItems: "center", color: '#fff', fontSize:50, fontWeight: 'bold', }}>
                      Novex
                  </Animatable.Text>
                  {/* <Login /> */}
              </SafeAreaView>
                  
              {/* Boton iniciar sesón */}
              { !displaySesion 
              ?
                  <View style={{height:height/3, opacity:1}}>
                      <Animatable.View  animation="zoomIn">
                            <TouchableOpacity  onPress={displayForm} style={styles.button}>
                                <Text style={{color:"#0CB7F2", fontSize:18, fontWeight:'bold'}}>
                                    INICIA SESIÓN
                                </Text>
                            </TouchableOpacity> 
                        </Animatable.View>  
                  </View>
              :        
                  <Animatable.View animation="fadeInUp"style={{alignItems:'center', justifyContent:'center'}}>
                      <Login />
                  </Animatable.View>
              }
          </>
        );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
   
  },
  logo: {
    
    height: 205,
    width: '50%',
    marginTop: 100,
    
  },
  button:{
    backgroundColor: '#fff',
    marginHorizontal: 70,
    alignItems: "center",
    borderRadius: 40,
    height: 60,
    justifyContent: "center",
    
  },
});

export default App;
