import React, { useContext, useState } from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { AuthContext } from '../context/AuthContext';
import CustomTextInput from '../components/CustomTextInput';
import IconButton from '../components/IconButton';

export default function SignInScreen({ navigation }) {
  const { signIn } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Thông báo', 'Vui lòng nhập email và password');
      return;
    }

    await signIn(email.trim());
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Sign In</Text>

        <CustomTextInput
          label="Email ID"
          placeholder="Enter your email here!"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <CustomTextInput
          label="Password"
          placeholder="Enter your password here!"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity
          style={styles.forgotWrap}
          onPress={() => navigation.navigate('ForgotPassword')}
        >
          <Text style={styles.forgotText}>Forgot password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signInBtn} onPress={handleSignIn}>
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>Or sign in with</Text>

        <View style={styles.socialRow}>
          <IconButton
            title="Google"
            iconName="logo-google"
            onPress={() => Alert.alert('Thông báo', 'Chưa xử lý Google login')}
          />
          <View style={{ width: 12 }} />
          <IconButton
            title="Facebook"
            iconName="logo-facebook"
            backgroundColor="#4267B2"
            textColor="#fff"
            borderColor="#4267B2"
            onPress={() => Alert.alert('Thông báo', 'Chưa xử lý Facebook login')}
          />
        </View>

        <View style={styles.footerRow}>
          <Text style={styles.footerText}>Not yet a member? </Text>
          <Text style={styles.signUpText}>Sign Up</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 34,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 36,
    color: '#111',
  },
  forgotWrap: {
    alignItems: 'flex-end',
    marginTop: -6,
    marginBottom: 18,
  },
  forgotText: {
    color: '#ff9900',
    fontWeight: '600',
  },
  signInBtn: {
    backgroundColor: '#ffae00',
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 22,
  },
  signInText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  orText: {
    textAlign: 'center',
    color: '#444',
    marginBottom: 18,
    fontWeight: '500',
  },
  socialRow: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerText: {
    color: '#444',
  },
  signUpText: {
    color: '#ff9900',
    fontWeight: '600',
  },
});