import theme from "../../theme/theme";
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';
import { HeadbarUser} from "../../PruebaComponents/Headbar";
import {UserCard} from '../../PruebaComponents/UserCard';

export const UserScreen  = () =>{
    return( 
    <View style={styles.container}>
        <HeadbarUser/>
        <View style={styles.body}>
            <View style={styles.headText}>
                <Text>Perfil</Text>
            </View>


            <View>
                <UserCard/>
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
    body:{
        flex: 1,
        paddingHorizontal: theme.separation.horizontalSeparation,
    },
    headText: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center'
    },

});