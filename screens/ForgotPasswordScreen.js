import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function ForgotPasswordScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Forgot Password</Text>
        <Text style={styles.text}>Màn hình để trống, phát triển sau.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 12,
  },
  text: {
    fontSize: 16,
    color: '#666',
  },
});