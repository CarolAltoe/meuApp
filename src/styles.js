import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  sav:{
    flex: 1,
    borderWidth: 10,
    borderColor: '#DCA415'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  titulo: {
    color: '#FF0000',
    fontSize: 24,
    textAlign: 'center',
  },
  subtitulo: {
    color: '#B0B5BC',
    fontSize: 18,
    textAlign: 'center',
  },
  fundo: {
    backgroundColor: 'pink',
  },
  card: {
    backgroundColor: '#B0B5BC',
    margin: 4,
    padding: 4,
  },
  nome: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  preco: {
    fontSize: 12,
    color: 'blue',
  },
  descricao: {
    fontSize: 12,
  },
});