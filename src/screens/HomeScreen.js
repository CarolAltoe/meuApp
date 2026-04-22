import { Button, FlatList, Text, View } from 'react-native';
import { PizzaItem } from '../components/PizzaItem';
import pizzas from '../data/dados';

export function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Tela Home</Text>
      <FlatList
        data={pizzas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PizzaItem
            nome={item.nome}
            preco={item.preco}
            onPress={ () =>
          navigation.navigate("Detail", {pizza: item}) }
          />
        )}
      />

      <Button
        title="Ir para Tela Sobre"
        onPress={() => navigation.navigate("About")}
      />
    </View>
  )
}