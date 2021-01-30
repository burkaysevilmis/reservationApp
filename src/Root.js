import React, {useEffect, useState} from 'react';
import {Text, View, FlatList, ActivityIndicator} from 'react-native';
import style from '../src/style/home';
import renderHotelList from './components/renderHotelList';
import datalar from './data/data.json';
import {useSelector, useDispatch} from 'react-redux';
import * as globalActions from '../store/action/globalActions';
export default function Root() {
  const dispatch = useDispatch();
  const [time, setTime] = useState(0);
  const [loadingAddData, setLoadingAddData] = useState(false);
  const data = useSelector((state) => state.global.reservationData);
  const loading = useSelector((state) => state.global.loading);
  const total = useSelector((state) => state.global.total);
  useEffect(() => {
    //herhangi bir apiden veri çekemediğim için bekleme
    //olayını mecburen timer ile yaptım veri çok hızlı geliyor bekleme gözükmüyor yosksa.

    if (time === 2) {
      dispatch(globalActions.reservationDataPush(datalar.slice(0, 1)));
    }

    const timer = setInterval(() => {
      setTime(time + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [time, dispatch]);

  const addData = () => {
    setLoadingAddData(true);
    const dataLength = data.length;

    if (data.length <= datalar.length) {
      dispatch(
        globalActions.reservationDataPush(
          datalar.slice(dataLength, dataLength + 2),
        ),
      );
    }
    setLoadingAddData(false);
  };

  if (loading) {
    return (
      <View style={style.loading}>
        <ActivityIndicator animating size="large" color="black" />
      </View>
    );
  }
  return (
    <View style={style.screen}>
      <View style={style.reservationList}>
        <FlatList
          numColumns={1}
          data={data}
          onEndReachedThreshold={0.1}
          onEndReached={addData}
          renderItem={({item}) => renderHotelList(item, dispatch)}
          keyExtractor={(item) => {
            item._id;
          }}
        />
        <View>
          <ActivityIndicator
            animating={loadingAddData}
            size="large"
            color="black"
          />
        </View>
      </View>
      <View style={style.total}>
        <Text style={style.totalText}>Total {total} TL</Text>
      </View>
    </View>
  );
}
