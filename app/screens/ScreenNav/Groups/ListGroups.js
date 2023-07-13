
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { HeadbarGroup } from '../../../PruebaComponents/Headbar'
import theme from "../../../theme/theme";
import { GroupCard } from '../../../PruebaComponents/GroupCard';
import { Button } from '@rneui/themed';



export const ListGroups = () => {
    return (
        <View style={styles.container}>


            <View style={styles.head}>
                <HeadbarGroup />
            </View>



            <View style={styles.body}>

                <View style={styles.Text}>
                    <Text style={{ color: '#7A7A7A', fontStyle: theme.fonts.text }}>
                        Invita a tus panas para unir sus puntos y conseguir más recompensas
                    </Text>
                </View>



                <ScrollView style={styles.card}>
                    <GroupCard />
                    <GroupCard />
                    <GroupCard />
                </ScrollView>

                <View style={styles.ButtonContainer}>
                   <Button color={theme.colors.blackSegunda} buttonStyle={styles.button} >Crear grupo Nuevo</Button>
                   <Button color={theme.colors.orangeSegunda} buttonStyle={styles.button}>Unirse a un grupo</Button>
                </View>

            </View>


        </View>

    );
}




const styles = StyleSheet.create({
    container: {

        backgroundColor: theme.colors.whiteSegunda,
        dColor: "gray",

    },
    head: {
  
        justifyContent: 'flex-start',
        paddingTop: theme.separation.headSeparation,
    },
    body: {
       
        paddingHorizontal: theme.separation.horizontalSeparation,

    },
    card: {
        flex: 0,
        backgroundColor: theme.colors.greySegunda,
        borderRadius: 10,
        height: 400,

    }, Text: {
        paddingTop: 30,
        flex: 0,
        paddingBottom: 20,
    },
    button: {
        flex: 0,
        borderRadius: 10,
        marginHorizontal: 10,
        width: 300,
        marginBottom: 5,
        height: 50,
        
    },
    ButtonContainer: {
        marginTop: 30,
    },
  


});



