import { useState, useEffect } from "react";
import theme from "../../../theme/theme";
import ImagenImport from "../../../theme/Images";
import { StyleSheet, Text, View, Image, FlatList, ScrollView} from 'react-native';
import { HeadbarProductos } from "../../../PruebaComponents/Headbar";
import { ShowCategoryProduct } from "../../../Components/Products/CategoryProducts";
import { consultarTest, consultarProductosLunch} from "../../../Services/ProductosSrv";
import { ButtonCategoryProducts } from "../../../Components/Products/ButtonsStore";

export const ProductsScreen = ({navigation}) =>{
    const [productos,setProductos]=useState([])
    const [category,setCategory]=useState("")


    useEffect(()=>{
        setCategory("lunch")
    },[]);

    useEffect(()=>{
        (category === "drinks")?recuperarProductosDrinks():(category === "lunch")?recuperarProductosLunchs():recuperarProductosGifts()
    },[category]);
    
    const recuperarProductosLunchs=()=>{
        consultarProductosLunch(setProductos);
    }
    const recuperarProductosDrinks=()=>{
        consultarTest(setProductos);
    }
    const recuperarProductosGifts=()=>{
        consultarTest(setProductos);
    }

    const RecibeCategory = (category) => {
        setCategory(category);
      };

    return( 
    <View style={styles.container}>
        {/* Encabezado */}
        <HeadbarProductos navigation={navigation}/>

        {/* Body's Screen */}
        <View style={styles.body}>

            {/* Encabezado con los botones */}
            <View style={styles.header}>
                {/* Botones de Categoria */}
                <View>
                    <ButtonCategoryProducts SendCategory={RecibeCategory}/>
                </View>

                {/* Mostrar Puntos  */}
                <View style={[styles.mostrarPuntos]}>
                    <View>
                        <Text style={styles.tipoLetra}>Tus puntos:</Text>
                    </View>
                    
                    <View style={[styles.puntos]}>
                        <Image
                            source={ImagenImport.coin}
                            style={{ width: 20, height: 20 }}
                        />
                        <Text style={styles.cantidadPuntos}>200</Text>
                    </View>
                </View>
            </View>
            


            {/* Screen Button after show the points */}
            <View style={{flex: 1}}>

                {/* Product's Car buy */}
                <View style={styles.listProducts}>
                        <FlatList
                            data={productos}
                            renderItem={({item})=><ShowCategoryProduct item={item} />}
                            keyExtractor={(item)=>{return item.codigo}}
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
    header:{
        flexDirection: "row",
        justifyContent: "space-between",
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
        flexDirection: "column",
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
        marginTop: 5,
        paddingVertical: 3,
    },
    cantidadPuntos:{
        color: theme.colors.whiteSegunda,
    },
    listProducts:{
        flex: 3,
        marginTop: 35,
    },
    footer:{
        flex: 1.4,
    },
});