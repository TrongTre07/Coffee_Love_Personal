import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {BACKGROUND_BUTTON_COLOR} from '../product/contanst';

const ProductDetail = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/americano.png')}
        style={styles.imageSanPham}
      />

      {/* Thong tin san pham container */}
      <View style={styles.thongTinSanPhamContainer}>
        {/* ten san pham, sao vote */}
        <View>
          <Text style={styles.textTenSanPham}>Americano</Text>
          {/* star vote */}
          <View style={styles.voteContainer}>
            <Text style={styles.start}>4.5</Text>
            <Icon
              name="star"
              solid
              size={15}
              color={'#FC9702'}
              style={{paddingRight: 5, paddingLeft: 2}}
            />
            <Text style={styles.start}>(2.104)</Text>
          </View>
        </View>

        {/* Danh muc */}
        <View style={styles.danhSachDanhMucContainer}>
          {/* Coffee  */}
          <View style={styles.danhMucContainer}>
            <Icon
              name="mug-saucer"
              solid
              size={15}
              color={'#FFD700'}
              style={{marginRight: 5}}
            />
            <Text style={styles.textDanhMuc}>Coffee</Text>
          </View>
          {/* Coffee  */}
          <View style={styles.danhMucContainer}>
            <Icon
              name="egg"
              solid
              size={15}
              color={'#FFD700'}
              style={{marginRight: 5}}
            />
            <Text style={styles.textDanhMuc}>Milk Tea</Text>
          </View>
          {/* Coffee  */}
          <View style={styles.danhMucContainer}>
            <Icon
              name="mug-saucer"
              solid
              size={15}
              color={'#FFD700'}
              style={{marginRight: 5}}
            />
            <Text style={styles.textDanhMuc}>Milk Tea</Text>
          </View>
        </View>
      </View>

      {/* Mo ta container */}
      <View style={styles.moTaContainer}>
        <Text style={styles.textMoTa}>Mô tả</Text>
        <Text style={styles.textThongTin}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Donec Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Donec
        </Text>
      </View>

      {/* separate line */}
      <View style={styles.separateLine} />

      {/* chon size */}
      <View style={styles.chonSizeContainer}>
        <Text style={styles.textMoTa}>Chọn size</Text>
        <View style={styles.baSizeContainer}>
          {/* Size M */}
          <View style={styles.sizeContainer}>
            <Text style={styles.textSize}>M</Text>
          </View>
          {/* Size L */}
          <View style={styles.sizeSelectedContainer}>
            <Text style={styles.textSizeSelected}>L</Text>
          </View>
          {/* Size SL */}
          <View style={styles.sizeContainer}>
            <Text style={styles.textSize}>SL</Text>
          </View>
        </View>
      </View>

      {/* Buy now */}
      <View style={styles.buyNowContainer}>
        {/* So luong va gia  */}
        <View style={styles.giaTienVaSoLuongContainer}>
          {/* Gia */}
          <View style={styles.giaTienContainer}>
            <Text style={[styles.textTien, styles.amount]}>100.000₫</Text>
            <Text style={styles.dash}>-</Text>
            <Text style={styles.textSale}>100.000₫</Text>
          </View>
          {/* so luong */}
          <View style={styles.soLuongContainer}>
            <Icon name="minus" size={15} color={BACKGROUND_BUTTON_COLOR} />
            <Text style={styles.textSoLuong}>1</Text>
            <Icon name="plus" size={15} color={BACKGROUND_BUTTON_COLOR} />
          </View>
        </View>

        {/* Buy now button */}
        <View style={styles.buyNowButtonContainer}>
          <Text style={styles.textBuyNow}>Mua ngay</Text>
        </View>
      </View>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  imageSanPham: {
    width: '100%',
    height: 250,
  },
  textTenSanPham: {
    fontSize: 30,
    color: 'black',
    fontWeight: '500',
  },
  thongTinSanPhamContainer: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    width: '100%',
    height: 130,
    paddingLeft: 10,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    paddingRight: 10,
    borderColor: '#F3962C',
    borderWidth: 1,

    // backgroundColor: '#F3962C',
    backgroundColor: '#FCE0C0',
  },
  voteContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  danhMucContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
    height: 'auto',
    padding: 5,
    marginHorizontal: 2,
    borderRadius: 10,
    backgroundColor: BACKGROUND_BUTTON_COLOR,
  },
  textDanhMuc: {
    fontSize: 15,
    color: 'white',
    fontWeight: '500',
  },
  baSizeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  space: {
    height: 2,
  },
  start: {
    fontSize: 14,
    color: 'black',
    fontWeight: '400',
  },
  danhSachDanhMucContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: 'auto',
  },
  textMoTa: {
    fontSize: 18,
    color: 'black',
    fontWeight: '500',
    marginTop: 10,
    marginBottom: 5,
  },
  textThongTin: {
    fontSize: 15,
    color: '#404040',
    fontWeight: '400',
    paddingVertical: 2,
  },
  textSize: {
    fontSize: 16,
    color: BACKGROUND_BUTTON_COLOR,
    fontWeight: 'bold',
  },
  textSizeSelected: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  separateLine: {
    height: 1,
    width: '95%',
    backgroundColor: 'gray',
    marginVertical: 10,
  },
  sizeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
    height: 'auto',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginHorizontal: 2,
    borderRadius: 12,
    borderColor: BACKGROUND_BUTTON_COLOR,
    borderWidth: 2,
    backgroundColor: '#FFECD2',
  },
  sizeSelectedContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
    height: 'auto',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginHorizontal: 2,
    borderRadius: 12,
    borderColor: BACKGROUND_BUTTON_COLOR,
    borderWidth: 2,
    backgroundColor: BACKGROUND_BUTTON_COLOR,
  },
  chonSizeContainer: {
    width: '93%',
  },
  moTaContainer: {
    width: '93%',
  },
  buyNowContainer: {
    width: '100%',
    height: 130,
    borderRadius: 10,
    borderColor: BACKGROUND_BUTTON_COLOR,
    borderWidth: 1,
    backgroundColor: '#FDEEDD',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 10,
    position: 'absolute',
    bottom: 0,
  },
  soLuongContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 150,
    height: 'auto',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 2,
    borderRadius: 12,
    borderColor: BACKGROUND_BUTTON_COLOR,
    borderWidth: 2,
    backgroundColor: '#FFECD2',
  },
  textSoLuong: {
    fontSize: 16,
    color: BACKGROUND_BUTTON_COLOR,
    fontWeight: 'bold',
  },
  textSale: {
    fontSize: 18,
    color: BACKGROUND_BUTTON_COLOR,
    fontWeight: 'bold',
  },
  textTien: {
    fontSize: 18,
    color: 'gray',
    fontWeight: 'bold',
  },
  amount: {
    textDecorationLine: 'line-through', // Add a line-through text decoration
  },
  giaTienContainer: {
    flexDirection: 'row',
    marginVertical: 15,
  },
  dash: {
    fontSize: 16,
    color: 'gray',
    paddingHorizontal: 5,
  },
  buyNowButtonContainer: {
    width: 130,
    height: 50,
    borderRadius: 10,
    borderColor: BACKGROUND_BUTTON_COLOR,
    borderWidth: 2,
    backgroundColor: BACKGROUND_BUTTON_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBuyNow: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  giaTienVaSoLuongContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
