import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Pacote de ícones do Expo

export default function Content() {
  // Estados para controlar a visibilidade dos documentos e dos médicos
  const [isDocumentsVisible, setDocumentsVisible] = useState(false);
  const [isDoctorsVisible, setDoctorsVisible] = useState(false);

  // Funções para alternar a visibilidade
  const toggleDocumentsVisibility = () => {
    setDocumentsVisible(!isDocumentsVisible);
  };

  const toggleDoctorsVisibility = () => {
    setDoctorsVisible(!isDoctorsVisible);
  };

  // Documentos visíveis ou ocultos
  const cpf = isDocumentsVisible ? "008.123.456-78" : "008.***.***-**";
  const rg = isDocumentsVisible ? "41.123.456-9" : "41.***.***-*";

  // Telefones médicos visíveis ou ocultos
  const phone1 = isDoctorsVisible ? "+55 (11) 91234-5678" : "+55 (11) 9 **** ****";
  const phone2 = isDoctorsVisible ? "+55 (11) 98765-4321" : "+55 (11) 9 **** ****";

  return (
    <View style={styles.container}>
      {/* Bloco de Documentos */}
      <View style={styles.infoBlock}>
        <View style={styles.titleContainer}>
          <Text style={styles.infoTitle}>Documentos</Text>
          <TouchableOpacity onPress={toggleDocumentsVisibility}>
            <Ionicons
              name={isDocumentsVisible ? "eye-off" : "eye"}
              size={16}  // Diminuir o tamanho do ícone
              color="#6533A1"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.horizontalLine}></View>
        <View style={styles.documentBox}>
          <Text style={styles.documentType}>CPF</Text>
          <Text style={styles.documentText}>{cpf}</Text>
          <Text style={styles.documentType}>RG</Text>
          <Text style={styles.documentText}>{rg}</Text>
        </View>
      </View>

      {/* Bloco de Médicos de Referência */}
      <View style={styles.infoBlock}>
        <View style={styles.titleContainer}>
          <Text style={styles.infoTitle}>Médicos de referência</Text>
          <TouchableOpacity onPress={toggleDoctorsVisibility}>
            <Ionicons
              name={isDoctorsVisible ? "eye-off" : "eye"}
              size={16}  // Diminuir o tamanho do ícone
              color="#6533A1"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.horizontalLine}></View>

        {/* Médico 1 */}
        <View style={styles.contactBox}>
          <View>
            <Text style={styles.contactName}>Carolina Rocha</Text>
            <Text style={styles.contactRelation}>CRM 654789 SP</Text>
          </View>
          <Text style={styles.contactPhone}>{phone1}</Text>
        </View>

        {/* Médico 2 */}
        <View style={styles.contactBox}>
          <View>
            <Text style={styles.contactName}>Patrícia Silva</Text>
            <Text style={styles.contactRelation}>CRM 349765 SP</Text>
          </View>
          <Text style={styles.contactPhone}>{phone2}</Text>
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
titleContainer: {
  width: '100%',  // Ocupa 100% da largura da view
  flexDirection: 'row',  // Alinhar o título e o ícone em linha
  justifyContent: 'space-between',  // Título à esquerda, ícone à direita
  alignItems: 'center',  // Centralizar verticalmente
},
  infoBlock: {
    width: '80%',  // Limitar o bloco a 80% da largura da tela
    marginBottom: 20,  // Espaçamento inferior entre blocos
  },
  infoTitle: {
    fontSize: 16,  // Tamanho do título
    color: '#A9A9A9',  // Cor cinza claro
  },
  horizontalLine: {
    width: '100%',  // Ajuste para a linha ter a mesma largura da view
    height: 1,  // Altura da linha
    backgroundColor: '#A9A9A9',  // Cor da linha (igual ao título)
    marginVertical: 10,  // Espaçamento entre a linha e a caixa
  },
  documentBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',  // Distribuir os documentos em linha
    padding: 10,
    backgroundColor: '#F5F5F5',  // Fundo cinza claro
    borderRadius: 5,
  },
  documentType: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6533A1',  // Texto roxo para os tipos de documentos
  },
  documentText: {
    fontSize: 16,
    color: '#333',  // Texto cinza escuro para os valores dos documentos
  },
  contactBox: {
    backgroundColor: '#F5F5F5',  // Fundo cinza claro
    padding: 15,  // Espaçamento interno
    borderRadius: 10,  // Bordas arredondadas
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
    fontSize: 12,  // Tamanho menor para a relação (CRM)
    color: '#666',  // Texto em cinza claro
  },
  contactPhone: {
    fontSize: 14,  // Tamanho do número de telefone
    color: '#6433A2',  // Cor roxa
    fontWeight: 'bold',  // Negrito
  },
});
