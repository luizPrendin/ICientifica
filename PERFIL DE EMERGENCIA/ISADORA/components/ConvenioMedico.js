import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Content() {
  return (
    <View style={styles.container}>

      <View style={styles.infoBlock}>
        <Text style={styles.infoTitle}>Convênio Médico</Text>
        <View style={styles.horizontalLine}></View>
        <View style={styles.infoContent}>

          <Text style={styles.infoText}>009 41 365 111 203 456</Text>

          {/* Linha para "Amil S750" e Data */}
          <View style={styles.row}>
            <Text style={styles.amilText}>Amil S750</Text>
            <Text style={styles.dateText}>14 / 06 / 2026</Text>
          </View>


          <Text style={styles.subInfoText}>Particular individual familiar</Text>
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
    backgroundColor: '#AF97CF',  // Fundo lilás
    padding: 15,  // Espaçamento interno
    borderRadius: 5,  // Bordas arredondadas
  },
  infoText: {
    fontSize: 32,  // Tamanho maior para o número do convênio
    fontWeight: 'bold',  // Negrito
    color: '#FFF',  // Texto branco
    textAlign: 'center',  // Centralizar o texto
    marginBottom: 10,  // Espaçamento abaixo do número do convênio
  },
  row: {
    flexDirection: 'row',  // Dispor os itens em linha
    justifyContent: 'space-between',  // Distribuir "Amil S750" e a data em lados opostos
    width: '100%',
    marginBottom: 5,  // Espaçamento abaixo da linha
  },
  amilText: {
    fontSize: 16,  // Tamanho do texto "Amil S750"
    fontWeight: 'bold',  // Negrito
    color: '#FFF',  // Texto branco
    textAlign: 'left',  // Alinhado à esquerda
  },
  dateText: {
    fontSize: 14,  // Tamanho da data
    color: '#FFF',  // Texto branco
    textAlign: 'right',  // Alinhado à direita
  },
  subInfoText: {
    fontSize: 14,  // Tamanho menor para informações adicionais
    color: '#FFF',  // Texto branco
    textAlign: 'left',  // Alinhado à esquerda
  },
});
