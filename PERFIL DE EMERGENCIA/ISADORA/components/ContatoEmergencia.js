import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Pacote de ícones do Expo

export default function Content() {
  // Estados para controlar a visibilidade dos números
  const [isPhoneVisible, setPhoneVisible] = useState(false);

  // Função para alternar a visibilidade
  const togglePhoneVisibility = () => {
    setPhoneVisible(!isPhoneVisible);
  };

  // Números de telefone visíveis ou ocultos
  const phone1 = isPhoneVisible ? "+55 (11) 91234-5678" : "+55 (11) 9 **** ****";
  const phone2 = isPhoneVisible ? "+55 (11) 98765-4321" : "+55 (11) 9 **** ****";

  return (
    <View style={styles.container}>

      <View style={styles.titleContainer}>
        <Text style={styles.infoTitle}>Contato de Emergência</Text>
        <TouchableOpacity onPress={togglePhoneVisibility}>
          <Ionicons
            name={isPhoneVisible ? "eye-off" : "eye"}
            size={16}
            color="#6533A1"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.horizontalLine}></View>


      <View style={styles.contactBox}>
        <View>
          <Text style={styles.contactName}>Lilian Oliveira</Text>
          <Text style={styles.contactRelation}>Mãe biológica</Text>
        </View>
        <Text style={styles.contactPhone}>{phone1}</Text>
      </View>


      <View style={styles.contactBox}>
        <View>
          <Text style={styles.contactName}>Caio Oliveira</Text>
          <Text style={styles.contactRelation}>Pai biológico</Text>
        </View>
        <Text style={styles.contactPhone}>{phone2}</Text>
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
  titleContainer: {
    width: '80%',  // Limitar a largura a 80%
    flexDirection: 'row',  // Alinhar o título e o ícone em linha
    justifyContent: 'space-between',  // Título à esquerda, ícone à direita
    alignItems: 'center',  // Centralizar verticalmente
  },
  infoTitle: {
    fontSize: 16,  // Tamanho do título
    color: '#A9A9A9',  // Cor cinza claro
  },
  horizontalLine: {
    width: '80%',
    height: 1,  // Altura da linha
    backgroundColor: '#A9A9A9',  // Cor da linha (igual ao título)
    marginVertical: 10,  // Espaçamento entre a linha e a caixa
  },
  contactBox: {
    width: '80%',
    backgroundColor: '#F5F5F5',  // Fundo cinza claro
    padding: 15,  // Espaçamento interno
    borderRadius: 5,  // Bordas arredondadas
    flexDirection: 'row',  // Alinhar nome e telefone horizontalmente
    justifyContent: 'space-between',  // Nome à esquerda, telefone à direita
    alignItems: 'center',  // Centralizar verticalmente
    marginBottom: 10,  // Espaçamento entre os contatos
  },
  contactName: {
    fontSize: 14,  // Tamanho do nome
    fontWeight: 'bold',  // Negrito
    color: '#6433A2',  // Texto em cinza escuro
  },
  contactRelation: {
    fontSize: 12,  // Tamanho menor para a relação (Mãe/Pai)
    color: '#666',  // Texto em cinza claro
  },
  contactPhone: {
    fontSize: 14,  // Tamanho do número de telefone
    color: '#6533A1',  // Cor roxa
    fontWeight: 'bold',  // Negrito
  },
});
