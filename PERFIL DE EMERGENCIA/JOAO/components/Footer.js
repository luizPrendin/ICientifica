import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.footer}>
      {/* Ícone de perfil */}
      <Image source={require('../assets/profile.png')} style={styles.smallIcon} />
      {/* Ícone de documento */}
      <Image source={require('../assets/documento.png')} style={styles.smallIcon} />
      {/* Ícone principal (Y) */}
      <Image source={require('../assets/Y.png')} style={styles.circleImage} />
      {/* Ícone de chave */}
      <Image source={require('../assets/chave.png')} style={styles.smallIcon} />
      {/* Ícone de menu */}
      <Image source={require('../assets/menu.png')} style={styles.smallIcon} />
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',  // Dispor os ícones em linha
    justifyContent: 'space-around',  // Distribuir uniformemente os ícones
    alignItems: 'center',  // Centralizar verticalmente dentro do footer
    backgroundColor: '#fff',  // Cor de fundo do rodapé
    height: 80,  // Altura fixa do footer
    borderTopWidth: 1,  // Linha superior fina para demarcar o rodapé
    borderTopColor: '#ccc',  // Cor da linha superior do rodapé
  },
  circleImage: {
    width: 50,  // Tamanho para o ícone principal (Y)
    height: 50,  // Tamanho para o ícone principal (Y)
    borderRadius: 25,  // Tornar o ícone circular
  },
  smallIcon: {
    width: 25,  // Tamanho dos ícones menores (perfil, documento, chave, menu)
    height: 25,  // Tamanho dos ícones menores
  },
});
