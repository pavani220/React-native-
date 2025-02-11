import React, { useState, useEffect, useRef } from "react";
import { FlatList, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from "react-native";
import MenuIcon from 'react-native-vector-icons/Entypo';

const { width, height } = Dimensions.get("window");

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [menuVisible, setMenuVisible] = useState(false); // State to manage menu visibility
  const flatListRef = useRef(null);

  const HomeScreenData = [
    {
      id: "01",
      image: require('../assets/vurimi_ai.png'),
    },
    {
      id: "02",
      image: require("../assets/vurimi_ai.png"),
    },
    {
      id: "03",
      image: require("../assets/vurimi_ai.png"),
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % HomeScreenData.length);
    }, 5000);

    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({ animated: true, index: activeIndex });
    }

    return () => clearInterval(interval);
  }, [activeIndex]);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Image source={item.image} style={styles.image} />
      </View>
    );
  };

  const renderLines = () => {
    return (
      <View style={styles.linesContainer}>
        {HomeScreenData.map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.line, activeIndex === index ? styles.activeLine : null]}
            onPress={() => setActiveIndex(index)}
          />
        ))}
      </View>
    );
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const Menu = () => (
    <View style={styles.menuContainer}>
      <TouchableOpacity style={styles.menuItem} onPress={() => alert('About Us')}>
        <Text style={styles.menuText}>About Us</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => alert('My Profile')}>
        <Text style={styles.menuText}>My Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => alert('Contact Us')}>
        <Text style={styles.menuText}>Contact Us</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={toggleMenu}>
          <Text>
            <MenuIcon name="menu" size={30} color="black" style={styles.icon} />
          </Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Vurimi AI Global Services</Text>
      </View>

      {menuVisible && <Menu />} {/* Render the menu if visible */}

      <View style={styles.sliderContainer}>
        <FlatList
          ref={flatListRef}
          data={HomeScreenData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          style={styles.slider}
          extraData={activeIndex}
          initialScrollIndex={activeIndex}
        />

        {renderLines()}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingTop: 5,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: width,
    paddingHorizontal: 2,
    marginTop: 5,
    paddingBottom: 5,
  },
  headerText: {
    fontSize: 22,
    fontFamily: "Poppins-Bold",
    color: "green",
    textAlign: "center",
    flex: 1,
  },
  icon: {
    padding: 8,
  },
  sliderContainer: {
    width: width,
    height: height * 0.3,
    justifyContent: 'center',
    alignSelf: 'center', // Center the slider

  },
  slider: {
    width: width,
    height: height * 0.25,
    alignSelf: 'center', // Center the slider
  },
  itemContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: width,
  },
  image: {
    width: width * 0.9,
    height: height * 0.25,
    resizeMode: "cover",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  linesContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 4,
    width: '100%',
    position: 'absolute',
    bottom: 5,
  },
  line: {
    width: 24,
    height: 4,
    margin: 5,
    borderRadius: 4,
    backgroundColor: "#bbb",
  },
  activeLine: {
    backgroundColor: "black",
  },
  menuContainer: {
    position: 'absolute',
    top: 60, // Adjust based on your header height
    left: 15,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 5,
    zIndex: 1000,
  },
  menuItem: {
    padding: 10,
  },
  menuText: {
    fontSize: 16,
    color: 'black',
  },
});