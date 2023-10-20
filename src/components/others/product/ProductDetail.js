import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {BACKGROUND_BUTTON_COLOR} from '../../../utils/contanst';
import DanhSachDanhGia from './DanhSachDanhGia';
import BottomMuaSanPham from './BottomMuaSanPham';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {styles} from './styles/productDetailStyle';
import {useDispatch, useSelector} from 'react-redux';
import {getChiTietSanPhamRequest} from '../../../redux/reducers/slices/chiTietSanPhamSlice';
import {formatCurrency} from '../../../utils/formatCurrency';
import Swiper from 'react-native-swiper';
import {useRoute} from '@react-navigation/native';
import { lamTronSo } from '../../../utils/lamTronSo';

const ProductDetail = ({navigation}) => {
  // const route = useRoute();
  // const {item} = route.params;

  const dataSanPhamDeXuat = [
    {
      id: 1,
      name: 'Americano',
      price: '20.100₫',
      image: require('../../../assets/images/americano.png'),
    },
    {
      id: 2,
      name: 'Americano',
      price: '20.100₫',
      image: require('../../../assets/images/americano.png'),
    },
    {
      id: 3,
      name: 'Americano',
      price: '20.100₫',
      image: require('../../../assets/images/americano.png'),
    },
    {
      id: 4,
      name: 'Americano',
      price: '20.100₫',
      image: require('../../../assets/images/americano.png'),
    },
    {
      id: 5,
      name: 'Americano',
      price: '20.100₫',
      image: require('../../../assets/images/americano.png'),
    },
    {
      id: 6,
      name: 'Americano',
      price: '20.100₫',
      image: require('../../../assets/images/americano.png'),
    },
  ];

  const dispatch = useDispatch();
  const dataChiTietSanPham = useSelector(state => state.chi_tiet_san_pham.data);
  const isLoading = useSelector(state => state.chi_tiet_san_pham.isLoading);

  useEffect(() => {
    const chiTietSanPhamRequest = () => {
      dispatch(getChiTietSanPhamRequest('65200da4b4687e983b7353b4'));
    };
    chiTietSanPhamRequest();
  }, []);

  const [isOpen, setIsOpen] = React.useState(false);

  const renderSanPhamDeXuat = () => {
    return (
      <View style={styles.containerSanPhamDeXuat}>
        <Image
          style={styles.imageSanPhamDeXuat}
          source={require('../../../assets/images/americano.png')}
        />
        <Text
          numberOfLines={2}
          ellipsizeMode="tail"
          style={styles.textTenSanPhamDeXuat}>
          Americano
        </Text>
        <Text style={styles.textGiaTienSanPhamDeXuat}>20.100₫</Text>
      </View>
    );
  };

  return dataChiTietSanPham == null ? (
    <View style={styles.failContainer}>
      <Text style={styles.textKhongCoDuLieu}>Không có dữ liệu</Text>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={17} color={'black'} />
      </TouchableOpacity>
    </View>
  ) : (
    <>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={BACKGROUND_BUTTON_COLOR} />
        </View>
      ) : (
        <GestureHandlerRootView style={styles.container}>
          <ScrollView>
            <Swiper
              activeDotColor={BACKGROUND_BUTTON_COLOR}
              nextButton={
                <Icon
                  name="chevron-right"
                  size={20}
                  color={BACKGROUND_BUTTON_COLOR}
                />
              }
              prevButton={
                <Icon
                  name="chevron-left"
                  size={20}
                  color={BACKGROUND_BUTTON_COLOR}
                />
              }
              height={250}
              showsButtons={true}>
              {dataChiTietSanPham.hinh_anh_sp.map((item, index) => {
                return (
                  <Image
                    source={{uri: item.hinh_anh_sp}}
                    style={styles.imageSanPham}
                  />
                );
              })}
            </Swiper>

            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}>
              <Icon name="arrow-left" size={17} color={'black'} />
            </TouchableOpacity>

            {/* Thong tin san pham container */}
            <View style={styles.thongTinSanPhamContainer}>
              {/* ten san pham, sao vote */}
              <View>
                <Text style={styles.textTenSanPham}>
                  {dataChiTietSanPham.ten_san_pham}
                </Text>
                {/* star vote */}
                <View style={styles.voteContainer}>
                  <Text style={styles.start}>{lamTronSo(dataChiTietSanPham.tong_sao)}</Text>
                  <Icon
                    name="star"
                    solid
                    size={15}
                    color={'#FC9702'}
                    style={{paddingRight: 5, paddingLeft: 2}}
                  />
                  <Text style={styles.start}>({lamTronSo(dataChiTietSanPham.so_luong_danh_gia)})</Text>
                </View>
              </View>

              {/* Danh muc */}
              <View style={styles.danhSachDanhMucContainer}>
                {dataChiTietSanPham.loai_san_pham.map((item, index) => {
                  return (
                    <TouchableOpacity
                      style={styles.danhMucContainer}
                      key={index}>
                      <Icon
                        name="mug-saucer"
                        solid
                        size={15}
                        color={'#FFD700'}
                        style={{marginRight: 5}}
                      />
                      <Text style={styles.textDanhMuc}>
                        {item.ten_loai_san_pham}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>

              <TouchableOpacity style={styles.buttonThemVaoYeuThich}>
                <Icon name="heart" size={30} color={'#FC9702'} />
              </TouchableOpacity>
            </View>

            {/* Gia */}

            <View style={styles.giaTienVaMuaContainer}>
              <View>
                {/* Giam gia */}
                {dataChiTietSanPham.size[2].giam_gia == 0 ? null : (
                  <View style={styles.giaTienContainer}>
                    <Text style={[styles.textTien, styles.amount]}>
                      {formatCurrency(dataChiTietSanPham.size[2].giam_gia)}
                    </Text>
                    <Text style={styles.dash}>-</Text>
                    <Text style={[styles.textTien, styles.amount]}>
                      {formatCurrency(dataChiTietSanPham.size[0].giam_gia)}
                    </Text>
                  </View>
                )}

                {/* tien hien tai */}
                <View style={styles.giaTienContainer}>
                  <Text style={styles.textSale}>
                    {formatCurrency(dataChiTietSanPham.size[2].gia)}
                  </Text>
                  <Text style={styles.dash}>-</Text>
                  <Text style={styles.textSale}>
                    {formatCurrency(dataChiTietSanPham.size[0].gia)}
                  </Text>
                </View>
              </View>
              <View style={styles.yeuThichVaMuaHangContainer}>
                {/* <Icon name="heart" size={30} color={'#FC9702'} /> */}
                <TouchableOpacity
                  style={styles.buttonMuaSanPham}
                  onPress={() => setIsOpen(true)}>
                  <Text style={styles.textMua}>Mua</Text>
                  <Icon name="cart-shopping" size={15} color={'white'} />
                </TouchableOpacity>
              </View>
            </View>

            {/* Mo ta container */}
            <View style={styles.moTaContainer}>
              <Text style={styles.textMoTa}>Mô tả</Text>
              <Text style={styles.textThongTin}>
                {dataChiTietSanPham.mo_ta}
              </Text>
            </View>

            {/* separate line */}
            <View style={styles.separateLine} />

            {/* Sản phẩm đề xuất */}
            <View style={styles.sanPhamDeXuatContainer}>
              <Text style={styles.textMoTa}>Đề xuất</Text>
              <FlatList
                data={dataSanPhamDeXuat}
                renderItem={renderSanPhamDeXuat}
                horizontal={true}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
              />
            </View>

            <DanhSachDanhGia data={dataChiTietSanPham}/>
          </ScrollView>

          <BottomMuaSanPham
            isOpen={isOpen}
            onChangeOpen={() => setIsOpen(false)}
            data={dataChiTietSanPham}
          />
        </GestureHandlerRootView>
      )}
    </>
  );
};

export default ProductDetail;
