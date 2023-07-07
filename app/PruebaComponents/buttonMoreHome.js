import { StyleSheet, Text, View, Image } from 'react-native';
import { Button } from '@rneui/themed'



export const ButtonMore = () => {
    return (
        <View>
            <Button
                title="Ver mas"
                buttonStyle={{
                    backgroundColor: '#F25B0C',
                    borderWidth: 10,
                    borderColor: 'white',
                    borderRadius: 30,
                }}
                containerStyle={{
                    width: 110,
                    marginHorizontal: 0,
                    marginVertical: 0,

                }}
                titleStyle={{ fontWeight: 'bold' }}
            />
        </View>

    )
}