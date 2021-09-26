import React from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import styles from './styles';
import Icon from '../Icon/index';

import {ScrollView} from 'react-native-gesture-handler';
const AppModal = ({
  modalTitle,
  modalBody,
  modalFooter,
  modalVisibilty,
  setModalVisibility,
}) => {
  console.log('modalVisibilty====>>', modalVisibilty);
  return (
    <View>
      <Modal visible={modalVisibilty} transparent>
        <TouchableOpacity
          style={styles.wrapper}
          onPress={() => setModalVisibility(false)}>
          <View style={styles.modalView}>
            <ScrollView>
              <View style={styles.header}>
                <TouchableOpacity onPress={()=>setModalVisibility(false)}>
                <Icon size={21} type="evil" name="close" />
                </TouchableOpacity>
                <Text>{modalTitle || 'RNContacts'} </Text>
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

export default AppModal;
