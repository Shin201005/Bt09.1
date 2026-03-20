import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function SectionHeader({ title, actionText = 'View all', onPress }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.action}>{actionText}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 22,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#222',
  },
  action: {
    color: '#ff9900',
    fontWeight: '500',
  },
});