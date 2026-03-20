import React, { createContext, useEffect, useMemo, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

const STORAGE_KEY = 'user_email';

export const AuthProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const savedEmail = await AsyncStorage.getItem(STORAGE_KEY);
        if (savedEmail) {
          setUserEmail(savedEmail);
        }
      } catch (error) {
        console.log('Load user error:', error);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  const signIn = async (email) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, email);
      setUserEmail(email);
    } catch (error) {
      console.log('Sign in error:', error);
    }
  };

  const signOut = async () => {
    try {
      await AsyncStorage.removeItem(STORAGE_KEY);
      setUserEmail(null);
    } catch (error) {
      console.log('Sign out error:', error);
    }
  };

  const value = useMemo(
    () => ({
      userEmail,
      loading,
      signIn,
      signOut,
    }),
    [userEmail, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};