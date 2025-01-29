import React, { useEffect } from 'react';
import { Text, Image, SafeAreaView, StyleSheet, View, Animated } from 'react-native';

function WelcomeScreen(): React.JSX.Element {
  const fadeAnim = new Animated.Value(0); // Animation for fade-in

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1, // End value
      duration: 2000, // Duration in ms
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);


  return (
    <SafeAreaView style={styles.welcomeContainer}>
      <Animated.View style={[styles.textContainer, { opacity: fadeAnim }]}>
        <Text style={styles.welcomeText}>Welcome to Vurimi AI</Text>
      </Animated.View>
      <Animated.Image
        source={require('../assets/vurimi_ai.png')}
        style={[styles.welcomeImage, { opacity: fadeAnim }]}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  welcomeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF7043', // Light gray background
  },
  textContainer: {
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333', // Dark gray text color
    textAlign: 'center',
  },
  welcomeImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#ccc',
  },
});

export default WelcomeScreen;