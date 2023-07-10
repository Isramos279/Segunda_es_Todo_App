import theme from "../../theme/theme";
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';
import { HeadbarCanje } from "../../PruebaComponents/Headbar";

export const CuponScreen  = () =>{
    return( 
    <View style={styles.container}>
        <HeadbarCanje/>
        <View style={styles.body}>
            <Text>Prueba cupones</Text>
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
        flex: 0.4,
        justifyContent: 'flex-start',
        paddingHorizontal: theme.separation.horizontalSeparation,
    },
    head: {
        flex: 0.4,
        justifyContent: 'flex-start',
        paddingTop: theme.separation.headSeparation,
      },
});