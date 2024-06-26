import React from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, StatusBar } from 'react-native';
import { useTheme } from '../theme-context';

const SettingsScreen = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text style={[styles.title, isDarkMode && styles.darkTitle]}>Settings</Text>
      <TouchableOpacity style={styles.item}>
        <Text style={[styles.itemText, isDarkMode && styles.darkItemText]}>Language</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={[styles.itemText, isDarkMode && styles.darkItemText]}>My Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={[styles.itemText, isDarkMode && styles.darkItemText]}>Contact Us</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={[styles.itemText, isDarkMode && styles.darkItemText]}>Change Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={[styles.itemText, isDarkMode && styles.darkItemText]}>Privacy Policy</Text>
      </TouchableOpacity>
      <View style={styles.switchContainer}>
        <Text style={[styles.switchText, isDarkMode && styles.darkSwitchText]}>Theme</Text>
        <Switch value={isDarkMode} onValueChange={toggleTheme} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  darkContainer: {
    backgroundColor: '#000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  darkTitle: {
    color: '#fff',
  },
  item: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 18,
  },
  darkItemText: {
    color: '#fff',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  switchText: {
    fontSize: 18,
  },
  darkSwitchText: {
    color: '#fff',
  },
});

export default SettingsScreen;