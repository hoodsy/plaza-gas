import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Text from '../components/Text';
import Nav from '../components/Nav';
import { colors, padding, margin } from '../constants/theme';

export default function Home() {
  let [active, toggleActive] = useState(true);

  const symbol = active ? '$' : '€';

  return (
    <View style={styles.container}>
      <Nav active={active} handleToggleActive={toggleActive} />
      <View style={styles.feeContainer}>
        <Text style={styles.speedLabel}>Base Fee</Text>
        <Text style={styles.fee}>{symbol}8.31</Text>
        <Text style={styles.label}>+{symbol}1.23 (+5.21%) 24h</Text>
      </View>
      <View style={styles.speedRow}>
        <View style={styles.speedCol}>
          <Text style={styles.speedLabel}>Fastest</Text>
          <Text style={styles.label}>Priority 1.6 ~30s</Text>
        </View>
        <Text style={styles.speed}>{symbol}10.26</Text>
      </View>
      <View style={styles.speedRow}>
        <View style={styles.speedCol}>
          <Text style={styles.speedLabel}>Normal</Text>
          <Text style={styles.label}>Priority 2.1 ~1m49s</Text>
        </View>
        <Text style={styles.speed}>{symbol}9.72</Text>
      </View>
      <View style={styles.speedRow}>
        <View style={styles.speedCol}>
          <Text style={styles.speedLabel}>Slowest</Text>
          <Text style={styles.label}>Priority 3.4 ~2m30s</Text>
        </View>
        <Text style={styles.speed}>{symbol}8.91</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: padding[6],
    backgroundColor: colors.black,
  },
  feeContainer: {
    flexDirection: 'column',
    marginTop: margin[12],
    marginBottom: margin[12],
  },
  speedRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: margin[6],
  },
  speedCol: {
    flexDirection: 'column',
  },
  fee: {
    fontSize: 72,
  },
  speed: {
    fontSize: 32,
  },
  speedLabel: {
    fontSize: 24,
  },
  label: {
    fontSize: 12,
    fontFamily: 'Manrope_700Bold',
    fontWeight: 'bold',
    opacity: 0.5,
  },
});
