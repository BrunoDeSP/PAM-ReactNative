import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Cabecalho from './src/components/Cabecalho';
import Botao from './src/components/Botao';
import Jogos from './src/components/Jogos';
import Dados from './src/Dados/jogos';

export default function App() {
  return (
    <view>
      <Cabecalho />
      <Botao 
      Logo= "md-game-controller"
      texto="Jogos"
      cor="black"
      />

      <FlatList
      horizontal={true}
      data = {Dados}
      keyExtractor = {(item) => item.id}
      renderItem = {({ item }) => (

      <Jogos 
      titulo = {item.nome}
      imagem = {item.imagem}
      valor = {item.valor}

      />
      )}
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

