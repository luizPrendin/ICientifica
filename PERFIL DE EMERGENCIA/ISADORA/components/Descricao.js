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
Isadora Martins Oliveira, 28 anos, apresenta um histórico de saúde estável, com algumas observações importantes a serem consideradas:
Tipo Sanguíneo: AB+ (universal receptor)
Alergias: Não apresenta alergias conhecidas a medicamentos ou alimentos.
Condições Médicas: Isadora foi diagnosticada com asma leve na infância, controlada atualmente com medicação preventiva em situações de exposição a alérgenos ou climas frios. Não houve crises nos últimos dois anos.
Medicação Regular: Nenhuma medicação regular é necessária no momento. Apenas utiliza broncodilatador ocasionalmente, em casos de dificuldade respiratória.
Cirurgias: Histórico de uma cirurgia de retirada de amígdalas aos 12 anos, sem complicações posteriores.
Vacinações: Isadora mantém o calendário vacinal atualizado, incluindo as doses de reforço das vacinas contra a gripe e o COVID-19.
Atividade Física: Pratica atividades físicas regularmente, incluindo pilates e caminhadas, o que contribui para um estilo de vida saudável e controle da asma.
Recomenda-se acompanhamento médico de rotina para controle da asma e exames periódicos de saúde geral. Isadora não apresenta restrições alimentares ou de atividades, mas deve evitar locais com alta concentração de poluição atmosférica.
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
