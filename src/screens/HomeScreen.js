import { Button, Text, View } from 'react-native';

export function HomeScreen({navigation}){
  return (
    <View>
      <Text>Tela Home</Text>
      <Button
        title="Ir para Tela Sobre"
        onPress={ () => navigation.navigate("About") }
      />
    </View>
  )
}