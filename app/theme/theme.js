import {Dimensions } from 'react-native';
let screen = Dimensions.get('window');
let widthScreen = screen.width;
let heightScreen = screen.height;

const theme = {
  colors: {
    blackSegunda: "#2E2E2E",
    whiteSegunda: "#F8F8F8",
    orangeSegunda: "#F25B0C",
    redSegunda: "#F32409",
    greySegunda: "#DEDEDE",
    naranjaDegradadoSegunda: "linear-gradient(180deg, #FD5100 0%, #FEC20C 100%)",
  },
  fontSize: {
    body: 16,
    title: 40,
    subtitle: 25,
  },
  fonts: {
    main: "System",
    textItalic: "Lato_400Regular_Italic",
    text: "Lato_400Regular",
  },
  fontWeight: {
    bold: "700",
    bolder: "900",
    normal: "normal",
  },
  separation:{
    headSeparation : heightScreen * 0.03,
    horizontalSeparation : widthScreen * 0.035,
  }
};
export default theme;
