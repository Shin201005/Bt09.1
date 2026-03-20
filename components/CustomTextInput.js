import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function CustomTextInput({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
}) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#999"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize="none"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 18,
  },
  label: {
    fontSize: 15,
    color: '#333',
    marginBottom: 8,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#cfcfcf',
    borderRadius: 8,
    paddingHorizontal: 14,
    height: 48,
    backgroundColor: '#fff',
    color: '#222',
  },
});