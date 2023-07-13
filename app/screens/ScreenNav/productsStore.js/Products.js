import { useState, useEffect } from "react";
import theme from "../../../theme/theme";
import ImagenImport from "../../../theme/Images";
import { StyleSheet, Text, View, Image, FlatList, ScrollView} from 'react-native';
import { HeadbarCar } from "../../../PruebaComponents/Headbar";
import { MostrarProducto } from "../../../Components/Products/CarProducts";
import { consultarTest } from "../../../Services/ProductosSrv";


export const ProductsScreen = () =>{
    const [productos,setProductos]=useState([])

    useEffect(()=>{
        recuperarProductosLunchs();
    },[]);

    const recuperarProductosLunchs=()=>{
        consultarTest(setProductos);
    }
    const recuperarProductosDrinks=()=>{
        consultarTest(setProductos);
    }
    const recuperarProductosGifts=()=>{
        consultarTest(setProductos);
    }

    return( 
    <View style={styles.container}>
        {/* Encabezado */}
        <HeadbarCar/>

        {/* Body's Screen */}
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
    listProducts:{
        flex: 3,
        marginTop: 12,
    },
    footer:{
        flex: 1.4,
    },
});