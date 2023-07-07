
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Button } from '@rneui/themed'
import Icon from 'react-native-vector-icons/FontAwesome';
import Game from '../../img/Game.png'
import Dices from '../../img/Dices.png'




export const ButtonBot = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => console.log('Botón presionado')} style={styles.Button}>
                <Text style={styles.text}>Juegos</Text>
                <Image source={Game} style={styles.img} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Botón presionado')} style={styles.Button}>
                <Text style={styles.text}>Predicciones</Text>
                <Image source={Dices} style={styles.img} />
            </TouchableOpacity>
        </View>

    )
}


const styles = StyleSheet.create({

    Button: {

        backgroundColor: '#2E2E2E',
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
        width: 165,
        height: 48,
        justifyContent: 'space-between'

    },
    text: {
        color: 'white',

    },
    container: {
        flexDirection: 'row',

    },
    img: {
        width: 40,
        height: 40,

        
    },
});
