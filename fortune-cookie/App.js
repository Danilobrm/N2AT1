import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import frases from './frases';

export default function App() {
  const [frase, setFrase] = useState('');
  const [biscoitoAberto, setBiscoitoAberto] = useState(false);

  const quebrarBiscoito = () => {
    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    setFrase(`"${fraseAleatoria}"`);
    setBiscoitoAberto(true);
  };

  const resetar = () => {
    setFrase('');
    setBiscoitoAberto(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🥠 Fortune Cookie</Text>
      <Image
        source={
          biscoitoAberto
            ? require('./assets/biscoito_aberto.png')
            : require('./assets/biscoito_fechado.png')
        }
        style={styles.biscoito}
      />
      <Text style={styles.frase}>{frase}</Text>

      <TouchableOpacity style={styles.button} onPress={biscoitoAberto ? resetar : quebrarBiscoito}>
        <Text style={styles.buttonText}>
          {biscoitoAberto ? 'Tentar Novamente' : 'Quebrar Biscoito'}
        </Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffeaa7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2d3436',
  },
  biscoito: {
    width: 200,
    height: 200,
    marginBottom: 24,
    resizeMode: 'contain',
  },
  frase: {
    fontSize: 18,
    color: '#2d3436',
    textAlign: 'center',
    fontStyle: 'italic',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#e17055',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
