
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import logos from "../theme/logos";
import theme from '../theme/theme';

export const Headbar = () => {
    return (
        <View style={styles.headbar}>
            <View style={styles.img}>
                <Image
                    source={logos.gris}
                    style={{ width: 60, height: 50.14925384521484 }}
                />
            </View>

            <View style={styles.centrado}>
                <Icon name='bell' size={24} color='white' type='ant-design' />
            </View>

        </View>
    );
};

//Barra de Canjeo de cupones
export const HeadbarCanje = () => {
    return (
        <View style={styles.headbar}>

            <View style={styles.centrado}>
                <Icon name='arrow_back_ios' size={24} color='white' type='material' />
            </View>

            <View style={styles.centrado}>
                <Text style={styles.TextoBarra}>Código</Text>
            </View>

            <View style={styles.centrado}>
                <Icon name='shopping-bag' size={24} color='white' type='font-awesome-5' />
            </View>
        </View>
    );
};


export const HeadbarHome = () => {
    return (
        <View style={styles.headbarHome}>
            <Image
                source={logos.gris}
                style={{ width: 60, height: 50.14925384521484 }}
            />
            <Text style={styles.headText}>Hola Santiago, ¿Listo para tu cevichito?</Text>
            <View style={styles.centrado}>
                <Icon name='bell' size={24} color='#F25B0C' type='ant-design' />
            </View>
        </View>
    )
}

//User head bar
export const HeadbarUser = () => {
    return (
        <View style={styles.headbar}>

            <View style={styles.centrado}>
                <Icon name='angle-left' size={33} color='white' type='font-awesome-5' />
            </View>

            <View style={styles.centrado}>
                <Text style={styles.TextoBarra}>Usuario</Text>
            </View>

            <View style={styles.centrado}>
                <Icon name='user' size={24} color='white' type='font-awesome-5' />
            </View>
        </View>
    );
};



const styles = StyleSheet.create({
    headbar:{
        height: theme.heightBar.heightSize,
        backgroundColor: theme.colors.blackSegunda,
        paddingVertical: 10,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    centrado: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 5,
    },
    headbarHome: {
        borderColor: theme.colors.greySegunda,
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headText: {
        color: 'black',
        fontSize: 13,
        fontStyle: 'normal',
    },
    TextoBarra:{
        fontFamily: theme.fonts.text,
        color: theme.colors.whiteSegunda,
        fontSize: theme.fontSize.sizeBar,
    },
});




