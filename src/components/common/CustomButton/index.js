import React from 'react';
import {View, Text, ScrollView, TextInput, Button, ActivityIndicator} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {baseProps} from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
import colors from '../../../assets/theme/colors';
import styles from './styles';

const CustomButton = ({
  title,
  disabled,
  primary,
  secondary,
  danger,
  grey,
  loading,
  onPress,
  ...props
}) => {
  const getBgColor = () => {

    if (primary) {
      return colors.primary;
    }
    else if (secondary) {
      return colors.secondary;
    }
    else if (danger) {
      return colors.danger;
    }
    else if (disabled) {
      return colors.grey;
    }
  };
  return (
    <TouchableOpacity
        disabled={disabled}
        style={[styles.wrapper, {backgroundColor: getBgColor()}]}
        onPress={onPress}
        {...props}
        >
        <View style={[styles.loaderSection]}>
          {loading && <ActivityIndicator color= {colors.white} />}
          {title && <Text style={{color: disabled ? "black" : colors.white, paddingLeft: loading ? 5 : 0}}>{title}</Text>}
        </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
