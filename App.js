import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cabecalho from './src/components/cabecalho';
import Botao from './src/Components/botao';

export default function App() {
  return (
    <view>
      <Cabecalho />
      <Botao 
      Logo= "md-game-controller"
      texto="Jogos"
      cor="black"
      />
    </view>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

