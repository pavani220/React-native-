import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'; // Import from react-native-vector-icons
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
const Navbar = () => {
   // Initialize navigation


  return (
    <View style={styles.navbar}>
      <TouchableOpacity style={styles.navbarItem} onPress={() => navigation.navigate('HomeScreen')}>
        <Icon name="home" size={27} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navbarItem} onPress={() => navigation.navigate('ProfileScreen')}>
        <Icon name="user" size={27} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navbarItem} onPress={() => navigation.navigate('ProfileScreen')}>
        <Icon name="customerservice" size={27} color="black" />
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    position: 'absolute',         // Fix navbar at the bottom
    bottom: 0,                    // Pin it to the bottom
    left: 0,                      // Stretch from left edge
    right: 0,                     // Stretch to right edge
    flexDirection: 'row',         // Arrange items horizontally
    justifyContent: 'space-around',  // Distribute the items evenly
    backgroundColor: '#fff',      // White background
    borderTopWidth: 1,            // Border to separate navbar from content
    borderTopColor: '#ccc',       // Light gray border color
    paddingVertical: 10,          // Vertical padding for navbar
    paddingBottom: 10,            // Extra space at the bottom (adjust as needed)
    height: 60,                   // Set a fixed height for the navbar
  },
  navbarItem: {
    flex: 1,                      // Make each icon take equal space
    justifyContent: 'center',     // Vertically center the icon
    alignItems: 'center',         // Horizontally center the icon
  },
});

export default Navbar;