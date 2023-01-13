import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';
import { Input } from '../../atoms/Input';
import { Button } from '../../atoms/Button';


export function InputPassword({ placeHolder , value, onChangeText, handleVisible, isVisible}) {
  return (
    <View style={styles.inputArea}>
     
      <Input
        placeholder={placeHolder}
        placeholderTextColor='rgba(52,52,52,0.8)'
        secureTextEntry={isVisible}
        value={value}
        onChangeText={onChangeText}
      />

      <Button
        handleVisible={handleVisible}
        isVisible={isVisible}
      />
    
    </View>
  );
}

