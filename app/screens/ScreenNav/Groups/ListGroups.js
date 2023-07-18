
import { StyleSheet, Text, View,ScrollView, Modal, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { HeadbarGroup } from '../../../PruebaComponents/Headbar'
import theme from "../../../theme/theme";
import { useState, useEffect } from "react";
import { GroupCard } from '../../../PruebaComponents/GroupCard';
import { Button } from '@rneui/themed';
import {ModalGrupos } from '../../../Components/Groups/ModalsGroups';

export const ListGroups = ({ navigation }) => {
    const [modalCrearGrupo, setModalCrearGrupo] = useState(false);
    const [modalShareGroup, setModalShareGroup] = useState(false);
    const [nombreGrupo, setNombreGrupo] = useState(false);


    const ReceiveModalCrearGrupo = (modalCrearGrupo) => {
        setModalCrearGrupo(modalCrearGrupo);
      };

      const ReciveNombreGrupo =(nombreGrupo) =>{
        setNombreGrupo(nombreGrupo)
      }
      
      const ReciveModalShareGroup =(modalShareGroup) =>{
        setModalShareGroup(modalShareGroup)
      }

      

      return (
        <View style={styles.container}>

            <ModalGrupos
                sendModalVisible={ReceiveModalCrearGrupo} 
                sendNombreGrupo={ReciveNombreGrupo} 
                nombreGrupo={nombreGrupo}
                sendPressButton={ReciveModalShareGroup}
                modalCrearGrupo={modalCrearGrupo}
                sendModalShareVisible={ReciveModalShareGroup}
                modalShareGroup={modalShareGroup}
            />

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
                    <TouchableOpacity onPress={()=>{navigation.navigate("Groups")}}>
                        <GroupCard />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <GroupCard />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <GroupCard />
                    </TouchableOpacity>
                </ScrollView>

                <View style={styles.ButtonContainer}>
                    <Button color={theme.colors.blackSegunda} buttonStyle={styles.button} onPress={()=>{setModalCrearGrupo(true)}}>Crear grupo Nuevo</Button>
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



