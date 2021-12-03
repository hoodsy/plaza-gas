import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

import Text from '../components/Text';
import { colors, padding } from '../constants/theme';

export default function Nav(props: any) {
  let buttonLeft = { ...styles.button, ...styles.buttonLeft };
  let buttonRight = { ...styles.button, ...styles.buttonRight };

  if (props.active) buttonLeft = { ...buttonLeft, opacity: 1 };
  else buttonRight = { ...buttonRight, opacity: 1 };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/logo.png')}
        resizeMode="contain"
      />
      <TouchableOpacity onPress={() => props.handleToggleActive(true)}>
        <Text style={buttonLeft}>$</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.handleToggleActive(false)}>
        <Text style={buttonRight}>€</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingTop: padding[6],
  },
  logo: {
    height: 20,
    width: 166,
    marginRight: 'auto',
  },
  button: {
    margin: 0,
    paddingTop: padding[1],
    paddingBottom: padding[1],
    paddingLeft: padding[2],
    paddingRight: padding[2],
    borderWidth: 1,
    borderColor: colors.white,
    opacity: 0.5,
  },
  buttonLeft: {
    borderBottomLeftRadius: 4,
    borderTopLeftRadius: 4,
  },
  buttonRight: {
    borderBottomRightRadius: 4,
    borderTopRightRadius: 4,
  },
});
