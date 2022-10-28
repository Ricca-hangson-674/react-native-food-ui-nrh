import { View, Image, StyleSheet, SafeAreaView, Text } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';

// import categoriesData from 'src/data/categoriesData';
// import popularData from 'src/data/popularData';
import colors from 'src/colors/colors';

const avatar = require('src/assets/images/profile.jpg');

const Home = () => (
  <View style={styles.container}>
    {/** HEADER */}
    <SafeAreaView>
      <View style={styles.headerWrapper}>
        <Image source={avatar} style={styles.profileImage} />
        <Feather name="menu" size={24} color={colors.textDark} />
      </View>
    </SafeAreaView>

    {/** TITLES */}
    <View style={styles.titlesWrapper}>
      <Text style={styles.titlesSubtitle}>Food</Text>
      <Text style={styles.titlesTitle}>Delivery</Text>
    </View>

    {/** TITLES */}
    <View style={styles.searchWrapper}>
      <Feather name="search" size={16} color={colors.textDark} />
      <View style={styles.search}>
        <Text style={styles.searchText}>Search</Text>
      </View>
    </View>
  </View>
);

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  titlesWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  titlesSubtitle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    color: colors.textDark,
  },
  titlesTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    color: colors.textDark,
    marginTop: 5,
  },
});
