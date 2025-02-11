import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');

const Services = () => {
  const services = [
    {
      id: 1,
      name: "Drone Spray",
      price: "₹400",
      image: require('../assets/vurimi_ai.png'),
    },
    {
      id: 2,
      name: "Soil Testing",
      price: "₹800",
      image: require('../assets/vurimi_ai.png'),
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Our Services</Text>
      <View style={styles.cardContainer}>
        {services.map((service, index) => (
          <Card key={service.id} style={[styles.card, index === services.length - 1 && styles.lastCard]}>
            <View style={styles.imageContainer}>
              <Image source={service.image} style={styles.image} />
            </View>
            <Card.Content style={styles.cardContent}>
              <Text style={styles.serviceName}>{service.name}</Text>
              <Text style={styles.servicePrice}>{service.price}</Text>
              <View style={styles.rating}>
                <Icon name="star" size={16} color="#FFD700" />
                <Icon name="star" size={16} color="#FFD700" />
                <Icon name="star" size={16} color="#FFD700" />
                <Icon name="star" size={16} color="#FFD700" />
                <Icon name="star-border" size={16} color="#D3D3D3" />
              </View>
              <Text style={styles.serviceDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna non tellus feugiat condimentum.
              </Text>
            </Card.Content>
            <Card.Actions style={styles.cardActions}>
              <Button mode="contained" style={styles.button}>
                <Text style={styles.font}>Book a Slot</Text>
              </Button>
            </Card.Actions>
          </Card>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 12, // Reduced space between header and "Our Services"
    fontFamily: 'Poppins-Bold', // Apply custom font (Poppins-Bold)
  },
  cardContainer: {
    flexDirection: 'column',
  },
  card: {
    width: '100%',
    marginBottom: 16,
    elevation: 4,
  },
  lastCard: {
    marginBottom: 75, // Adjusted for last card
  },
  imageContainer: {
    overflow: 'hidden',
    borderRadius: 8,
  },
  image: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  cardContent: {
    paddingVertical: 8,
  },
  serviceName: {
    fontSize: 18,
    marginBottom: 4,
    fontFamily: 'Poppins-Bold', // Apply custom font (Poppins-Bold)
  },
  servicePrice: {
    fontSize: 16,
    color: '#888',
    marginBottom: 8,
    fontFamily: 'Poppins-Regular', // Apply custom font (Poppins-Regular)
  },
  serviceDescription: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'Poppins-Regular', // Apply custom font (Poppins-Regular)
  },
  cardActions: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  button: {
    marginTop: 8,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8, // Add margin to separate rating from the description
  },
  font:{
    fontFamily: 'Poppins-Bold',
  }
});

export default Services;