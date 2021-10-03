import React, {forwardRef} from 'react';
import {Text, View,TouchableOpacity} from 'react-native';
// import {TouchableOpacity} from 'react-native-gesture-handler';
import RBSheet from 'react-native-raw-bottom-sheet';
import colors from '../../../assets/theme/colors';
import Icon from '../Icon';
import styles from './styles';
import imagePickerCropper from "react-native-image-crop-picker";


const ImagePicker = forwardRef(({fileSelected}, ref) => {
  const optionsBottom = [
    {
      name: 'Take from camera',
      icon: <Icon name="camera" color={colors.grey} size={17}/>,
      onPress: () => {
        imagePickerCropper.openCamera({
            width: 300,
            height: 300,
            cropping: true,
            freeStyleCropEnabled: true,
        }).then((images)=>{
            fileSelected(images);
        }).catch((error)=>{
            console.log(error);
        })
      },
    },
    {
      name: 'Choose from gallery',
      icon: <Icon name="image" color={colors.grey} size={17}/>,
      onPress: () => {
        imagePickerCropper.openPicker({
            width: 300,
            height: 300,
            cropping: true,
            freeStyleCropEnabled: true,
        }).then((images)=>{
            fileSelected(images);
        }).catch((error)=>{
            console.log(error);
        })
      },
    },
  ];
  return (
    <RBSheet
      ref={ref}
      height={190}
      dragFromTopOnly={true}
      closeOnDragDown={true}
      openDuration={250}
      customStyles={{
        container: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,

        },
      }}>
      <View style={styles.optionsWrapper}>
        {optionsBottom.map(({name, icon, onPress}) => (
            <TouchableOpacity
            style={styles.pickerOption}
            key={name}
            onPress={onPress}>
              {icon}
              <Text style={styles.text}>{name}</Text>
            </TouchableOpacity>
        ))}
      </View>
    </RBSheet>
  );
});

export default ImagePicker;
