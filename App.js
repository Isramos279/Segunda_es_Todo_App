import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon, Button } from "@rneui/base";
import { StatusBar } from "expo-status-bar";
//Import de screens
import { LoginForm } from "./app/screens/LoginScreen/LoginScreen";
import { Registrar } from "./app/screens/LoginScreen/RegistrarUsuario";
import { ReseteoForm } from "./app/screens/LoginScreen/ReseteoCorreoScreen";
import { cerrarSesion, RecuperarUsuario, } from "./app/Services/AutenticacionSrv";
import { ScreenHome } from './app/screens/ScreenNav/Home';
import { CuponScreen } from "./app/screens/ScreenNav/Cupon";
import { CarScreen } from "./app/screens/ScreenNav/Car";
import { UserScreen } from './app/screens/ScreenNav/User';
import theme from "./app/theme/theme";
import { ListGroups } from './app/screens/ScreenNav/Groups/ListGroups'
import { Groups } from './app/screens/ScreenNav/Groups/Groups'
import { ProductsScreen } from "./app/screens/ScreenNav/productsStore.js/Products";
//Retorno de pedido
import { PedidoContext } from "./app/context/PedidosContext";
//Firebase
import { doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { loadConfiguration } from "./app/utils/FirebaseConfig";
//Importaciones de fuente
import { FontsLoader } from "./app/Components/FontsLoader";

const StackProducts = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();
const GroupStack = createNativeStackNavigator();
const TabBar = createBottomTabNavigator();

const BarNavigator = () => {
  return (
    <TabBar.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: theme.colors.orangeSegunda,
        tabBarInactiveTintColor: theme.colors.greySegunda,
        tabBarStyle: {
          backgroundColor: theme.colors.blackSegunda,
          height: 60,
          borderTopEndRadius: 10,
          borderTopStartRadius: 10,
          paddingBottom: 5,
        },
        tabBarHideOnKeyboard: true,
        headerShown: false,
      })}
    >
      <TabBar.Screen
        name="Menu"
        component={GroupsNavigator}
        options={{
          headerShown: false,
          title: "Menu",
          tabBarIcon: ({ color }) => {
            return <Icon name="menu" size={24} color={color} type="Entypo" />;
          },
        }}
      />
      <TabBar.Screen
        name="Car"
        component={ProductNavigator}
        options={{
          headerShown: false,
          title: "Carrito",
          tabBarIcon: ({ color }) => {
            return <Icon name="shoppingcart" size={24} color={color} type="ant-design" />;
          },
        }}
      />
      <TabBar.Screen
        name="Home"
        component={ScreenHome}
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color }) => {
            return <Icon name="home" size={24} color={color} type="Entypo" />;
          },
        }}
      />
      <TabBar.Screen
        name="Change"
        component={CuponScreen}
        options={{
          headerShown: false,
          title: "canjear",
          tabBarIcon: ({ color }) => {
            return <Icon name="gift" size={24} color={color} type="ant-design" />;
          },
        }}
      />

      <TabBar.Screen
        name="ManejoActivos4"
        component={UserScreen}
        options={{
          headerShown: false,
          title: "usuario",
          tabBarIcon: ({ color }) => {
            return (
              <Icon name="user" size={24} color={color} type="ant-design" />
            );
          },
        }}
      />
    </TabBar.Navigator>
  );
};

const GroupsNavigator = () => {
  return (
    <GroupStack.Navigator>
      <GroupStack.Screen
        name='ListGroups'
        component={ListGroups}
        options={{
          title: "List_Groups",
          headerShown: false,
        }}
      />
      <GroupStack.Screen
        name='Groups'
        component={Groups}
        options={{
          title: "GroupsMembers",
          headerShown: false,
        }}
      />

    </GroupStack.Navigator>
  )
}

const ProductNavigator = () => {
  return (
    <StackProducts.Navigator>
      <StackProducts.Screen
        name="CarScreen"
        component={CarScreen}
        options={{
          title: "CarProducts",
          headerShown: false,
        }}
      />
      <StackProducts.Screen
        name="Products"
        component={ProductsScreen}
        options={{
          title: "Category Products",
          headerShown: false,
        }}
      />

    </StackProducts.Navigator>
  );
};

const LoginNav = () => {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen
        name="LoginNav"
        options={{
          headerShown: false,
        }}
        component={LoginForm}
      />
      <LoginStack.Screen
        name="RegistrarNav"
        options={{
          headerShown: false,
        }}
        component={Registrar}
      />

      <LoginStack.Screen
        name="ReseteoNav"
        options={{
          headerShown: false,
        }}
        component={ReseteoForm}
      />
    </LoginStack.Navigator>
  );
};

const verficarFire = async (fnSetLogin, id) => {
  const docRef = doc(global.dbCon, "Administradores", id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    fnSetLogin(true);
    console.log("Document data:", docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
};

export default function App() {
  const PedidosData = {
    productos: [],
  };

  const [Login, setlogin] = useState(false);

  const [user, setUser] = useState();

  const registarObserver = () => {
    const auth = getAuth();
    if (!global.DesSuscribirObserver) {
      global.DesSuscribirObserver = onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User

          const uid = user.uid;
          console.log("Observer Cambia !!!!a sing in1");
          verficarFire(setlogin, uid);

          console.log("L,", Login);
          // ...
        } else {
          // User is signed out
          // ...
          console.log("Observer Cambia !!!!a sing out");
          setlogin(false);
        }
      });
    }
  };

  loadConfiguration();
  registarObserver();

  return (
    <PedidoContext.Provider value={{ user, setUser }}>
      <FontsLoader>
        <NavigationContainer>
          <StatusBar
            style={{
              flex: 1,
              backgroundColor: "#62CBDE",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
          {Login ? <BarNavigator /> : <LoginNav />}
        </NavigationContainer>
      </FontsLoader>
    </PedidoContext.Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.whiteSegunda,
    alignItems: 'center',
    justifyContent: "center",
    dColor: "gray",
  },
  texto: {
    fontFamily: "Lato_400Regular_Italic"
  }
});