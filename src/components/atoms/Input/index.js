import React from 'react';
import { TextInput, View } from 'react-native';

import { styles } from './styles';

export function Input({ value, onChangeText,...rest }) {
  return (
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        {...rest}
      />

  );
}
