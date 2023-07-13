import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';
import { HeadbarHome} from '../../PruebaComponents/Headbar';
import { CardHome } from '../../PruebaComponents/CardHome';
import { Banner } from '../../PruebaComponents/Banner';
import { ButtonMore } from '../../PruebaComponents/buttonMoreHome';
import { ButtonBot } from '../../PruebaComponents/ButtonBot';
import theme from "../../theme/theme";


export const ScreenHome = () => {
  return (
    <View style={styles.container}>
      
      <View style={styles.head}>
        <HeadbarHome />
      </View>
      <View style={styles.banner}><Banner /></View>

      <View style={styles.text}>
        <Text style={styles.popular}>
          ¡Popular!
        </Text>

        <ButtonMore />

      </View>

      <ScrollView style={styles.card} horizontal>
        <CardHome />
        <CardHome />
        <CardHome />
      </ScrollView>

      <View style={styles.text}>
        <Text style={styles.popular}>
          ¡A Viciarse!
        </Text>

      </View>

      <View style={styles.buttonBot}>

        <ButtonBot />

      </View>

    </View>

  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.whiteSegunda,
    flexDirection: 'column',
    paddingHorizontal: theme.separation.horizontalSeparation,
    justifyContent: 'flex-start',
  },
  head: {
    flex: 0.3,
    justifyContent: 'flex-start',
    paddingTop: theme.separation.headSeparation,
  },
  banner: {
    flex: 0.7,
    justifyContent: 'center',

  },
  card: {
    flex: 0.6,
    flexDirection: 'row',
    paddingBottom:15,

  },
  popular: {
    fontSize: 16,
    paddingBottom: 5,
    fontWeight: 'bold',


  },
  text: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 5,
  },
  buttonBot: {
    flex: 0.5,
  }



});



