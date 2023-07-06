import { Dimensions } from "react-native";

const theme = {
    colors: {
        primary: 'blue',
        secondary: 'silver',
        textPrimary: '',
        textSecondary: '',
        morado: '#0B4F6C',
        jade: '#2E2C2F'
    },
    fontSize: {
        body: 16,
        title: 40,
        subtitle: 25,
    },
    fonts: {
        main: 'System'
    },
    fontWeight: {
        bold: '700',
        bolder: '900',
        normal: 'normal'
    },
     dimensions: {
        maxWidth: Dimensions.get("window").width,
        maxHeight: Dimensions.get("window").height,
      },
}
export default theme