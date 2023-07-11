import theme from "../../theme/theme";
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';
import { HeadbarUser } from "../../PruebaComponents/Headbar";
import { UserCard } from '../../PruebaComponents/UserCard';
import { ButtonBotUser } from '../../PruebaComponents/ButtonBot';
import { Button } from '@rneui/themed'
import Icon from 'react-native-vector-icons/FontAwesome';

export const UserScreen = () => {
    return (
        <View style={styles.container}>
            <HeadbarUser />
            <View style={styles.body}>
                <View style={styles.text}>
                    <Text style={{ fontSize: 23 }}>Perfil</Text>
                </View>
                <View style={styles.UserCard}>
                    <UserCard />
                </View>

                <View style={styles.text}>
                    <Text style={{ fontSize: 17 }}>Mas Opciones</Text>
                </View>

                <View style={styles.button}>
                    <ButtonBotUser />
                </View>

                <View style={styles.logOut}>
                    <Button buttonStyle={styles.buttonBot}>
                        Cerrar Sesion
                    </Button>
                </View>


            </View>




        </View>)
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.whiteSegunda,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        paddingTop: theme.separation.headSeparation,
    },
    body: {
        flex: 2,
        paddingHorizontal: theme.separation.horizontalSeparation,
    },
    text: {
        flexDirection: 'row',
        flex: 0.1,
        alignItems: 'center',
        paddingHorizontal: theme.separation.horizontalSeparation,
        alignItems: 'flex-end',

    },
    UserCard: {
        flex: 0.3,
    },
    button: {
        flex: 0.4,
    },
    buttonBot: {
        backgroundColor: '#F25B0C',
        borderRadius: 5,
        width: 200,
    },
    logOut:{
        alignItems: 'center',
    },

});