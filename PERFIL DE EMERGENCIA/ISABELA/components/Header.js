import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Header() {
  return (
    <View style={styles.container}>
      {/* Degradê Roxo */}
      <LinearGradient
        colors={['#6533A1', '#F7A8FA']}
        start={[0, 0]}
        end={[1, 0]}
        style={styles.gradient}
      >
        {/* Logo no degradê */}
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </LinearGradient>

      {/* View Branca com bordas arredondadas */}
      <View style={styles.whiteContainer}>
        {/* Imagem maior (esquerda) */}
        <Image source={require('../assets/imagem_perfil_4.png')} style={styles.leftCircle} />

        {/* Nome e Sobrenome */}
        <View style={styles.nameContainer}>
          <Text style={styles.firstName}>Isabela</Text>
          <Text style={styles.lastName}>Rocha Souza</Text>
        </View>

        {/* Imagem menor (direita) */}
        <Image source={require('../assets/compartilhar.png')} style={styles.rightCircle} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    height: 150,  // Altura do degradê
    justifyContent: 'center',  // Centralizar o conteúdo
  },
  logo: {
    width: 80,  // Largura da logo
    height: 40,  // Altura da logo
    resizeMode: 'contain',  // Ajustar o tamanho da imagem para caber na view
    alignSelf: 'center',  // Centralizar horizontalmente
  },
  whiteContainer: {
    flexDirection: 'row',  // Dispor os círculos e o nome em linha
    backgroundColor: '#fff',  // Fundo branco
    alignItems: 'center',  // Centralizar verticalmente os itens
    paddingVertical: 25,  // Espaçamento interno vertical
    borderTopLeftRadius: 45,  // Bordas arredondadas apenas no topo
    borderTopRightRadius: 45,
    paddingHorizontal: 30,  // Espaçamento horizontal
    position: 'relative',
    top: -40,  // Puxar para cima para sobrepor o degradê
  },
  leftCircle: {
    width: 60,  // Largura da imagem maior (perfil)
    height: 60,  // Altura da imagem maior
    borderRadius: 30,  // Deixar a imagem circular
    resizeMode: 'cover',  // Ajuste da imagem para cobrir a área sem deformar
  },
  rightCircle: {
    width: 30,  // Ajuste a largura para maior espaço
    height: 30,  // Ajuste a altura para maior espaço
    resizeMode: 'contain',  // Garantir que a imagem não seja cortada
    marginLeft: 'auto',  // Empurrar o círculo para o lado direito
  },
  nameContainer: {
    marginLeft: 10,  // Espaçamento entre o círculo e o nome
  },
  firstName: {
    fontSize: 22,  // Tamanho maior para o primeiro nome
    fontWeight: 'bold',
    color: '#6433A2',  // Cor roxa para o texto
  },
  lastName: {
    fontSize: 18,  // Tamanho menor para o sobrenome
    fontWeight: 'bold',
    color: '#6433A2',
  },
});
