import { useState } from "react";
import theme from "../../theme/theme";
import ImagenImport from "../../theme/Images";
import { Button } from "@rneui/base";
import { StyleSheet, Text, View, Image} from 'react-native';
import { HeadbarCar } from "../../PruebaComponents/Headbar";
import { MostrarProducto } from "../../Components/Products/CarProducts";

export const CarScreen  = () =>{
    const [codigo, setCodigo] = useState();
    return( 
    <View style={styles.container}>
        {/* Encabezado */}
        <HeadbarCar/>

        {/* Body's Screen */}
        <View style={styles.body}>

            <View>
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
                
                <MostrarProducto/>

            </View>

            <View>
                {/* Botones*/}
                <View style={styles.centrado}>
                    <Button
                        title="Canjear"
                        buttonStyle={[styles.botones,{backgroundColor: theme.colors.blackSegunda}]}
                        containerStyle={{
                            paddingTop: 40,
                            fontFamily: theme.fonts.text,
                        }}
                    />
                    <Button
                        title="Cancelar"
                        buttonStyle={[styles.botones,{backgroundColor: theme.colors.orangeSegunda}]}
                        containerStyle={{
                            paddingTop: 20,
                            fontFamily: theme.fonts.text,
                        }}
                    />
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
    botones:{
        width: theme.screenSize.width-(theme.separation.horizontalSeparation*4),
        borderRadius: 8,
    },
});