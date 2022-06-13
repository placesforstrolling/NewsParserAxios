import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Pressable,
  ScrollView,
  Dimensions,
  SafeAreaView,
} from 'react-native';

const Header = ({navigation}) => {

    return (
        <View style={styles.header}>
          <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('News')}>
            <Text style={styles.btnText}>Watch News</Text>
          </TouchableOpacity>
          <Text style={styles.iconWrapper}>
            <Icon name='newspaper' style={styles.icon}/>
          </Text>
        </View>
      
    );
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 150,
  },
  iconWrapper: {
    position: 'absolute',
    bottom: 100
  },
  btnText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#fff'
  },
  btn: {
    position: 'absolute',
    top: 200,
    height: 60,
    backgroundColor: 'rgb(36,160,237)',
    paddingLeft: 40,
    paddingRight: 40,
    justifyContent: 'center',
    borderRadius: 10,
  },
  header: {
    backgroundColor: '#eee',
    flex: 1,
    alignItems: 'center'
  }
});

export default Header;