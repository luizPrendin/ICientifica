import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Content() {
  // Estado para os números aleatórios entre 00 e 99
  const [numbers, setNumbers] = useState(generateRandomNumbers());
  // Estado para o tempo
  const [timeLeft, setTimeLeft] = useState(80);  // 300 segundos (5 minutos)

  // Função para gerar números aleatórios de 00 a 99
  function generateRandomNumbers() {
    let randomNumbers = [];
    for (let i = 0; i < 5; i++) {
      randomNumbers.push(Math.floor(Math.random() * 99));  // Números entre 00 e 99
    }
    return randomNumbers;
  }

  // Função para resetar o temporizador e gerar novos números
  const resetTimer = () => {
    setTimeLeft(80);  // Reinicia para 5 minutos (300 segundos)
    setNumbers(generateRandomNumbers());  // Gera novos números
  };

  // useEffect para o contador
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;  // Decrementa o tempo
        } else {
          // Quando o tempo chega a 0, reinicia o contador e sorteia novos números
          setNumbers(generateRandomNumbers());
          return 80;  // Reinicia para 5 minutos (300 segundos)
        }
      });
    }, 1000);  // Intervalo de 1 segundo

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(interval);
  }, []);

  // Função para formatar o tempo no formato "m:ss"
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}m ${secs < 10 ? '0' : ''}${secs}seg`;
  }

  return (
    <View style={styles.container}>
      {/* Título com o contador e ícone de reload */}
      <View style={styles.titleContainer}>
        <Text style={styles.infoTitle}>Autorização de acesso</Text>
        <View style={styles.timerContainer}>
          <Text style={styles.timer}>{formatTime(timeLeft)}</Text>
          <TouchableOpacity onPress={resetTimer}>
            <Image source={require('../assets/refresh.png')} style={styles.reloadIcon} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.horizontalLine}></View>

      {/* Caixas com números aleatórios */}
      <View style={styles.numbersContainer}>
        {numbers.map((number, index) => (
          <View key={index} style={styles.numberBox}>
            <Text style={styles.numberText}>
              {number < 10 ? `0${number}` : number} {/* Garante 2 dígitos */}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    paddingBottom: 10,  // Adiciona padding inferior para evitar o corte pelo footer

  },
  titleContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoTitle: {
    fontSize: 16,
    color: '#A9A9A9',
  },
  timerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timer: {
    fontSize: 14,
    color: '#6533A1',
    marginRight: 10,
  },
  reloadIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  horizontalLine: {
    width: '80%',
    height: 1,
    backgroundColor: '#A9A9A9',
    marginVertical: 10,
  },
  numbersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  numberBox: {
    backgroundColor: '#AF97CF',  // Fundo lilás
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  numberText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
    lineHeight: 50,  // Garante que o texto fique verticalmente alinhado
  },
});
