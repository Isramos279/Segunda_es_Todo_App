import { useState } from "react";
import theme from "../../theme/theme";
import ImagenImport from "../../theme/Images";
import { Button } from "@rneui/base";
import { StyleSheet, Text, View, Image} from 'react-native';
import { HeadbarCanje } from "../../PruebaComponents/Headbar";
import { TextInput } from "react-native-paper";


export const CuponScreen  = () =>{
    const [codigo, setCodigo] = useState();
    return( 
    <View style={styles.container}>
        <HeadbarCanje/>
        <View style={styles.body}>
            
            {/* Mostrar Puntos  */}
            <View style={styles.mostrarPuntos}>
                <View style={styles.centrado}>
                    <Text style={styles.tipoLetra}>Tus puntos:</Text>
                </View>
                
                <View style={styles.puntos}>
                    <Image
                        source={ImagenImport.coin}
                        style={{ width: 20, height: 20 }}
                    />
                    <Text style={styles.cantidadPuntos}>200</Text>
                </View>
            </View>
            
            {/* Mensaje */}
            <View style={styles.mensaje}>
                    <Text style={styles.letraMensaje}>Ingresa el código proporcionado en nuestro restaurante:</Text>
            </View>

            {/* Entrada de texto */}
            <TextInput
                label="Digita tu código"
                value={codigo}
                onChangeText={setCodigo}
                mode="outlined"
                style={styles.entradaCodigo}
                outlineStyle={styles.marcoEntradaCodigo}
                left={
                    <TextInput.Icon
                    icon="tag-multiple-outline"
                    iconColor={theme.colors.greySegunda}
                />
                }
            />

            {/* Boton de Aceptar */}
            <View style={styles.centrado}>
                <Button
                    title="Aceptar"
                    buttonStyle={{
                        borderRadius: 8,
                        backgroundColor: theme.colors.blackSegunda,
                    }}
                    containerStyle={{
                        width: 150,
                        paddingTop: 40,
                        fontFamily: theme.fonts.text,
                    }}
                />
            </View>

            {/* Mostrar Promociones */}
            <View style={styles.promocionesBody}>
                <View style={{ position: 'absolute', top: 0, right: 0 }}>
                <Image
                    source={ImagenImport.bookmark}
                    style={{ width: 40, height: 40, transform: [{ rotate: '-35deg' }]}}
                />
                </View>
                
                <View style={styles.centrado}>
                    <Text style={styles.tipoLetra}>PROMOCIONES</Text>
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
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        height: 30,
    },
    puntos:{
        backgroundColor: theme.colors.blackSegunda,
        borderRadius: 50,
        width: 80,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-evenly",
    },
    cantidadPuntos:{
        color: theme.colors.whiteSegunda,
    },
    mensaje:{
        paddingTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    letraMensaje:{
        fontFamily: theme.fonts.text,
        fontSize: theme.fontSize.body,
        color: theme.colors.greySegunda,
        textAlign: "center",
    },
    entradaCodigo:{
        fontFamily: "Lato_400Regular_Italic",
        fontSize: theme.fontSize.body,
        backgroundColor: theme.colors.whiteSegunda,
        marginTop: 20,
    },
    marcoEntradaCodigo:{
        borderRadius: 15,
        borderColor:theme.colors.greySegunda,
    },
    promocionesBody:{
        flex: 1,
        marginVertical: 20,
        paddingTop: 10,
        backgroundColor: theme.colors.greySegunda,
    },
});