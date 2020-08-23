import React from 'react';
import {StyleSheet, View} from 'react-native';

const Card = (props) => {
  return <View style={{...styles.card, ...props.style}}>{props.children}</View>;
};

const styles = StyleSheet.create({
  card: {
    shadowColor: 'rgba(0,0,0,0)',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: 'white',
    elevation: 8,
    padding: 20,
    borderRadius: 10,
  },
});

export default Card;
