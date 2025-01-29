import React, { useState, useEffect, useRef } from "react";
import { 
  FlatList, 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  Dimensions, 
  TouchableOpacity, 
  Animated, 
  TouchableWithoutFeedback 
} from "react-native";
import MenuIcon from 'react-native-vector-icons/Entypo';
import AboutIcon from 'react-native-vector-icons/Ionicons';
import ProfileIcon from 'react-native-vector-icons/FontAwesome';
import ContactIcon from 'react-native-vector-icons/AntDesign';

const { width, height } = Dimensions.get("window");

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);
  const [menuVisible, setMenuVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(-250)).current;

  const HomeScreenData = [
    { id: "01", image: require("../assets/drone1.png") },
    { id: "02", image: require("../assets/drone2.png") },
    { id: "03", image: require("../assets/drone3.png") },
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

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    Animated.timing(slideAnim, {
      toValue: menuVisible ? -250 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
    </View>
  );

  const renderLines = () => (
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

  const closeMenu = () => setMenuVisible(false);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={toggleMenu}>
          <MenuIcon name="menu" size={30} color="black" style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Vurimi AI Global Services</Text>
      </View>

      {/* Close the menu if the user clicks outside */}
      {menuVisible && (
        <TouchableWithoutFeedback onPress={closeMenu}>
          <View style={styles.overlay} />
        </TouchableWithoutFeedback>
      )}

      {/* Sidebar Menu */}
      <Animated.View style={[styles.menuContainer, { transform: [{ translateX: slideAnim }] }]}>
        <TouchableOpacity style={styles.closeButton} onPress={toggleMenu}>
          <Text style={styles.closeText}>X</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => alert("About Us")}>
          <AboutIcon name="ios-information-circle-outline" size={24} color="black" style={styles.menuIcon} />
          <Text style={styles.menuText}>About Us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => alert("My Profile")}>
          <ProfileIcon name="user-circle" size={24} color="black" style={styles.menuIcon} />
          <Text style={styles.menuText}>My Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => alert("Contact Us")}>
          <ContactIcon name="contacts" size={24} color="black" style={styles.menuIcon} />
          <Text style={styles.menuText}>Contact Us</Text>
        </TouchableOpacity>
      </Animated.View>

      <View style={styles.sliderContainer}>
        <FlatList
          ref={flatListRef}
          data={HomeScreenData}
          renderItem={renderItem}c
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
    paddingHorizontal: 10,
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
    justifyContent: "center",
    alignSelf: "center",
  },
  slider: {
    width: width,
    height: height * 0.25,
    alignSelf: "center",
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
    width: "100%",
    position: "absolute",
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
    position: "absolute",
    top: 0,
    left: 0,
    width: 180,
    height: 500,
    backgroundColor: "#8bbc",
    paddingTop: 60,
    paddingLeft: 20,
    elevation: 3,
    zIndex: 1000,
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 15,
  },
  closeText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
  },
  menuText: {
    fontSize: 20,
    color: "black",
    marginLeft: 10,
  },
  menuIcon: {
    marginRight: 10,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: width,
    height: height,
    zIndex: 10,
  },
});
