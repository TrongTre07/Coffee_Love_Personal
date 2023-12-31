import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {checkOtp} from '../../../redux/reducers/slices/userSlice';
import {useNavigation} from '@react-navigation/native';

const Otp = props => {
  const {route} = props;
  const email = route.params?.email;

  const navigation = useNavigation();
  const [number, setNumber] = useState('');
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [number3, setNumber3] = useState('');

  const handleInputChange = (value, nextInputRef) => {
    // Kiểm tra nếu giá trị nhập vào là một số có độ dài 1
    if (/^\d$/.test(value) && value.length === 1) {
      // Nếu đúng, chuyển con trỏ đến ô nhập tiếp theo
      nextInputRef.focus();
    }
  };

  const isLoading = useSelector(state => state.users.isLoading);

  const dispatch = useDispatch();

  const showAlert = () => {
    Alert.alert(
      'Không Được Rổng!',
      'Vui lòng nhập đầy đủ thông tin',
      [
        {
          text: 'Đồng ý',
          onPress: () => console.log('Đã đồng ý'),
        },
      ],
      {cancelable: false},
    );
  };

  const handleOtp = () => {
    const otp = `${number}${number1}${number2}${number3}`;
    if (email === '' || otp === '') {
      showAlert();
    } else {
      dispatch(checkOtp({email, otp, navigation}));
    }
  };

  return (
    <View style={styles.container}>
      {/* <View style={styles.navhd}>
                <Icon name='chevron-left' style={styles.iconhd} />
                <Text style={styles.thd}>OTP</Text>
                <View></View>
            </View> */}

      <Text style={styles.tem}>Nhập OTP </Text>
      <View style={styles.containernum}>
        <TextInput
          value={number}
          onChangeText={value => {
            setNumber(value);
            handleInputChange(value, input2Ref);
          }}
          keyboardType="numeric"
          maxLength={1}
          style={styles.numOtp}
        />

        <TextInput
          value={number1}
          onChangeText={value => {
            setNumber1(value);
            handleInputChange(value, input3Ref);
          }}
          keyboardType="numeric"
          maxLength={1}
          ref={ref => (input2Ref = ref)}
          style={styles.numOtp}
        />

        <TextInput
          value={number2}
          onChangeText={value => {
            setNumber2(value);
            handleInputChange(value, input4Ref);
          }}
          keyboardType="numeric"
          maxLength={1}
          ref={ref => (input3Ref = ref)}
          style={styles.numOtp}
        />

        <TextInput
          value={number3}
          onChangeText={value => {
            setNumber3(value);
          }}
          keyboardType="numeric"
          maxLength={1}
          ref={ref => {
            input4Ref = ref;
          }}
          style={styles.numOtp}
        />
      </View>

      <View style={styles.t}>
        <Text style={styles.task}>Bạn chưa nhận được OTP?</Text>
        <Text style={styles.tre}> Gửi lại</Text>
      </View>

      <TouchableOpacity onPress={() => handleOtp()} style={styles.btn1}>
        <Text style={styles.txtbtn1}>Nhập OTP </Text>
      </TouchableOpacity>

      <Text style={styles.tor}>Hoặc</Text>

      <View style={styles.vic}>
        <Icon name="google" style={styles.icongg} />
        <Icon name="apple" style={styles.iconap} />
        <Icon name="facebook" style={styles.iconfb} />
      </View>

      <Text style={styles.t}>Bạn đã có tài khoản </Text>

      <Pressable style={styles.btn1}>
        <Text style={styles.txtbtn1}>Đăng Nhập </Text>
      </Pressable>
    </View>
  );
};

export default Otp;
