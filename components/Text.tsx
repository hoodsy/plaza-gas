import * as React from 'react';
import { Text as DefaultText } from 'react-native';

import { colors } from '../constants/theme';

export default function Text(props: DefaultText['props']) {
  return (
    <DefaultText
      {...props}
      style={[
        props.style,
        { fontFamily: 'Manrope_400Regular', color: colors.white },
      ]}
    />
  );
}
