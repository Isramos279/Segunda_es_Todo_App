
import { StyleSheet, Text, View, Image, Animated, Dimensions } from 'react-native';
import CardImg from '../../assets/card.jpg'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card } from '@rneui/themed'

export const CardHome = () => {

    let screen = Dimensions.get('window');
    let width = screen.width;
    let height = screen.height;

    let cardHeight = height * 0.277
    let cardWidth = width * 0.44

    let imgHeight = height * 0.15
    let imgWidth = width * 0.45


    return (
        <View style={styles.container}>

            <Card containerStyle={{ width: cardWidth, height: cardHeight, borderRadius: 10 }}>
                <Card.Image
                    source={CardImg} style={{ width: imgWidth, height: imgHeight }}
                    contentFit="cover"

                />
                <Text style={styles.title}>
                    Super Bowl cerdo
                </Text>
                <Text style={styles.Descripcion}>
                    Mezcla perfecta de arroz amarillo, frejol, guacamole
                </Text>

                <View style={styles.plus}>
                    <Icon name='plus' size={24} color='#F25B0C' type='antdesing' />
                </View>


            </Card>




        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        width: 165,
        borderRadius: 5,
        
    },
    title: {
        width: 137,
        height: 20,
        flexDirection: 'column',
        color: '#000',
        fontSize: 13,
        fontStyle: 'normal',
        fontWeight: "400",

    },
    Descripcion: {
        width: 163,
        height: 28,
        flexDirection: 'column',
        color: '#9DB2CE',
        fontSize: 11,
        fontStyle: 'normal',
        fontWeight: "400",

    },
    plus: {
        
        paddingTop: 5,
        borderRadius: 100,
        alignItems:  'flex-end',
        
    },
});



