
import { StyleSheet, Text, View, Image, Animated, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card } from '@rneui/themed'
import theme from '../theme/theme';
import User1 from '../../assets/imgEjemplos/user1.png'
import User2 from '../../assets/imgEjemplos/user2.png'
import User3 from '../../assets/imgEjemplos/user3.png'

let screen = Dimensions.get('window');
let width = screen.width;
let height = screen.height;

let cardHeight = height * 0.1
let cardWidth = width * 0.8



export const GroupCard = () => {
    const renderItem = ({ item }) => {
        <Item tittle={item.title} Panas={item.Panas} />
    };

    return (
        <View style={styles.container}>

            <Card containerStyle={styles.card}>

                <View style={styles.aling}>

                    <View style={{ flex: 1 }}>
                        <Text style={styles.title}>Chupiza</Text>
                        <Text style={styles.Panas}>
                            3 panas
                        </Text>
                    </View>

                    <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end' }}>
                        <Image
                            source={User1}
                            style={{ width: 35, height: 35, borderRadius: 100, }}
                        />
                        <Image
                            source={User2}
                            style={{ width: 35, height: 35, borderRadius: 100, }}
                        />
                        <Image
                            source={User3}
                            style={{ width: 35, height: 35, borderRadius: 100, }}
                        />
                    </View>

                    <View style={{justifyContent: 'center'}}>
                        <Icon name='bars' size={20} color={theme.colors.whiteSegunda}/>
                    </View>

                </View>
            </Card>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        width: 175,
        flexDirection: 'row',
    },
    card: {
        width: cardWidth,
        height: cardHeight,
        borderRadius: 10,
        backgroundColor: theme.colors.blackSegunda,

    },
    aling: {
        flexDirection: 'row',
    },
    texto: {

    },
    title: {
        color: theme.colors.whiteSegunda,
        fontFamily: theme.fonts.text,
        fontSize: 20,
    }, Panas: {
        color: theme.colors.whiteSegunda,

    },


});



