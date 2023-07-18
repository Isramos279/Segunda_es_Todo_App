import { StyleSheet, Text, View, Modal, TouchableWithoutFeedback} from 'react-native';
import { Button } from "@rneui/themed";
import { TextInput } from "react-native-paper";
import theme from '../../theme/theme';
import Icon from 'react-native-vector-icons/FontAwesome';


export const ModalGrupos = ({sendModalVisible, modalCrearGrupo, sendNombreGrupo, nombreGrupo, sendPressButton, sendModalShareVisible, modalShareGroup}) =>{
    return(
        <View>
            <Modal
                animationType="none"
                transparent={true}
                visible={modalCrearGrupo}
                onRequestClose={() => {sendModalVisible(!modalCrearGrupo);}}
            >
                <TouchableWithoutFeedback onPress={() => sendModalVisible(!modalCrearGrupo)}>
                    <View style={styles.centeredView}>
                        <ModalCreateGroup 
                        sendModalVisible={sendModalVisible} 
                        sendNombreGrupo={sendNombreGrupo} 
                        nombreGrupo={nombreGrupo}
                        sendPressButton={sendPressButton}
                        />
                    </View>
                </TouchableWithoutFeedback> 
            </Modal>

            <Modal
                animationType="none"
                transparent={true}
                visible={modalShareGroup}
                onRequestClose={() => {sendModalShareVisible(!modalShareGroup);}}
            >
                <TouchableWithoutFeedback onPress={() => sendModalShareVisible(!modalShareGroup)}>
                    <View style={styles.centeredView}>
                        <ModalShareGroup  sendModalVisible={sendModalShareVisible} />
                    </View>
                </TouchableWithoutFeedback> 
            </Modal>
        </View>
    )
}

export const ModalCreateGroup   = ({sendModalVisible, sendNombreGrupo, nombreGrupo, sendPressButton}) => {
    return (
        <View style={styles.modalView}>
        
            <View style={styles.header}>
                <Text style={[styles.textHeader,styles.textStyle]}>Ingresa el nombre del grupo:</Text>
            </View>

            <TextInput  
                label="Nombre del grupo"
                value={nombreGrupo}
                onChangeText={sendNombreGrupo}
                mode="outlined"
                style={styles.entradaNombre}
                outlineStyle={styles.marcoEntradaCodigo}
            />

            <View style={styles.buttons}>
                <Button
                title='Siguiente'
                titleStyle={styles.tittleButton}
                buttonStyle={[styles.buttonStyleCreateGroup,{backgroundColor: theme.colors.orangeSegunda}]}
                onPress={()=>{
                    sendModalVisible(false)
                    sendPressButton(true)
                }}
                />
            </View>
            
        </View>
    );
}

export const ModalShareGroup   = ({sendModalVisible}) => {
    return (
        <View style={styles.modalView}>
        
            <View style={styles.header}>
                <Text style={[styles.textHeader,styles.textStyle]}>Ingresa el nombre del grupo:</Text>
            </View>

            <View style={styles.body}>
                <Text style={[styles.modalText,styles.textStyle]}>Invita a tus panas por whatsapp o copia el código y reenvialo.</Text>

                <View style={styles.shareCodigo}>
                    <View style={styles.codigo}>
                        <Text style={[styles.textStyle,styles.codigoText]}> SAKDJO1289SJD</Text>
                    </View>
                    <View style={styles.copyIcon}>
                        <Icon name='copy' size={24} type='antdesing' color="black"/>
                    </View>
                </View>

                <View style={styles.ShareIcon}>
                        <Icon name='whatsapp' size={70} type='antdesing' color="green"/>
                </View>

            </View>

            <View style={styles.buttons}>
                <Button
                title='Listo'
                titleStyle={styles.tittleButton}
                buttonStyle={[styles.buttonStyleCreateGroup,{backgroundColor: theme.colors.orangeSegunda}]}
                onPress={()=>{
                    sendModalVisible(false)
                }}
                />
            </View>
            
        </View>
    );
}


const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0, 0.3)'
      },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'space-between',
        width: theme.ViewSize.width,
      },
      header: {
        alignItems: 'center',
        backgroundColor: theme.colors.blackSegunda,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,
      },
      textHeader:{
        fontSize: 18,
        color: theme.colors.whiteSegunda
      },
      body:{
        paddingTop: 10,
      },
      textStyle: {
        fontFamily: theme.fonts.text
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
        color: theme.colors.blackSegunda,
        paddingHorizontal: 30,  
      },
      buttons:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingBottom: 15,
      },
      tittleButton:{
        fontSize: theme.fontSize.modalButtons,
        fontFamily: theme.fonts.text,
      },

      //Modal Crear Grupo:
      entradaNombre:{
        marginHorizontal: 35,
        marginTop: 20,
        height: 35
      },
      buttonStyleCreateGroup:{
        borderRadius: 10,
        marginTop: 25,
        width: 130,
      },
      marcoEntradaCodigo:{
        borderRadius: 10,
        borderColor:theme.colors.greySegunda,
    },
    //ShareGroup:
    shareCodigo:{
        flexDirection: 'row',
        paddingHorizontal: 15,
    },
    codigo:{
        flex: 4,
        backgroundColor:theme.colors.greySegunda,
        borderRadius: 5,
        height: 30,
        justifyContent: 'center'
    },
    codigoText:{
        fontSize: theme.fontSize.body,
        paddingLeft: 3,
    },
    copyIcon:{
        flex: 1,
        alignItems: 'center'
    },
    ShareIcon:{
        marginTop: 20,
        alignItems: 'center',
    },
});