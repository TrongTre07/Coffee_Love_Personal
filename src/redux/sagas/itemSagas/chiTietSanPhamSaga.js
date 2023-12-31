import {call, put, takeLatest} from 'redux-saga/effects';
import {
  getChiTietSanPhamSuccess,
  getChiTietSanPhamFail,
  getChiTietSanPhamTuMenuRequest,
  getChiTietSanPhamTuMenuFail,
  getChiTietSanPhamTuMenuSuccess,
} from '../../reducers/slices/chiTietSanPhamSlice';
import instance from '../../../axios/instance';
function* fetchItem(action) {
  try {
    console.log('action.payload SAGA', action.payload);

    const response = yield call(() =>
      instance.get(`api/san-pham/get-san-pham-by-id/${action.payload}`),
    );
    yield put(getChiTietSanPhamSuccess(response.data));
  } catch (error) {
    yield put(getChiTietSanPhamFail(error.message));
  }
}
function* fetchItemFromMenu(action) {
  try {
    const {id} = action.payload;

    const response = yield call(() =>
      instance.get(`api/san-pham/get-san-pham-by-id/${id}`),
    );
    yield put(getChiTietSanPhamTuMenuSuccess(response.data));
  } catch (error) {
    yield put(getChiTietSanPhamTuMenuFail(error.message));
  }
}

function* chiTietSanPhamSaga() {
  yield takeLatest('chi_tiet_san_pham/getChiTietSanPhamRequest', fetchItem);
  yield takeLatest(
    'chi_tiet_san_pham/getChiTietSanPhamTuMenuRequest',
    fetchItemFromMenu,
  );
}

export default chiTietSanPhamSaga;
