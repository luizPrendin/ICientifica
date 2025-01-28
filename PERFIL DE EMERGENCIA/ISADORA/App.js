import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from './components/Header';  
import Footer from './components/Footer';  
import NumeroYaso from './components/NumeroYaso';  
import ConvenioMedico from './components/ConvenioMedico';  
import CartaoSUS from './components/CartaoSUS';  
import DadosGerais from './components/DadosGerais';  
import ContatoEmergencia from './components/ContatoEmergencia';  
import DocumentosEMedicos from './components/DocumentosEMedicos';  
import Descricao from './components/Descricao';  
import Token from './components/Token';  

export default function App() {
  return (
    <View style={styles.container}>
      {/* Camada 2: View branca abaixo do Header */}
      <View style={styles.headerBackground}></View>

      {/* Camada 3: Header Fixo por cima da View Branca */}
      <View style={styles.headerWrapper}>
        <Header />
      </View>

      {/* Camada 1: Conteúdo Rolável */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.numeroYasoContainer}>
          <NumeroYaso />
        </View>

        <View style={styles.section}>
          <ConvenioMedico />
        </View>

        <View style={styles.cartaoSUSContainer}>
          <CartaoSUS />
        </View>

        <View style={styles.section}>
          <DadosGerais />
        </View>

        <View style={styles.section}>
          <ContatoEmergencia />
        </View>

        <View style={styles.section}>
          <DocumentosEMedicos />
        </View>

        <View style={styles.section}>
          <Descricao />
        </View>

        <View style={styles.section}>
          <Token />
        </View>
      </ScrollView>

      {/* Footer Fixo */}
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  scrollContent: {
    paddingTop: 220,  // Espaço para o Header (150px ajustado)
    paddingBottom: 100,  // Espaço para o Footer (100px ajustado)
  },
  numeroYasoContainer: {
    marginBottom: -30,  // Ajuste de margem abaixo do NumeroYaso
  },
  cartaoSUSContainer: {
    marginBottom: -20,  // Ajuste de margem para o Cartao SUS
  },
  section: {
    marginBottom: -20,  // Margem padrão entre outros componentes
  },
  // Camada 2: View branca de fundo para o Header
  headerBackground: {
    height: 150,  // Altura do Header
    backgroundColor: '#fff',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,  // Camada inferior ao Header
  },
  // Camada 3: Header posicionado acima do fundo branco
  headerWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2,  // Camada superior
  },
});
