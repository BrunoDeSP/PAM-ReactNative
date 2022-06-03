import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Cabecalho from './src/components/Cabecalho';
import Botao from './src/components/Botao';
import Jogos from './src/components/Jogos';
import Lancamentos from './src/components/Lancamentos';
import Dados from './src/Dados/jogos';
import DadosLancamento from './src/Dados/lancamentos';

export default function App() {
  return (
    <view>
      <Cabecalho />
      <Botao 
      Logo= "md-game-controller"
      texto="JOGOS"
      cor="black"

      Logo2= "md-game-controller"
      texto2="FILMES"
      cor2="red"

      />

<Botao 
      Logo= "md-game-controller"
      texto="MUSICA"
      cor="blue"

      Logo2= "md-game-controller"
      texto2="LIVROS"
      cor2="yellow"

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

    <FlatList
      horizontal={true}
      data = {DadosLancamento}
      keyExtractor = {(item) => item.id}
      renderItem = {({ item }) => (

      <Lancamentos
      titulo = {item.nome}
      imagem = {item.imagem}
      dataLancamento = {item.dataLancamento}

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

