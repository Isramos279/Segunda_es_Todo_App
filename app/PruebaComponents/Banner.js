
import { View, FlatList, Image, Dimensions } from 'react-native';

export const Banner =() =>{
    let screen = Dimensions.get('window');
    let width = screen.width;

    let bannerWith = width * 0.93;

    const images = [
        { id: 1, source: require('../../img/banner.png') },
        { id: 2, source: require('../../img/banner1.jpg') },
      ];

      const renderItem = ({ item }) => (
        <Image
          source={item.source}
          style={{ width: bannerWith, height: 150, marginRight: 5,borderRadius: 15}}
          resizeMode="cover"
        />
      );

      return (
        <View style={{ flex: 1 }}>
          <FlatList
            data={images}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
          />
          
        </View>
      );
}