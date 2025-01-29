import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';

const orders = [
  { id: '1', title: 'Order #1001', status: 'Delivered', date: 'Jan 22, 2025', amount: '₹250' },
  { id: '2', title: 'Order #1002', status: 'In Transit', date: 'Jan 20, 2025', amount: '₹150' },
  { id: '3', title: 'Order #1003', status: 'Cancelled', date: 'Jan 18, 2025', amount: '₹320' },
];

const addresses = [
  { id: '1', address: '123, Street Name, Hyderabad, India - 500001' },
  { id: '2', address: '456, Colony Name, Mumbai, India - 400001' },
];

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header - User Details */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Pavani Bandi</Text>
        <Text style={styles.email}>pavani@example.com</Text>
      </View>

      {/* Section: My Orders */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>My Orders</Text>
        <FlatList
          data={orders}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.orderItem}>
              <Text style={styles.orderTitle}>{item.title}</Text>
              <Text style={styles.orderDetails}>
                {item.status} • {item.date} • {item.amount}
              </Text>
            </View>
          )}
        />
      </View>

      {/* Section: Delivery Addresses */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Delivery Addresses</Text>
        <FlatList
          data={addresses}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.addressItem}>
              <Text style={styles.addressText}>{item.address}</Text>
            </View>
          )}
        />
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    backgroundColor: '#4CAF50',
    padding: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#fff',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },
  email: {
    fontSize: 17,
    color: '#fff',
    marginTop: 5,
  },
  section: {
    marginVertical: 15,
    paddingHorizontal: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  orderItem: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    elevation: 2,
  },
  orderTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  orderDetails: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  addressItem: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    elevation: 2,
  },
  addressText: {
    fontSize: 14,
    color: '#333',
  },
  logoutButton: {
    backgroundColor: '#FF5252',
    padding: 15,
    margin: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;