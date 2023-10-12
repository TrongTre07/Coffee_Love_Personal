import {StyleSheet} from 'react-native';
import {
  BACKGROUND_BUTTON_COLOR,
  BACKGROUND_BUTTON_COLOR_GRAY,
} from '../contanst';

export const detailStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent:'center',
    alignItems: 'center',
    margin: 5
  },
  imageSanPham: {width: 111, height: 111},
  textSanPham: {
    fontSize: 30,
    fontWeight: '700',
    lineHeight: 30,
    letterSpacing: 0.3,
    textAlign: 'left',
    color: 'black',
    marginTop: 15,
    marginBottom: 5,
  },
  textSoLuong: {
    fontSize: 24,
    fontWeight: '500',
    lineHeight: 26,
    letterSpacing: 0.3,
    textAlign: 'center',
    color: 'black',
  },
  textHeaderLocation: {
    fontSize: 24,
    fontWeight: '500',
    lineHeight: 26,
    letterSpacing: 0.3,
    textAlign: 'center',
    color: 'black',
  },
  textSoLuongSo: {
    fontSize: 22,
    fontWeight: '500',
    lineHeight: 26,
    letterSpacing: 0.3,
    textAlign: 'center',
    color: 'black',
  },
  textDanhMuc: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 26,
    letterSpacing: 0.3,
    textAlign: 'center',
    color: 'black',
  },
  textLocation: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 26,
    letterSpacing: 0.3,
    textAlign: 'center',
    color: 'black',
  },
  soLuongSoContainer: {
    width: '50%',
    alignItems: 'center',
    backgroundColor: BACKGROUND_BUTTON_COLOR_GRAY,
  },
  twoButtonsSoLuongContainer: {
    flexDirection: 'row',
    width: 70,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  soLuongContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginBottom: 15
  },
  buttonChonSizeSelected: {
    backgroundColor: BACKGROUND_BUTTON_COLOR,
    width: 111,
    height: 46,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonChonSize: {
    backgroundColor: BACKGROUND_BUTTON_COLOR_GRAY,
    width: 111,
    height: 46,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textSizeButtonSelected: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 26,
    letterSpacing: 0.3,
    textAlign: 'center',
    color: 'white',
  },
  textButtonGia: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 26,
    letterSpacing: 0.3,
    textAlign: 'center',
    color: 'white',
  },
  textSizeButton: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 26,
    letterSpacing: 0.3,
    textAlign: 'center',
    color: 'black',
  },
  separator: {
    height: 0.8,
    width: '80%',
    backgroundColor: 'gray',
    marginVertical: 40,

  },
  buttonGia: {
    width: '95%',
    height: 46,
    backgroundColor: BACKGROUND_BUTTON_COLOR,
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  buttonMuaNgay: {
    width: '49%',
    height: 46,
    backgroundColor: BACKGROUND_BUTTON_COLOR,
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  twoButtonBuyAndAddCartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
  },
  footerContainer: {
    position: 'absolute',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 5,
  },
});