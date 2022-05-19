import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ImageBackground,
  View,
  Text,
  Pressable,
  StyleSheet,
  Dimensions,
} from 'react-native';

const CatFact = ({navigation, route}) => {
  const handleGoHome = () => {
    navigation.navigate('Home');
  };

  return (
    <ImageBackground
      resizeMode={'repeat'}
      source={require('../static/cats.jpg')}
      imageStyle={{
        opacity: 0.3,
        resizeMode: 'repeat',
        overflow: 'visible',
        height: Dimensions.get('window').height,
        width: '100%',
      }}>
      <SafeAreaView>
        <Pressable
          onPressIn={handleGoHome}
          style={[
            styles.button,
            {
              margin: 10,
              alignSelf: 'flex-start',
            },
          ]}>
          <Text>Go Home</Text>
        </Pressable>
        <View>
          <Text style={styles.greeting}>{`Hello ${route.params.name} :)`}</Text>
          <Text style={styles.catFact}>{`Did you know that ${
            route.params.facts.fact[0].toLowerCase() +
            route.params.facts.fact.slice(1, -1)
          }?`}</Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default CatFact;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#e0e0e0',
    padding: 15,
    borderRadius: 3,
    borderWidth: 0.5,
    borderColor: '#acacac',
  },
  greeting: {
    fontSize: 80,
    fontWeight: '600',
    margin: 20,
    color: 'black',
  },
  catFact: {
    backgroundColor: '#535353',
    fontSize: 25,
    color: 'white',
    marginLeft: 40,
    marginRight: 40,
    borderRadius: 3,
    padding: 10,
  },
});
