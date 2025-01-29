import React from 'react';
import { SafeAreaView, FlatList, View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Services from '../components/Services';
import Reviews from '../components/Reviews';

const HomeScreen = () => {
  const data = [
    { key: 'header', component: <Header /> },
    
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      {item.component}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        showsVerticalScrollIndicator={false}
        decelerationRate="normal"
        snapToAlignment="start"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
    padding: 20,
   
  },
});

export default HomeScreen;