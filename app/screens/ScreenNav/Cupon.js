import theme from "../../theme/theme";
import ImagenImport from "../../theme/Images";
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';
import { HeadbarCanje } from "../../PruebaComponents/Headbar";


export const CuponScreen  = () =>{
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
            <View style={styles.centrado}>
                    <Text style={styles.tipoLetra}>Ingresa el código proporcionado en nuestro restaurante:</Text>
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
    }
});