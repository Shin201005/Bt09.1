import React, { useContext } from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function ProfileScreen() {
  const { userEmail, signOut } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topHeader} />

      <View style={styles.profileSection}>
       

        <Text style={styles.name}>User Account</Text>
       
        <Text style={styles.email}>{userEmail}</Text>

        <Text style={styles.description}>
          This profile screen is using AsyncStorage to keep login state and show
          the email entered at sign in.
        </Text>

        <TouchableOpacity style={styles.signOutBtn} onPress={signOut}>
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
  },
  topHeader: {
    height: 180,
    backgroundColor: '#11b5e4',
  },
  profileSection: {
    marginTop: -52,
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  avatar: {
    width: 104,
    height: 104,
    borderRadius: 52,
    borderWidth: 4,
    borderColor: '#fff',
    backgroundColor: '#ddd',
  },
  name: {
    marginTop: 14,
    fontSize: 30,
    fontWeight: '700',
    color: '#444',
  },
  role: {
    fontSize: 15,
    color: '#1ba7e1',
    marginTop: 6,
    fontWeight: '500',
  },
  email: {
    fontSize: 16,
    color: '#222',
    marginTop: 8,
    fontWeight: '600',
  },
  description: {
    textAlign: 'center',
    color: '#777',
    marginTop: 18,
    lineHeight: 22,
    paddingHorizontal: 8,
  },
  signOutBtn: {
    marginTop: 26,
    backgroundColor: '#ffae00',
    paddingHorizontal: 26,
    paddingVertical: 12,
    borderRadius: 8,
  },
  signOutText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 15,
  },
});