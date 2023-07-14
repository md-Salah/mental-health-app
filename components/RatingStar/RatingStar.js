import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const RatingStar = ({ rating }) => {
  const filledStars = Math.floor(rating);
  const halfStar = rating - filledStars >= 0.5;

  return (
    <View style={styles.container}>
      {Array.from({ length: filledStars }, (_, index) => (
        <Ionicons key={index} name="star" size={24} color="gold" />
      ))}
      {halfStar && <Ionicons name="star-half" size={24} color="gold" />}
      {Array.from({ length: 5 - Math.ceil(rating) }, (_, index) => (
        <Ionicons key={index} name="star-outline" size={24} color="gold" />
      ))}
      <Text style={styles.rating}>{'(' + rating + ')'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  rating: {
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 20,
    textAlignVertical: 'center',
    height: '100%'
  },
});

export default RatingStar;
