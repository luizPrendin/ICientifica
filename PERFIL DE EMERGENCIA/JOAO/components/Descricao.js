import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Content() {
  return (
    <View style={styles.container}>

      <View style={styles.infoBlock}>
        <Text style={styles.infoTitle}>Descrição</Text>
        <View style={styles.horizontalLine}></View>
        <View style={styles.descriptionBox}>
          <Text style={styles.descriptionText}>
João é um senhor de 80 anos que sofre de hipertensão controlada e já passou por um AVC leve. Faz acompanhamento regular com cardiologista e geriatra. Apresenta mobilidade reduzida e usa bengala para locomoção.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',  // Centralizar os blocos no meio da tela
    paddingVertical: 10,  // Espaçamento vertical entre blocos
  },
  infoBlock: {
    width: '80%',  // Limitar o bloco a 80% da largura da tela
    marginBottom: 20,  // Espaçamento inferior entre blocos
  },
  infoTitle: {
    fontSize: 16,  // Tamanho do título
    color: '#A9A9A9',  // Cor cinza claro
    marginBottom: 5,  // Espaçamento abaixo do título
  },
  horizontalLine: {
    height: 1,  // Altura da linha
    backgroundColor: '#A9A9A9',  // Cor da linha (igual ao título)
    marginBottom: 10,  // Espaçamento entre a linha e a caixa
  },
  descriptionBox: {
    backgroundColor: '#F5F5F5',  // Fundo cinza claro
    padding: 15,  // Espaçamento interno
    borderRadius: 10,  // Bordas arredondadas
  },
  descriptionText: {
    fontSize: 14,  // Tamanho do texto dentro da descrição
    color: '#333',  // Texto cinza escuro
    textAlign: 'left',  // Alinhar o texto à esquerda
  },
});
