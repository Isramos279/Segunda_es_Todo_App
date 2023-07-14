import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from 'react-native';
import theme from '../theme/theme';

export const ModalAceptarPedido = ({sendModalVisible}) => {


  return (
    <View style={styles.modalView}>
        <View style={styles.header}>
            <Text style={[styles.textHeader,styles.textStyle]}>¿Está segur@ de canjear tus puntos?</Text>
        </View>
        <View style={styles.body}>
            <Text style={[styles.modalText,styles.textStyle]}>¿Está seguro de continuar?</Text>
            <Text style={[styles.modalText,styles.textStyle]}>Recuerde que una vez aceptado no podrá modificar su pedido. (No hay rembolso)</Text>
        </View>
        {/* <Pressable style={[styles.button, styles.buttonClose]}  onPress={() => sendModalVisible(false)}>
            <Text style={styles.textStyle}>Hide Modal</Text>
        </Pressable> */}
    </View>
  );
}

const styles = StyleSheet.create({
    modalView: {
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'space-between'
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
      textStyle: {
        fontFamily: theme.fonts.text
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
        color: theme.colors.blackSegunda,
      },
});