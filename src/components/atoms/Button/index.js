import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Ionicons as Icon } from '@expo/vector-icons';
import { styles } from './styles';

export function Button({ handleVisible, isVisible }) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={handleVisible}>
      <Icon size={25} name={isVisible ? 'eye' : 'eye-off'} color='#000' />
   </TouchableOpacity>
  );
}
