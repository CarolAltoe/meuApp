import { Image, Pressable, Text, View } from 'react-native';
import { styles } from '../styles';

export function PizzaItem({pizza, onPress}) {
    return (
        <Pressable 
            onPress={onPress}
            style={styles.card}
        >
            <View style={styles.pizzaItem}>
                <Text style={styles.nome}>Nome: {pizza.nome} </Text>
                <Text style={styles.preco}>Valor: {pizza.preco} </Text>

                <Image 
                    source={require('../../assets/images/favicon.png')}
                />
            </View>

        </Pressable>
    );
}