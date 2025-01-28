import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Content() {
  return (
    <View style={styles.container}>
      <View style={styles.infoBlock}>
        <Text style={styles.infoTitle}>Cartão SUS</Text>
        <View style={styles.horizontalLine}></View>
        
        {/* Ajuste para exibir o texto e a imagem na mesma linha */}
        <View style={styles.infoContent}>
          <Text style={styles.infoText}>180 0 934 0 123</Text>
          <Image source={require('../assets/barcode.png')} style={styles.barcode} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  infoBlock: {
    width: '80%',
    marginBottom: 20,
  },
  infoTitle: {
    fontSize: 16,
    color: '#A9A9A9',
    marginBottom: 5,
  },
  horizontalLine: {
    height: 1,
    backgroundColor: '#A9A9A9',
    marginBottom: 10,
  },
  infoContent: {
    backgroundColor: '#AF97CF',
    padding: 15,
    borderRadius: 5,
    flexDirection: 'row',  // Definir como linha
    alignItems: 'center',  // Alinhar verticalmente o texto e a imagem
    justifyContent: 'space-between',  // Garantir que o texto e a imagem fiquem afastados
  },
  infoText: {
    fontSize: 18,  // Tamanho ajustado do texto
    fontWeight: 'bold',
    color: '#FFF',
    marginRight: 10,  // Espaçamento entre o texto e a imagem
  },
  barcode: {
    width: 200,  // Ajuste da largura da imagem
    height: 30,  // Altura da imagem
    resizeMode: 'contain',
  },
});
