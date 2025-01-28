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
      icon: 'AB+',  // Texto em vez de imagem
      title: 'Tipo Sanguíneo',
      description: [
        {
          name: 'Tipo Sanguíneo: AB+',
          details: 'O tipo sanguíneo AB+ é conhecido como receptor universal, podendo receber transfusões de qualquer tipo de sangue. Contudo, só pode doar para pessoas com o mesmo tipo sanguíneo (AB+).'
        }
      ]
    },
    medication: {
      icon: require('../assets/remedio.png'),  // Ícone PNG
      title: 'Medicamentos',
      description: [
        {
          name: 'Losartana (50 mg)',
          indication: 'Utilizado para o controle da hipertensão arterial (pressão alta).',
          posology: '1 comprimido por dia, conforme prescrição médica.',
          observation: 'Uso contínuo, essencial para o controle da pressão arterial e para a prevenção de complicações cardiovasculares.'
        },
        {
          name: 'Metformina (850 mg)',
          indication: 'Utilizada para o tratamento do diabetes tipo 2, ajudando a controlar os níveis de glicose no sangue.',
          posology: '1 a 2 comprimidos por dia, conforme orientação médica.',
          observation: 'Uso contínuo, importante para o controle do diabetes e prevenção de complicações associadas.'
        },
        {
          name: 'Paracetamol (500 mg)',
          indication: 'Analgésico e antitérmico, utilizado para aliviar dores leves e moderadas, como dor de cabeça, febre e dor muscular.',
          posology: '1 comprimido a cada 6 a 8 horas, quando necessário.',
          observation: 'Não exceder 4 gramas (8 comprimidos) por dia. Uso comum para sintomas do dia a dia, como febre ou dor leve.'
        },
        {
          name: 'Loratadina (10 mg)',
          indication: 'Antialérgico utilizado para tratar sintomas de alergia, como coriza, espirros, coceira e urticária.',
          posology: '1 comprimido por dia, conforme necessidade.',
          observation: 'Pode ser usado para tratar alergias sazonais, rinite alérgica ou urticária sem necessidade de prescrição.'
        }
      ]
    },
    health: {
      icon: require('../assets/alergia.png'),  // Ícone PNG
      title: 'Alergias',
      description: [
        {
          name: 'Alergia a Pólen',
          details: 'Causa sintomas como espirros, coriza, olhos lacrimejantes e coceira, principalmente durante a primavera.'
        },
        {
          name: 'Alergia Alimentar (Amendoim)',
          details: 'Pode causar reações graves, como urticária, inchaço, e em casos severos, anafilaxia.'
        }
      ]
    },
    restriction: {
      icon: require('../assets/bandaid.png'),  // Ícone PNG
      title: 'Restrições',
      description: [
        {
          name: 'Intolerância à Lactose',
          details: 'Deve evitar o consumo de laticínios ou optar por produtos sem lactose.'
        },
        {
          name: 'Mobilidade Reduzida',
          details: 'Tem dificuldade para realizar atividades físicas intensas devido a uma lesão no joelho. Precisa de acompanhamento fisioterápico.'
        }
      ]
    },
    warning: {
      icon: require('../assets/proibido.png'),  // Ícone PNG
      title: 'Avisos',
      description: [
        {
          name: 'Evitar Locais Poluídos',
          details: 'Ambientes com alta concentração de poluição podem desencadear crises respiratórias.'
        },
        {
          name: 'Evitar Esforço Físico Intenso',
          details: 'Esforços físicos intensos podem agravar a condição do joelho e causar dor.'
        }
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
