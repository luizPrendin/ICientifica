import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Content() {
  return (
    <View style={styles.container}>
      {/* Bloco de Cadastro Yaso */}
      <View style={styles.infoBlock}>
        <Text style={styles.infoTitle}>Cadastro Yaso</Text>
        
        {/* Linha horizontal */}
        <View style={styles.horizontalLine}></View>
        
        <View style={styles.infoContent}>
          <Text style={styles.infoText}>Y - 24.36.25.53113</Text>
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
  infoContent: {
    backgroundColor: '#AF97CF',  // Fundo lilás (cor semelhante à imagem)
    padding: 10,  // Espaçamento interno
    borderRadius: 5,  // Bordas arredondadas
    alignItems: 'center',  // Centralizar o conteúdo dentro da caixa
  },
  infoText: {
    fontSize: 36,  // Tamanho maior para o texto do conteúdo
    fontWeight: 'bold',  // Negrito
    color: '#FFF',  // Texto branco
    textAlign: 'center',  // Centralizar o texto
  },
});
