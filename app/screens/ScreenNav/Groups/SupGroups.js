
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { HeadbarGroup } from '../../../PruebaComponents/Headbar'
import theme from "../../../theme/theme";
import Beer from '../../../../assets/imgEjemplos/Beer.png'

let screen = Dimensions.get('window');
let width = screen.width;
let height = screen.height;

let imgWith = width * 0.5;
let imgHeight = height * 0.25;


export const SupGroups = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <HeadbarGroup />
            </View>

            <View style={styles.body}>



                <Text style={{ fontSize: 25, width: width*0.5,   }}>Unete con tus panas y Gana!</Text>

                <Image
                    source={Beer}
                    style={{ height: imgHeight, width: imgWith }}
                />

                <Text>Tus puntos: </Text>

            </View>

        </View>

    );
}




const styles = StyleSheet.create({
    container: {
        flex: 3,
        backgroundColor: theme.colors.whiteSegunda,
        dColor: "gray",

    },
    head: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: theme.separation.headSeparation,
    },
    body: {
        flex: 1,
        alignItems: 'center',

    },

});



