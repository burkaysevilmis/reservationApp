import React from 'react';
import {Text, View, Image} from 'react-native';
import style from '../style/flatList';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as globalActions from '../../store/action/globalActions';
export default function renderHotelList(item, dispatch) {
  return (
    <View style={style.screen}>
      <View style={style.box}>
        <View style={style.imageBox}>
          <Image
            style={style.imageStyle}
            source={{uri: item.hotelImg}}
            resizeMode="stretch"
          />
        </View>
        <View style={style.counterBox}>
          <View style={style.positive}>
            <Icon
              onPress={() => {
                dispatch(
                  globalActions.addValue(item.id, 'positive', item.price),
                );
              }}
              name="plus"
              color={'black'}
              size={25}
            />
          </View>
          <View style={style.textBox}>
            <Text style={style.textBoxText}>{item.value}</Text>
          </View>
          <View style={style.negative}>
            <Icon
              onPress={() => {
                dispatch(
                  globalActions.addValue(item.id, 'negative', item.price),
                );
              }}
              name="minus"
              color={'black'}
              size={25}
            />
          </View>
        </View>
      </View>
      <View style={style.priceAndName}>
        <Text style={style.hotelName}>{item.hotelName}</Text>
        <Text style={style.price}>{item.price} TL</Text>
      </View>
    </View>
  );
}
