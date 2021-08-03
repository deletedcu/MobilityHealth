import React, { useEffect } from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import i18n from '../locales';
import {useAuthorize} from '../hooks';

const AuthorizeScreen = ({navigation}) => {
  const {isAuthorized, authorizeF} = useAuthorize();

  useEffect(() => {
    authorizeF();
  }, []);

  useEffect(() => {
    if (isAuthorized) {
      navigation.replace('Home');
    }
  }, [isAuthorized]);

  return (
    <View style={style.container}>
      <Button mode='contained' onPress={() => authorizeF()}>{i18n.t('authorize')}</Button>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AuthorizeScreen;