import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { API_URL } from '@env';

export default function AdicionarExameScreen({ navigation, route }) {
  const [nome, setNome] = useState('');
  const [tipo, setTipo] = useState('');
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  const [endereco, setEndereco] = useState('');
  const [relevante1, setRelevante1] = useState('');
  const [uploads1, setUploads1] = useState([]);
  const [uploads2, setUploads2] = useState([]);
  const [ocrResultado, setOcrResultado] = useState('');
  const [fotosCapturadas, setFotosCapturadas] = useState([]);
  const [fotoSelecionada, setFotoSelecionada] = useState(null);

  useEffect(() => {
    if (route.params?.item) {
      const {
        nome, tipo, data, hora, endereco,
        relevante1, uploads1, uploads2, fotosCapturadas
      } = route.params.item;

      setNome(nome);
      setTipo(tipo);
      setData(data);
      setHora(hora);
      setEndereco(endereco);
      setRelevante1(relevante1);
      setUploads1(uploads1 || []);
      setUploads2(uploads2 || []);
      setFotosCapturadas(fotosCapturadas || []);
    }
  }, [route.params?.item]);

  const pickImage = () => {
    navigation.navigate('CameraScreen', {
      onImageTaken: (imageUri, ocrText) => {
        const newPhoto = { uri: imageUri, ocr: ocrText };
        setFotosCapturadas(prevFotos => [...prevFotos, newPhoto]);
      },
    });
  };

  const handleFotoPress = (foto) => {
    setFotoSelecionada(foto);
    setOcrResultado(foto.ocr);
  };

  const fecharVisualizacao = () => {
    setFotoSelecionada(null);
    setOcrResultado('');
  };

  const excluirFoto = (foto) => {
    setFotosCapturadas(fotosCapturadas.filter(f => f !== foto));
    if (fotoSelecionada === foto) {
      fecharVisualizacao();
    }
  };

  const salvarExame = () => {
    if (nome && tipo && data && hora) {
      const newItem = {
        id: route.params?.item?.id || null,
        nome,
        tipo,
        data,
        hora,
        endereco,
        relevante1,
        uploads1,
        uploads2,
        fotosCapturadas,
      };
      salvarExameBD()
      navigation.navigate('Exames', { newItem, isExame: true });
      
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  };

const salvarExameBD = async () => {
  if (nome && tipo && data && hora) {
    try {
      // Converter a imagem capturada para base64
      const base64Image = await convertImageToBase64(fotosCapturadas[0]?.uri);

      const newItem = {
        nome_exame: nome,
        tipo_exame: tipo,
        medico_exame: "medico",  // Ajuste conforme seu formulário
        descricao_exame: relevante1,  // Ajuste conforme seu formulário
        file: base64Image,  // Envia a imagem em base64
        super_id_usuario: 1  // Ajuste conforme seu formulário
      };

      // Use o IP local no lugar de 'localhost'
      const apiURL = `${API_URL}`;

      // Enviar os dados e a imagem para o backend
      const response = await axios.post(apiURL, newItem, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        alert('Exame salvo com sucesso!');
      } else {
        alert('Erro ao salvar o exame: ' + response.data.error);
      }
    } catch (error) {
      console.error("Erro ao salvar o exame: ", error);
      alert('Erro ao salvar o exame. Verifique a conexão com o servidor.');
    }
  } else {
    alert('Por favor, preencha todos os campos obrigatórios.');
  }
};

// Função para converter imagem para base64
const convertImageToBase64 = async (uri) => {
  try {
    const base64 = await FileSystem.readAsStringAsync(uri, {
      encoding: FileSystem.EncodingType.Base64,
    });
    return base64;
  } catch (error) {
    console.error("Erro ao converter imagem para base64: ", error);
  }
};


  const renderFoto = ({ item }) => (
    <View style={styles.fotoItemContainer}>
      <TouchableOpacity onPress={() => handleFotoPress(item)} style={styles.fotoContainer}>
        <Image source={{ uri: item.uri }} style={styles.foto} />
      </TouchableOpacity>
      {/* Botão de lixeira para excluir a foto */}
      <TouchableOpacity style={styles.excluirButton} onPress={() => excluirFoto(item)}>
        <Ionicons name="trash" size={20} color="purple" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        
        <View style={styles.iconRow}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.iconButton}>
            <Ionicons name="arrow-back" size={20} color="purple" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="search-outline" size={20} color="gray" />
          </TouchableOpacity>
        </View>
        
        <Text style={styles.sectionTitle}>Adicionar um novo exame</Text>

        <Text style={styles.inputLabel}>Nome do exame</Text>
        <TextInput
          style={styles.input}
          placeholder="Ultrassonografia de crânio"
          value={nome}
          onChangeText={setNome}
        />

        <Text style={styles.inputLabel}>Tipo do exame</Text>
        <TextInput
          style={styles.input}
          placeholder="Imagem"
          value={tipo}
          onChangeText={setTipo}
        />

        <Text style={styles.inputLabel}>Data</Text>
        <TextInput
          style={styles.input}
          placeholder="23/09/2024"
          value={data}
          onChangeText={setData}
        />

        <Text style={styles.inputLabel}>Hora</Text>
        <TextInput
          style={styles.input}
          placeholder="06:30"
          value={hora}
          onChangeText={setHora}
        />

        <Text style={styles.inputLabel}>Local</Text>
        <TextInput
          style={styles.input}
          placeholder="Delboni Aureliano - Itaim Bibi"
          value={endereco}
          onChangeText={setEndereco}
          multiline
        />

        <Text style={styles.inputLabel}>Dados Relevantes</Text>
        <TextInput
          style={styles.input}
          placeholder="Informações importantes"
          value={relevante1}
          onChangeText={setRelevante1}
        />

        <Text style={styles.inputLabel}>Pedido Médico</Text>
        <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
          <Ionicons name="cloud-upload-outline" size={24} color="white" />
          <Text style={styles.uploadButtonText}>Fazer Upload</Text>
        </TouchableOpacity>

        {/* Exibir as fotos capturadas em pequenos quadrados */}
        <FlatList
          data={fotosCapturadas}
          renderItem={renderFoto}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.fotoList}
        />

        {fotoSelecionada && (
          <View style={styles.visualizacaoContainer}>
            <TouchableOpacity style={styles.fecharButton} onPress={fecharVisualizacao}>
              <Ionicons name="close-circle" size={30} color="purple" />
            </TouchableOpacity>
            <Image source={{ uri: fotoSelecionada.uri }} style={styles.fotoGrande} />
            {ocrResultado ? (
              <View style={styles.ocrContainer}>
                <Text style={styles.ocrLabel}>Texto extraído:</Text>
                <View style={styles.separator} />
                <Text style={styles.ocrText}>
                  "{ocrResultado}"
                </Text>
              </View>
            ) : null}
          </View>
        )}

        <TouchableOpacity style={styles.saveButton} onPress={salvarExame}>
          <Text style={styles.saveButtonText}>Salvar</Text>
        </TouchableOpacity>
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 100,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: -10, 
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'purple',
    marginBottom: 20,
    marginTop: 20, 
  },
  inputLabel: {
    fontSize: 14,
    color: 'purple',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    fontSize: 14,
    color: '#333',
  },
  uploadButton: {
    flexDirection: 'row',
    backgroundColor: 'purple',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  uploadButtonText: {
    color: 'white',
    marginLeft: 10,
  },
  fotoList: {
    marginBottom: 15,
  },
  fotoItemContainer: {
    marginRight: 10,
  },
  fotoContainer: {
    width: 80,
    height: 80,
    borderRadius: 10,
    overflow: 'hidden',
  },
  foto: {
    width: '100%',
    height: '100%',
  },
  excluirButton: {
    alignItems: 'center',
    marginTop: 5,
  
  },
  visualizacaoContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  fecharButton: {
    alignSelf: 'flex-end',
  },
  fotoGrande: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginBottom: 15,
  },
  ocrContainer: {
    backgroundColor: '#EDE7F6', // Um fundo leve roxo
    borderRadius: 10, // Bordas arredondadas
    padding: 15, // Espaçamento interno
    marginTop: 10, // Margem superior para separação da imagem
    alignItems: 'center', // Centralizar conteúdo
  },
  ocrLabel: {
     fontSize: 18, // Tamanho do texto do rótulo
    color: 'purple', // Cor roxa para o rótulo
    fontWeight: 'bold', // Peso da fonte em negrito
    marginBottom: 5, // Margem inferior para separar do texto extraído
  
  },
  separator: {
    height: 1, // Altura da linha
    backgroundColor: '#D1C4E9', // Cor da linha (um tom mais claro do roxo)
    marginVertical: 10, // Espaçamento vertical para separar a linha do texto
    width: '100%', // Largura total
  },
  ocrText: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  saveButton: {
    backgroundColor: 'purple',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 15,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
