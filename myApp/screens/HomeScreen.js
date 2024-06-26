import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '../theme-context';

const transactions = [
  { id: '1', icon: require('../assets/apple.png'), title: 'Apple Store', category: 'Entertainment', amount: '- $5,99' },
  { id: '2', icon: require('../assets/spotify.png'), title: 'Spotify', category: 'Music', amount: '- $12,99' },
  { id: '3', icon: require('../assets/moneyTransfer.png'), title: 'Money Transfer', category: 'Transaction', amount: '$300' },
  { id: '4', icon: require('../assets/grocery.png'), title: 'Grocery', category: '', amount: '- $88' },
];

const HomeScreen = () => {
  const { isDarkMode } = useTheme();

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image source={require('../assets/profile.png')} style={styles.profileImage} />
          <View style={styles.headerText}>
            <Text style={[styles.greeting, isDarkMode && styles.darkText]}>Welcome back</Text>
            <Text style={[styles.name, isDarkMode && styles.darkText]}>Michael Ocansey</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Icon name="search" size={30} color={isDarkMode ? '#fff' : '#000'} />
        </TouchableOpacity>
      </View>

      <View style={styles.cardContainer}>
        <Image source={require('../assets/Card.png')} style={styles.cardImage} />
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="arrow-up" size={30} color={isDarkMode ? '#fff' : '#000'} />
          <Text style={[styles.actionText, isDarkMode && styles.darkText]}>Sent</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="arrow-down" size={30} color={isDarkMode ? '#fff' : '#000'} />
          <Text style={[styles.actionText, isDarkMode && styles.darkText]}>Receive</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="cash" size={30} color={isDarkMode ? '#fff' : '#000'} />
          <Text style={[styles.actionText, isDarkMode && styles.darkText]}>Loan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="cloud-upload" size={30} color={isDarkMode ? '#fff' : '#000'} />
          <Text style={[styles.actionText, isDarkMode && styles.darkText]}>Topup</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.transactionHeader}>
        <Text style={[styles.transactionTitle, isDarkMode && styles.darkText]}>Transaction</Text>
        <TouchableOpacity>
          <Text style={styles.sellAll}>Sell All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={transactions}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={[styles.transactionItem, isDarkMode && styles.darkTransactionItem]}>
            <Image source={item.icon} style={styles.transactionIcon} />
            <View style={styles.transactionDetails}>
              <Text style={[styles.transactionTitle, isDarkMode && styles.darkText]}>{item.title}</Text>
              <Text style={[styles.transactionCategory, isDarkMode && styles.darkText]}>{item.category}</Text>
            </View>
            <Text style={[styles.transactionAmount, isDarkMode && styles.darkText]}>{item.amount}</Text>
          </View>
        )}
      />
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 39,
    height: 39,
    borderRadius: 25,
  },
  headerText: {
    marginLeft: 10,
  },
  greeting: {
    fontSize: 18,
  },
  darkText: {
    color: '#fff',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  cardContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  cardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  actionButton: {
    alignItems: 'center',
  },
  actionText: {
    marginTop: 5,
  },
  transactionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  transactionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sellAll: {
    color: 'blue',
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  darkTransactionItem: {
    borderBottomColor: '#555',
  },
  transactionIcon: {
    width: 25,
    height: 25,
  },
  transactionDetails: {
    flex: 1,
    marginLeft: 10,
  },
  transactionCategory: {
    color: 'gray',
  },
  transactionAmount: {
    fontWeight: 'bold',
  },
});

export default HomeScreen;