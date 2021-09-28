import React from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import styles from './styles';
import Icon from '../Icon/index';
import PropTypes from 'prop-types';

import {ScrollView} from 'react-native-gesture-handler';
const   AppModal = ({
  title,
  modalBody,
  modalFooter,
  modalVisible,
  setModalVisible,
  closeOnTouchOutside,

}) => {
  console.log('modalVisible====>>', modalVisible);
  return (
    <View>
      <Modal visible={modalVisible} transparent>
        <TouchableOpacity
          style={styles.wrapper}
          onPress={() =>{
            if(closeOnTouchOutside){
              setModalVisible(false);
            }
          }}>
          <View style={styles.modalView}>
            <ScrollView>
              <View style={styles.header}>
                <TouchableOpacity onPress={()=>setModalVisible(false)}>
                <Icon size={21} type="evil" name="close" />
                </TouchableOpacity>
                <Text>{title || 'RNContacts'} </Text>
                <View />
                <View />
                <View />
                <View />
              </View>
              <View style={styles.footerSeparator} />
              <View style={styles.body}>{modalBody}</View>
              <View style={styles.footer}>
                {modalFooter}
                {!modalFooter && (
                  <View>
                    <>
                      <View style={styles.footerSeparator} />
                      <View style={styles.footerItems}>
                        <View style={styles.footer}>
                          <Text style={styles.footerText}>Privacy Policy</Text>
                          <View style={styles.termsView} />
                          <Text style={styles.footerText}>
                            Terms of Service
                          </Text>
                        </View>
                      </View>
                    </>
                  </View>
                )}
              </View>
            </ScrollView>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

AppModal.propTypes = {
closeOnTouchOutside: PropTypes.bool,
}
AppModal.defaultProps = {
  closeOnTouchOutside:true,
}
export default AppModal;
