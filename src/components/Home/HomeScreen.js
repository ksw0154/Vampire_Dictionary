import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import Header from '../../common/Header';
import MenuList from './MenuList';

const HomeScreen = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={{backgroundColor: 'white'}} />
      <SafeAreaView style={{backgroundColor: 'black'}}>
        <ScrollView>
          <Header />
          <MenuList navigation={navigation} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
