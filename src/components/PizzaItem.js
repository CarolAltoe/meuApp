import { Pressable, Text } from 'react-native';
import { styles } from '../styles';

export function PizzaItem({nome, preco, onPress}) {
    return (
        <Pressable 
            onPress={onPress}
            style={styles.card}
        >
            <Text> {nome} -- {preco} </Text>
        </Pressable>
    );
}