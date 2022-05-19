import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ImageBackground,
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
} from 'react-native';
import {catFactsAPI} from '../utils/api';

const Home = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [catFacts, setCatFacts] = useState(null);

  const handleSubmit = () => {
    navigation.navigate('Your Cat Fact', {
      name: userName,
      facts: catFacts,
    });
  };

  useEffect(() => {
    catFactsAPI().then(data => {
      setCatFacts(data);
    });
  }, []);

  return (
    <SafeAreaView>
      <ImageBackground
        source={require('../static/catPlaying.jpg')}
        style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          top: 250,
        }}></ImageBackground>
      <View>
        <Text style={styles.header}>Get awesome cat facts!</Text>
      </View>

      <View style={styles.input}>
        <TextInput
          style={styles.inputField}
          onChangeText={setUserName}
          placeholder="Enter your username"></TextInput>
        <Pressable style={styles.button} onPressIn={handleSubmit}>
          <Text
            style={{
              alignSelf: 'center',
            }}>
            Submit
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    fontSize: 40,
    fontWeight: '500',
    textAlign: 'center',
    color: 'black',
    padding: 20,
    margin: 10,
  },
  input: {
    position: 'relative',
    top: 0,
    flexDirection: 'row',
    justifyItems: 'center',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
    marginLeft: 65,
    marginRight: 65,
  },
  inputField: {
    backgroundColor: '#efefef',
    borderWidth: 0.5,
    borderColor: 'black',
    borderRadius: 3,
    zIndex: 100,
    paddingLeft: 10,
    paddingRight: 10,
  },
  button: {
    backgroundColor: '#e0e0e0',
    padding: 15,
    borderRadius: 3,
    borderWidth: 0.5,
    borderColor: '#acacac',
  },
});
