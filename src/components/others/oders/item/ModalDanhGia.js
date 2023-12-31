import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {modal_color_don_hang} from '../../../../utils/contanst';
import Icon from 'react-native-vector-icons/FontAwesome6';

const ModalDanhGia = ({isVisible, onCancel, sendRate}) => {
  const dataRateStar = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}];
  const [start, setStart] = useState(4);
  const [nhanXet, setNhanXet] = useState('');

  const onConfirm = () => {
    sendRate({
      id_don_hang: isVisible.id,
      so_sao: start,
      danh_gia: nhanXet,
      hinh_anh_danh_gia: [],
      email: '',
      ten_user: '',
    });
    clearAll();
  };
  const toggleModal = () => {
    onCancel();
    clearAll();
  };

  const clearAll = () => {
    setStart(4);
    setNhanXet('');
  };

  const rateStar = ({item}) => {
    const selected = start >= item.id ? true : false;
    return (
      <TouchableOpacity
        style={styles.startContainer}
        onPress={() => setStart(item.id)}>
        <Icon solid={selected} name="star" size={28} color="#E98001" />
      </TouchableOpacity>
    );
  };
  return (
    <Modal
      isVisible={isVisible.isVisible}
      onBackdropPress={() => toggleModal()}
      animationIn="zoomIn"
      animationOut={'zoomOut'}
      backdropOpacity={0.3}
      backdropTransitionOutTiming={0}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.container}>
          {/* danhs gia san pham & loi cam on */}
          <Text style={styles.textDanhGia}>Đánh giá sản phẩm</Text>

          {/* View rate sao */}
          <View style={styles.listStarContainer}>
            <FlatList
              horizontal={true}
              data={dataRateStar}
              renderItem={rateStar}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>

          {/* View input text  nhan xet*/}
          <View>
            <Text style={styles.textNhanXet}>Nhận xét của bạn</Text>
            <TextInput
              multiline
              textAlignVertical="top"
              placeholder="Nhận xét của bạn"
              style={styles.inputNhanXet}
              onChangeText={text => setNhanXet(text)}
              value={nhanXet}
            />
          </View>

          {/* View hinh anh */}
          <View style={styles.themHinhAnhContainer}>
            <Icon name="camera" size={25} color="#E98001" />
            <Text style={styles.textThemHinhAnh}>Thêm hình ảnh</Text>
          </View>

          {/* View button huy va gui */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => toggleModal()}>
              <Text style={styles.textCancel}>Hủy</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => onConfirm()}>
              <Text style={styles.textCancel}>Gửi</Text>
            </TouchableOpacity>
          </View>

          {/* Loi cam on */}
          <Text style={styles.textVui}>
            Coffee.Love rất vui khi nhận được đánh giá của bạn
          </Text>
        </View>
      </View>
    </Modal>
  );
};

export default ModalDanhGia;

const styles = StyleSheet.create({
  container: {
    backgroundColor: modal_color_don_hang.background,
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
    width: Dimensions.get('window').width - 20,
  },
  listStarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
  },
  textDanhGia: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
    alignSelf: 'center',
  },
  textVui: {
    fontSize: 13,
    fontWeight: '300',
    color: 'black',
    fontStyle: 'italic',
    alignSelf: 'center',
    paddingTop: 10,
  },
  startContainer: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textNhanXet: {
    fontSize: 16,
    fontWeight: '400',
    color: 'black',
    paddingBottom: 10,
  },
  inputNhanXet: {
    borderWidth: 0.5,
    borderColor: 'black',
    borderRadius: 10,
    paddingHorizontal: 7,
    marginHorizontal: 3,
    paddingVertical: 7,
    height: 100,
  },
  textThemHinhAnh: {
    fontSize: 14,
    fontWeight: '400',
    color: 'black',
    paddingLeft: 5,
  },
  textCancel: {
    fontSize: 15,
    color: 'black',
  },
  buttonContainer: {
    paddingVertical: 5,
    backgroundColor: modal_color_don_hang.button,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  themHinhAnhContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
  },
});
