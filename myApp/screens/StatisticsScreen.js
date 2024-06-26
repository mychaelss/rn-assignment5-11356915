import React from 'react';
import { View, Text, StyleSheet,StatusBar } from 'react-native';
import { useTheme } from '../theme-context';

const StatisticsScreen = () => {
  const { isDarkMode } = useTheme();

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text style={[styles.title, isDarkMode && styles.darkText]}>Statistics</Text>
      <View style={styles.statisticsContainer}>
        <Text style={[styles.statisticsText, isDarkMode && styles.darkText]}>Statistics content </Text>
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
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  darkText: {
    color: '#fff',
  },








});

export default StatisticsScreen;