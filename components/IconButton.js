import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function IconButton({
  title,
  iconName,
  backgroundColor = '#fff',
  textColor = '#222',
  borderColor = '#ddd',
  onPress,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor, borderColor },
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Ionicons name={iconName} size={20} color={textColor} />
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    height: 46,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  text: {
    fontSize: 15,
    fontWeight: '600',
  },
});