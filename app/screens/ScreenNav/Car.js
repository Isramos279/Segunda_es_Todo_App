import { useState, useEffect } from "react";
import theme from "../../theme/theme";
import ImagenImport from "../../theme/Images";
import { Button } from "@rneui/themed";
import { StyleSheet, Text, View, Image, FlatList, ScrollView, Modal, Pressable, Alert, TouchableWithoutFeedback} from 'react-native';
import { HeadbarCar } from "../../PruebaComponents/Headbar";
import { MostrarProducto } from "../../Components/Products/CarProducts";
import { consultarTest } from "../../Services/ProductosSrv";
import LinearGradient from "react-native-linear-gradient";
import { ModalAceptarPedido, ModalEliminarPedido } from "../../Components/Modals";
import { UsersPoints } from "../../Components/User/UserData";

export const CarScreen  = ({navigation}) =>{
    const [productos,setProductos]=useState([])
    const [modalCanjearVisible, setModalCanjearVisible] = useState(false);
    const [modalCancelarVisible, setModalCancelarVisible] = useState(false);
    

    useEffect(()=>{
        recuperarProductos();
    },[]);

    const recuperarProductos=()=>{
        consultarTest(setProductos);
    }

    const ReceiveModalStateCanjear = (modalCanjearVisible) => {
        setModalCanjearVisible(modalCanjearVisible);
      };

      const ReceiveModalStateCancelar = (modalCanjearVisible) => {
        setModalCancelarVisible(modalCanjearVisible);
      };

    return( 
    <View style={styles.container}>
        {/* Encabezado */}
        <HeadbarCar/>
            
        <Modal
            animationType="none"
            transparent={true}
            visible={modalCanjearVisible}
            onRequestClose={() => {setModalCanjearVisible(!modalCanjearVisible);}}
        >
            <TouchableWithoutFeedback onPress={() => setModalCanjearVisible(!modalCanjearVisible)}>
                <View style={[styles.centeredView, { backgroundColor: 'rgba(0,0,0, 0.3)' }]}>
                    <ModalAceptarPedido sendModalVisible={ReceiveModalStateCanjear}/>
                </View>
            </TouchableWithoutFeedback>

        </Modal>

        <Modal
            animationType="none"
            transparent={true}
            visible={modalCancelarVisible}
            onRequestClose={() => {setModalCancelarVisible(!modalCancelarVisible);}}
        >
            <TouchableWithoutFeedback onPress={() => setModalCancelarVisible(!modalCancelarVisible)}>
                <View style={[styles.centeredView, { backgroundColor: 'rgba(0,0,0, 0.3)' }]}>
                    <ModalEliminarPedido sendModalVisible={ReceiveModalStateCancelar}/>
                </View>
            </TouchableWithoutFeedback>

        </Modal>

        {/* Body's Screen */}
        <View style={styles.body}>

            {/* Mostrar Puntos  */}
            <View style={styles.mostrarPuntos}>
                <View style={styles.centrado}>
                    <Text style={styles.tipoLetra}>Tus puntos:</Text>
                </View>
                <UsersPoints />
            </View>

            {/* Screen Button after show the points */}
            <View style={{flex: 1}}>

                {/* Product's Car buy */}
                <View style={styles.listProducts}>
                        <FlatList
                            data={productos}
                            renderItem={({item})=><MostrarProducto item={item} />}
                            keyExtractor={(item)=>{return item.codigo}}
                        />
                </View>

                {/* Footer of the Car Screen */}
                <View style={styles.footer}>

                    {/* Resume Productos (Add Products, total points) */}
                    <View style={styles.resumeProducts}>
                        <View style={styles.centrado}>
                            <Button
                                title="Más Productos"
                                buttonStyle={[styles.buttonMoreProducts]}
                                onPress= {()=>{ navigation.navigate("Products")}}
                                titleStyle={styles.tipoLetraButtons}
                            />
                        </View>
                        
                        <View style={styles.centrado}>
                            <Text style={styles.tipoLetra}>Total: 225 pts</Text>
                        </View>
                        

                    </View>

                    {/* Botones*/}
                    <View style={styles.centrado}>
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={['#FD5100', '#FEC20C']} style={[styles.botones,{marginTop:20}]}>
                            <Button
                                title="Canjear"
                                onPress={()=>{setModalCanjearVisible(true)}}
                                buttonStyle={[styles.botones,{backgroundColor: "transparent"}]}
                                titleStyle={styles.tipoLetraButtons}
                            />
                        </LinearGradient>
                        <Button
                            title="Cancelar"
                            onPress={()=>{setModalCancelarVisible(true)}}
                            buttonStyle={[styles.botones,{backgroundColor: theme.colors.blackSegunda, marginTop: 10}]}
                            titleStyle={styles.tipoLetraButtons}
                        />
                    </View>
                </View>
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
        justifyContent: "space-between",
        marginTop: 10,
        marginBottom: 20,
    },
    tipoLetra:{
        fontFamily: theme.fonts.text,
        fontSize: theme.fontSize.body,
    },
    centrado: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    mostrarPuntos:{
        flexDirection: "row",
        justifyContent: "space-between",
        height: 30,
    },
    listProducts:{
        flex: 3,
        marginTop: 12,
    },
    footer:{
        flex: 1.4,
    },
    resumeProducts:{
        flex: 1,
        borderTopColor: theme.colors.greySegunda,
        borderTopWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
        paddingTop: 5,
    },
    buttonMoreProducts:{
        backgroundColor: theme.colors.blackSegunda,
        borderRadius: 10
    },
    botones:{
        width: theme.screenSize.width-(theme.separation.horizontalSeparation*2),
        borderRadius: 8,
        height: 45
    },
    tipoLetraButtons:{
        fontFamily: theme.fonts.text,
        fontSize: theme.fontSize.carButtons,
    },

    // Modal
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
});