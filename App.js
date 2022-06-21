import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const [props, setProps] = useState({
    numero: 0,
    btnText: 'Começar',
    ultimo: null
  });
  const [timer, setTimer] = useState(null);

  function go() {
    if (!timer) {
     setTimer(setInterval(() => {
        setProps(prevState => ({numero: prevState.numero + 0.1, btnText: 'Parar', ultimo: prevState.ultimo}))
      }, 100));
      
    }else {
      clearInterval(timer);
      setProps(prevState => ({numero: prevState.numero, btnText: 'Retomar'}))
      setTimer(null);
    }
  };
  function clear(){
    clearInterval(timer);
    setTimer(null);
    setProps({numero: 0, btnText: 'Começar', ultimo: props.numero});
  }

  return (
    <View style={styles.container}>
      <Image
      source={require('./src/cronometro.png')}
      style={styles.cronometro}
      />
      <Text style={styles.timer}>{props.numero.toFixed(1)}</Text>
      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn} onPress={go}>
          <Text style={styles.btnTexto}>{props.btnText}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={()=> clear()}>
          <Text style={styles.btnTexto}>Limpar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.areaUltima}>
        <Text style={styles.textoCorrida}>
          {props.ultimo > 0 ? 'Ultimo tempo: ' + props.ultimo.toFixed(2) : ''}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef'
  },
  timer: {
    marginTop: -160,
    color: '#FFF',
    fontSize: 65,
    fontWeight: 'bold'
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 70,
    height: 40
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 40,
    margin: 17,
    borderRadius: 9
  },
  btnTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef'
  },
  areaUltima: {
    marginTop: 40,
  },
  textoCorrida: {
    fontSize: 25,
    fontStyle: 'italic',
    color: '#FFF'
  }
});
