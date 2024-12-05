import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  Platform,
} from 'react-native';
import React from 'react';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import colors from 'src/colors/colors';

import PropTypes from 'prop-types';

const Details = ({ route, navigation }) => {
  const { item } = route.params;

  const renderIngedientsItem = (param) => {
    console.log('renderIngedientsItem', param);
    const { item: itemRender, index } = param;
    return (
      <View style={[styles.ingredientItemWrapper, { marginLeft: index === 0 ? 20 : 0 }]}>
        <Image source={itemRender.image} width={80} height={80} style={styles.ingredientImage} />
      </View>
    );
  };

  /** web ios android */
  console.log('Platform.OS', Platform.OS);

  console.log('Details', item);

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.headerLeft}>
              <Feather name="chevron-left" size={18} color={colors.textDark} />
            </View>
          </TouchableOpacity>
          <View style={styles.headerRight}>
            <MaterialCommunityIcons name="star" size={18} color={colors.white} />
          </View>
        </View>
      </SafeAreaView>

      {/** Titles */}
      <View style={styles.titlesWrapper}>
        <Text style={styles.title}>{item.title}</Text>
      </View>

      {/** Price */}
      <View style={styles.pricesWrapper}>
        <Text style={styles.price}>{item.price}</Text>
      </View>

      {/** Pizza info */}
      <View style={styles.infoWrapper}>
        <View style={styles.infoLeftWrapper}>
          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTitle}>Size</Text>
            <Text style={styles.infoItemText}>
              {item.sizeName} {item.sizeNumber}
            </Text>
          </View>
          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTitle}>Crust</Text>
            <Text style={styles.infoItemText}>{item.crust}</Text>
          </View>
          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTitle}>Delivery in</Text>
            <Text style={styles.infoItemText}>{item.deliveryTime} min</Text>
          </View>
        </View>
        <View style={styles.infoRightWrapper}>
          <Image source={item.image} width={300} height={180} style={styles.itemImage} />
        </View>
      </View>

      {/** Ingredients */}
      <View style={styles.ingredientsWrapper}>
        <Text style={styles.ingredientsTitle}>Ingredients</Text>
        <View style={styles.ingredientsListWrapper}>
          <FlatList
            data={item.ingredients}
            renderItem={renderIngedientsItem}
            keyExtractor={(i) => i.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>

      {/** Place an order */}
      <TouchableOpacity onPress={() => alert('Yout order has been placed')}>
        <View style={styles.orderWrapper}>
          <Text style={styles.orderText}>Place an order</Text>
          <Feather name="chevron-right" size={18} color={colors.black} />
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

Details.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: Platform.OS === 'web' ? PropTypes.string.isRequired : PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        weight: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.string.isRequired,
        sizeName: PropTypes.string.isRequired,
        sizeNumber: PropTypes.number.isRequired,
        crust: PropTypes.string.isRequired,
        deliveryTime: PropTypes.number.isRequired,
        ingredients: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image:
              Platform.OS === 'web' ? PropTypes.string.isRequired : PropTypes.number.isRequired,
          })
        ).isRequired,
      }),
    }).isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerLeft: {
    borderColor: colors.textLight,
    borderWidth: 2,
    padding: 12,
    borderRadius: 10,
  },
  headerRight: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 10,
    borderColor: colors.primary,
    borderWidth: 2,
  },
  titlesWrapper: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    color: colors.textDark,
    width: '75%',
  },
  pricesWrapper: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  price: {
    color: colors.price,
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
  },
  infoWrapper: {
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoLeftWrapper: {
    paddingLeft: 20,
  },
  infoRightWrapper: {},
  infoItemWrapper: {
    marginBottom: 20,
  },
  infoItemTitle: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    color: colors.textLight,
  },
  infoItemText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 18,
    color: colors.textDark,
  },
  itemImage: {
    resizeMode: 'contain',
    marginLeft: 50,
    width: 300,
    height: 180,
  },
  ingredientsWrapper: {
    marginTop: 40,
  },
  ingredientsTitle: {
    paddingHorizontal: 20,
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    color: colors.textDark,
  },
  ingredientsListWrapper: {
    paddingVertical: 20,
  },
  ingredientItemWrapper: {
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginRight: 15,
    borderRadius: 15,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  ingredientImage: {
    resizeMode: 'contain',
    width: 80,
    height: 80,
  },
  orderWrapper: {
    marginTop: 60,
    marginHorizontal: 20,
    backgroundColor: colors.primary,
    borderRadius: 50,
    paddingVertical: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    marginRight: 10,
  },
});

export default Details;
