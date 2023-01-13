import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';
import { Input } from '../../atoms/Input';

export function InputText({ placeHolder, value, onChangeText }) {
  return (
    <View style={styles.inputArea}>
     
      <Input
        placeholder={ placeHolder }
        placeholderTextColor='rgba(52,52,52,0.8)'
        value={value}
        onChangeText={onChangeText}
      />

    </View>
  );
}

