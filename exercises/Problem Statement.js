import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

const MainPage: () => React$Node = () => {
  return (
    <View style={[styles.mains]}>
      <View style={styles.topHalf}>
        <View style={styles.top}>
          <Text style={[styles.top, {maxHeight: 25}]} />
        </View>
        <View style={styles.profile}>
          <View style={styles.photo}>
            <ImageBackground
              source={require('./img/7.jpg')}
              style={{width: '100%', height: '100%'}}
            />
          </View>
          <Text style={[styles.profileName]}>Your name</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.btnAlign}>
            <Text
              style={[styles.btns, {backgroundColor: '#ba7d71', padding: 25}]}>
              Explore
            </Text>
            <Text style={[styles.btns, {padding: 25}]}>Follow</Text>
          </View>
        </View>
      </View>
      <View style={styles.top}>
        <Text style={[styles.top, {maxHeight: 13}]} />
      </View>
      <View style={styles.bottom}>
        <View style={styles.gallery}>
          <View style={styles.photo}>
            <ImageBackground
              source={require('./img/1.jpg')}
              style={{width: '100%', height: '100%'}}
            />
          </View>
          <View style={styles.photo}>
            <ImageBackground
              source={require('./img/2.jpg')}
              style={{width: '100%', height: '100%'}}
            />
          </View>
          <View style={styles.photo}>
            <ImageBackground
              source={require('./img/3.jpg')}
              style={{width: '100%', height: '100%'}}
            />
          </View>
        </View>
        <View style={styles.gallery}>
          <View style={styles.photo}>
            <ImageBackground
              source={require('./img/4.jpg')}
              style={{width: '100%', height: '100%'}}
            />
          </View>
          <View style={styles.photo}>
            <ImageBackground
              source={require('./img/5.jpg')}
              style={{width: '100%', height: '100%'}}
            />
          </View>
          <View style={styles.photo}>
            <ImageBackground
              source={require('./img/6.jpg')}
              style={{width: '100%', height: '100%'}}
            />
          </View>
        </View>
      </View>
      <View style={styles.bottomBar} />
    </View>
  );
};

const styles = StyleSheet.create({
  top: {
    backgroundColor: '#15576b',
  },
  topHalf: {
    flex: 1.05,
    justifyContent: 'space-evenly',
  },
  mains: {
    flex: 1,
    flexDirection: 'column',
  },
  photo: {
    width: 100,
    height: 100,
    backgroundColor: '#ae8234',
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: 'black',
  },
  profile: {
    justifyContent: 'space-around',
    flex: 1,
  },
  profileName: {
    height: 30,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#ae8234',
    width: 150,
    textAlign: 'center',
    color: 'white',
    fontStyle: 'italic',
    fontSize: 20,
  },
  btnAlign: {
    flexDirection: 'row',
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btns: {
    height: 78,
    flex: 1,
    backgroundColor: '#509bc7',
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#C6E5AD',
  },
  gallery: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1,
  },
  bottomBar: {
    backgroundColor: '#509bc7',
    height: 60,
  },
});

export default MainPage;
