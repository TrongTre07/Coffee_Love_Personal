import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {BACKGROUND_BUTTON_COLOR} from '../../../utils/contanst';
import moment from 'moment';
import {lamTronSo} from '../../../utils/lamTronSo';

const DanhSachDanhGia = ({data}) => {
  const dataDanhGia = [
    {id: 1415},
    {id: 2745},
    {id: 4243},
    {id: 744},
    {id: 1745},
  ];
  const dataHinhAnhDanhGia = [{id: 'sfasf'}, {id: 'asfasf'}, {id: 'svawse'}];

  const renderHinhAnhDanhGia = ({item}) => {
    return (
      <View>
        <Image
          source={require('../../../assets/images/avatar.png')}
          style={styles.imageDanhGia}
        />
      </View>
    );
  };

  const RenderChiTietDanhGia = ({item}) => {
    return (
      /* avatar & content */
      <View style={styles.chiTietDanGiaContainer}>
        <Image
          source={require('../../../assets/images/avatar.png')}
          style={styles.avatar}
        />
        {/* ten, so sao, noi dung, hinh anh */}
        <View>
          {/* tên user đánh giá api chưa có */}
          <Text style={styles.textName}>MayChaosTakeTheWorld</Text>
          <View style={[styles.danhGiaSaoContainer, {marginVertical: 7}]}>
            <FlatList
              data={dataDanhGia}
              renderItem={renderSaoDanhGia}
              horizontal={true}
              keyExtractor={item => item.id}
            />
          </View>
          <Text style={styles.textNoiDung}>{item.danh_gia}</Text>
          {/* hinh anh danh gia */}
          <View style={{marginVertical: 15}}>
            <FlatList
              data={dataHinhAnhDanhGia}
              renderItem={renderHinhAnhDanhGia}
              horizontal={true}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
          {/* thoi gian danh gia */}
          <Text style={styles.textThoiGianDanhGia}>
            {moment().format('DD-MM-YYYY HH:mm')}
          </Text>
          {/* separate line */}
          <View style={styles.separateLine} />
        </View>
      </View>
    );
  };
  const renderSaoDanhGia = () => {
    return (
      <View>
        <Icon
          name="star"
          solid
          size={16}
          color={'#FC9702'}
          style={{paddingRight: 5, paddingLeft: 2}}
        />
      </View>
    );
  };
  return (
    <View>
      <View style={styles.danhGiaSanPhamContainer}>
        {/* danh gia, sao, vote, xem tat ca */}
        <View style={styles.danhGiaXemTatCaContainer}>
          {/* danh gia, so sao */}
          <View>
            <Text style={styles.textDanhGia}>Đánh giá</Text>
            {/* danh gia sao */}
            <View style={styles.danhGiaSaoContainer}>
              <View style={{width: 'auto'}}>
                <FlatList
                  data={dataDanhGia}
                  renderItem={renderSaoDanhGia}
                  horizontal={true}
                  keyExtractor={item => item.id}
                  showsHorizontalScrollIndicator={false}
                />
              </View>
              <Text style={styles.textSao}>
                {lamTronSo(data.tong_sao)}/5 ({data.so_luong_danh_gia})
              </Text>
            </View>
          </View>
          {/* tat ca danh gia, arrow */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.textTatCaDanhGia}>Tất cả đánh giá</Text>
            <Icon
              name="angle-right"
              size={20}
              color={BACKGROUND_BUTTON_COLOR}
            />
          </View>
        </View>
      </View>

      {/* separate line */}
      <View style={styles.separateLine} />

      {/* danh sach danh gia */}
      {/* <FlatList
        data={dataChiTietDanhGia}
        renderItem={renderChiTietDanhGia}
        keyExtractor={item => item.id}
      /> */}
      {data.danh_gia.map(item => {
        return (
          <View key={item._id}>
            <RenderChiTietDanhGia item={item} />
          </View>
        );
      })}
    </View>
  );
};

export default DanhSachDanhGia;

const styles = StyleSheet.create({
  danhGiaSanPhamContainer: {
    marginTop: 30,
  },
  danhGiaSaoContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textSao: {
    fontSize: 15,
    color: 'black',
    fontWeight: '500',
    marginLeft: 5,
  },
  textDanhGia: {
    fontSize: 18,
    color: 'black',
    fontWeight: '500',

    marginBottom: 5,
  },
  textTatCaDanhGia: {
    fontSize: 15,
    color: BACKGROUND_BUTTON_COLOR,
    fontWeight: '500',
    marginRight: 5,
  },
  danhGiaXemTatCaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginRight: 20,
  },
  separateLine: {
    height: 1,
    width: '95%',
    backgroundColor: 'gray',
    marginVertical: 10,
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginHorizontal: 10,
  },
  imageDanhGia: {
    height: 100,
    width: 100,
  },
  chiTietDanGiaContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginVertical: 12,
  },
  textName: {
    fontSize: 15,
    color: 'black',
    fontWeight: '600',
  },
  textNoiDung: {
    fontSize: 15,
    color: 'black',
    fontWeight: '500',
    width: 310,
  },
  textThoiGianDanhGia: {
    fontSize: 13,
    color: 'black',
    fontWeight: '400',
  },
});
