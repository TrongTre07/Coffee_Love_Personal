import { View, Text, Image, Pressable, TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { styles } from './styles'
const Login = () => {
  return (
    <View style={styles.container}>

      <View style={styles.container2}>

        <View style={styles.hd}>
          <Icon name='chevron-left' style={styles.icon} />
          <Text style={styles.thd}>Đăng Nhập</Text>
          <View></View>
        </View>

        <Image source={require('../../../assets/images/lgimg.png')}
          style={styles.img} />

      </View>

      <View style={styles.v3}>
        <View>
          <Text style={styles.t1}>Số Điện Thoại</Text>
          <TextInput placeholder='0783800000'
            style={styles.tip1} />
        </View>

        <View>
          <Text style={styles.t2}>Mật Khẩu </Text>
          <View style={styles.vp}>
            <TextInput placeholder='.............'
              style={styles.tip1} />
            <Icon name='eye' style={styles.icon2} />
          </View>
        </View>

        <Text style={styles.t3}>Quên mật khẩu ?</Text>

        <Pressable style={styles.btn} >
          <Text style={styles.txtbtn} >
            Đăng Nhập </Text>
        </Pressable>

        <Text style={styles.t4}>Hoặc</Text>

        <View style={styles.vic}>
          <Icon name='google' style={styles.icongg} />
          <Icon name='apple' style={styles.iconap} />
          <Icon name='facebook' style={styles.iconfb} />
        </View>

        <View style={styles.txtlg} >
                    <Text style={styles.t5} >Bạn chưa có tài khoản? </Text>
                    <Pressable>
                        <Text style={styles.tlg} > Đăng ký</Text>
                    </Pressable>
                </View>

      </View>

    </View>
  )
}

export default Login