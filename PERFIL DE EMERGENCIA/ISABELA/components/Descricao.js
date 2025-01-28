import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Content() {
  return (
    <View style={styles.container}>

      <View style={styles.infoBlock}>
        <Text style={styles.infoTitle}>Descrição</Text>
        <View style={styles.horizontalLine}></View>
        <View style={styles.descriptionBox}>
          <Text style={styles.descriptionText}>
 Isabela é uma bebê de 1 ano cheia de energia e curiosidade. Ela está em acompanhamento pediátrico regular e seus pais seguem à risca as recomendações médicas para garantir um desenvolvimento saudável. Isabela está na fase de introdução alimentar, onde experimenta novos alimentos de forma gradual e supervisionada. Seus pais têm especial atenção à variedade e qualidade dos alimentos, para garantir que ela receba todos os nutrientes necessários para o seu crescimento.{"\n"}
{"\n"}
Até o momento, Isabela não apresentou nenhuma alergia alimentar ou de outro tipo. Para fortalecer sua imunidade e auxiliar no desenvolvimento de ossos e dentes saudáveis, ela toma diariamente um suplemento de vitamina D, conforme a prescrição pediátrica. Ela se desenvolve conforme o esperado para sua idade, tanto física quanto cognitivamente, demonstrando curiosidade e interesse em tudo ao seu redor.{"\n"}
{"\n"}
Sua rotina de sono é bem estabelecida, com sonecas regulares durante o dia e um período contínuo de sono à noite. Isabela também começou a dar seus primeiros passos, o que tem trazido muita alegria para a família. Seus pais seguem com cuidado todas as orientações de vacinação, que estão em dia, e evitam expô-la a ambientes com muitas pessoas para prevenir infecções, principalmente em épocas de alta circulação de vírus.{"\n"}
{"\n"}
Além disso, Isabela adora brinquedos interativos e atividades que envolvem cores e sons, o que está contribuindo para seu desenvolvimento cognitivo e motor. Sua socialização com outras crianças e adultos também é incentivada dentro de um ambiente seguro e controlado.
          </Text>
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
  descriptionBox: {
    backgroundColor: '#F5F5F5',  // Fundo cinza claro
    padding: 15,  // Espaçamento interno
    borderRadius: 10,  // Bordas arredondadas
  },
  descriptionText: {
    fontSize: 14,  // Tamanho do texto dentro da descrição
    color: '#333',  // Texto cinza escuro
    textAlign: 'left',  // Alinhar o texto à esquerda
  },
});
