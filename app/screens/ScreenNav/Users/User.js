import theme from "../../../theme/theme";
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import { HeadbarUser } from "../../../PruebaComponents/Headbar";
import { ButtonBotUser } from '../../../PruebaComponents/ButtonBot';
import { Button } from '@rneui/themed'
import Icon from 'react-native-vector-icons/FontAwesome';
import Cover from '../../../../assets/imgEjemplos/cover.png';
import User1 from '../../../../assets/imgEjemplos/user1.png';
import Beer from '../../../../assets/imgEjemplos/Beer.png';
import { UsersPoints } from '../../../Components/User/UserData';


let screen = Dimensions.get('window');
let width = screen.width;
let height = screen.height;

let imgWith = width;
let imgHeight = height * 0.2;


export const UserScreen = () => {
    return (
        <View style={styles.container}>
            <HeadbarUser />

            <View style={styles.body}>

                <ImageBackground
                    style={styles.imgCoverContainer}
                    source={Cover}
                >
                    <View>
                        <UsersPoints paddVert={6}/>
                    </View>
                </ImageBackground>


                <View style={styles.body}>
                    <View style={styles.imgUserContainer}>
                        <Image
                            source={User1}
                            style={styles.imgUser}
                        />
                        <Image
                            source={Beer}
                            style={{
                                position: 'absolute',
                                top: 35,
                                left: 90,
                                width: 66,
                                height: 68,

                            }}
                        />

                        <TouchableOpacity style={styles.buttonEdit}>
                            <Text style={{ fontSize: 15, fontFamily: theme.fonts.text }}>Editar Perfil</Text>
                        </TouchableOpacity>




                    </View>


                    <View style={styles.text}>
                        <Text style={{ fontSize: 24, fontFamily: theme.fonts.text }}>Santiago Mosquera</Text>

                        <View style={styles.TextContainer}>
                            <Icon name='envelope' size={22} color={theme.colors.greySegunda} type='font-awesome-5' />
                            <Text style={{ color: theme.colors.greySegunda, paddingLeft: 10 }}>santi@gmail.com</Text>
                        </View>

                        <View style={styles.TextContainer}>
                            <Icon name='envelope' size={22} color={theme.colors.greySegunda} type='font-awesome-5' />
                            <Text style={{ color: theme.colors.greySegunda, paddingLeft: 10 }}>01/01/2000</Text>
                        </View>

                        <View style={styles.TextContainer}>
                            <Icon name='phone' size={22} color={theme.colors.greySegunda} type='ionicon' />
                            <Text style={{ color: theme.colors.greySegunda, paddingLeft: 10 }}>0983013858</Text>
                        </View>
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

            </View>

        </View>)
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        paddingTop: theme.separation.headSeparation,
    },
    body: {
        flex: 2,

    },
    header: {

    },
    UserCard: {
        flex: 0.3,
    },
    button: {
        flex: 0.7,
        paddingTop: 20,
    },
    buttonBot: {
        backgroundColor: '#F25B0C',
        borderRadius: 5,
        width: 200,
    },
    logOut: {
        flex: 0.3,
        alignItems: 'center',
    },
    imgCover: {

        width: imgWith,
        height: imgHeight,
    },
    imgUser: {

        width: 100,
        height: 100,
        borderRadius: 100,
        borderWidth: 5,
        borderColor: theme.colors.blackSegunda,
    },
    imgCoverContainer: {
        flex: 0.3,
        padding: 10,
        width: imgWith,
        height: imgHeight,
        alignItems: 'flex-end',

    },
    imgUserContainer: {
        paddingLeft: theme.separation.horizontalSeparation,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        paddingLeft: theme.separation.horizontalSeparation,
        paddingTop: theme.separation.headSeparation - 10,
    },
    TextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonEdit: {
        margin: 10,
        marginTop: 60,
        horizontalSeparation: theme.separation.horizontalSeparation,
        paddingHorizontal: 25,
        paddingVertical: 5,
        borderLeftWidth: 1,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        backgroundColor: 'white',
        borderColor: theme.colors.greylow,
        borderRadius: 10,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 7,
    },

});