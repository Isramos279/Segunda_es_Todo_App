
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Logo from '../../img/LogoN.png'

export const Headbar = () => {


    return (
        <View style={styles.container}>
            <View style={styles.headbar}>
                <View style={styles.img}>
                    <Image
                        source={require('../../img/LogoB.png')}
                        style={{ width: 60, height: 50.14925384521484 }}
                    />
                </View>

                <View style={styles.icon}>
                    <Icon name='bell' size={24} color='white' type='ant-design' />
                </View>

            </View>
        </View>
    );
};


export const HeadbarHome = () => {
    return (
        <View style={styles.headbarHome}>
            <Image
                source={Logo}
                style={{ width: 60, height: 50.14925384521484 }}
            />

            <Text style={styles.headText}>Hola Santiago, ¿Listo para tu cevichito?</Text>

            <View style={styles.icon}>
                <Icon name='bell' size={24} color='#F25B0C' type='ant-design' />
            </View>

        </View>

    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    root: {
        flex: 1,
        backgroundColor: '2E2E2E',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    headbar: {
        backgroundColor: '#2E2E2E',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    icon: {

        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {

        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 5,

    },
    headbarHome: {
        borderColor: '#BEBEBE',
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headText: {
        color: 'black',
        fontSize: 13,
        fontStyle: 'normal',
        


    },
});




