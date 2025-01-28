import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Modal, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Pacote de ícones do Expo

export default function Content() {
  // Estado para controlar a visibilidade do modal e o conteúdo exibido
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null); // Define o conteúdo com base no ícone clicado

  // Função para abrir o modal com o conteúdo específico
  const openModal = (content) => {
    setSelectedContent(content);
    setModalVisible(true);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setModalVisible(false);
    setSelectedContent(null);
  };

  // Conteúdo específico de cada ícone
  const contentData = {
    bloodType: {
      icon: 'O-',  // Texto em vez de imagem
      title: 'Tipo Sanguíneo',
      description: [
        {
          name: 'Tipo Sanguíneo: O-',
          details: 'Não há informações sobre o tipo sanguíneo registrado pela usuária.'
        }
      ]
    },
    medication: {
      icon: require('../assets/remedio.png'),  // Ícone PNG
      title: 'Medicamentos',
      description: [
        {
          name: 'Paracetamol (200 mg/ml):',
          indication: 'Uso para controle de febre e dores. Posologia: Conforme necessidade, prescrição pediátrica.',
          posology: '',
          observation: ''
        },
        {
          name: 'Vitamina D (400 UI):',
          indication: 'Suplemento para fortalecimento ósseo. Posologia: 1 gota por dia.',
          posology: '',
          observation: ''
        },
      ]
    },
    health: {
      icon: require('../assets/alergia.png'),  // Ícone PNG
      title: 'Alergias',
      description: [
        {
          name: '',
          details: 'Nenhuma alergia conhecida até o momento.'
        },
      ]
    },
    restriction: {
      icon: require('../assets/bandaid.png'),  // Ícone PNG
      title: 'Restrições',
      description: [
        {
          name: 'Monitoramento da imunidade:',
          details: 'Evitar contato com pessoas com doenças infecciosas.'
        },
      ]
    },
    warning: {
      icon: require('../assets/proibido.png'),  // Ícone PNG
      title: 'Avisos',
      description: [
        {
          name: '',
          details: 'Nenhuma restrição alimentar ou física.'
        },
      ]
    },
  };

  return (
    <View style={styles.container}>
      <View style={styles.infoBlock}>
        <Text style={styles.infoTitle}>Dados Gerais</Text>
        <View style={styles.horizontalLine}></View>
        <View style={styles.iconContainer}>

          <TouchableOpacity style={styles.iconBox} onPress={() => openModal('bloodType')}>
            <Text style={styles.iconText}>AB+</Text> 
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconBox} onPress={() => openModal('medication')}>
            <Image source={require('../assets/remedio.png')} style={styles.iconImage} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconBox} onPress={() => openModal('health')}>
            <Image source={require('../assets/alergia.png')} style={styles.iconImage} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconBox} onPress={() => openModal('restriction')}>
            <Image source={require('../assets/bandaid.png')} style={styles.iconImage} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconBox} onPress={() => openModal('warning')}>
            <Image source={require('../assets/proibido.png')} style={styles.iconImage} />
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Ionicons name="close" size={28} color="red" />
            </TouchableOpacity>

            <ScrollView contentContainerStyle={styles.modalTextContainer}>
              {selectedContent && (
                <View style={styles.iconSection}>
                  <Text style={styles.modalTitle}>{contentData[selectedContent].title}</Text>

                  {Array.isArray(contentData[selectedContent].description) ? (
                    contentData[selectedContent].description.map((item, index) => (
                      <View key={index} style={styles.itemBlock}>
                        <Text style={styles.itemName}>{item.name}</Text>
                        {item.indication && (
                          <Text style={styles.itemDetails}><Text style={styles.boldText}>Indicação:</Text> {item.indication}</Text>
                        )}
                        {item.posology && (
                          <Text style={styles.itemDetails}><Text style={styles.boldText}>Posologia:</Text> {item.posology}</Text>
                        )}
                        {item.observation && (
                          <Text style={styles.itemDetails}><Text style={styles.boldText}>Observação:</Text> {item.observation}</Text>
                        )}
                        {item.details && (
                          <Text style={styles.itemDetails}>{item.details}</Text>
                        )}
                        {index < contentData[selectedContent].description.length - 1 && (
                          <View style={styles.horizontalLine}></View>
                        )}
                      </View>
                    ))
                  ) : (
                    <Text style={styles.modalDescription}>{contentData[selectedContent].description}</Text>
                  )}
                </View>
              )}
            </ScrollView>
          </View>
        </View>
      </Modal>
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
    marginVertical: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconBox: {
    width: 50,
    height: 50,
    backgroundColor: '#E8E8E8',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  iconImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    maxHeight: '80%',
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  modalTextContainer: {
    marginTop: 10,
  },
  iconSection: {
    marginBottom: 15,
  },
  itemBlock: {
    marginBottom: 15,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemDetails: {
    fontSize: 14,
    marginBottom: 3,
  },
  boldText: {
    fontWeight: 'bold',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
  },
  iconText: {
    fontSize: 22,
    color: '#6433A2',  // Cor roxa para o texto "AB+"
    fontWeight: 'bold',
  },
});
