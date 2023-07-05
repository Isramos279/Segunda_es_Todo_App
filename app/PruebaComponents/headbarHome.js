
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const HeadbarHome = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headbar}>
                <View style={styles.img}>
                    <Image
                        source={require('../../img/Logo.png')}
                        style={{ width: 60, height: 50.149253845214844 }}
                    />
                </View>

                <View style={styles.icon}>
                    <Icon name='bell' size={24} color='white' type='ant-design' />
                </View>

            </View>
        </View>
    );
};



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
        
    },
});




