import React, { Component } from 'react';
import { Image, Platform, StyleSheet, Text, View, TouchableHighlight, ScrollView } from 'react-native'; 
import update from 'immutability-helper';

export default class App extends Component<{}> {

  constructor(props) {
    super(props);
    this.state = {
      showThumbnail: [true, true, true, true, true, true]
    };
  }

  handleProfileCardPress = (index) => {
    const { showThumbnail } = this.state;
    this.setState({
      showThumbnail: update(showThumbnail, {
        [index]: { $set: !showThumbnail[index] }
      })
    });
  };

  render() {
    const { showThumbnail } = this.state;

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.gridContainer}>
          {showThumbnail.map((isThumbnail, index) => (
            <View key={index} style={styles.cardWrapper}>
              {/* This shrinks the 'hitbox' so cards don't overlap and trigger the wrong index.*/}
              <View style={{ transform: [{ scale: isThumbnail ? 0.3 : 0.45 }] }}>
                <TouchableHighlight 
                  onPress={() => this.handleProfileCardPress(index)} 
                  underlayColor="transparent"
                  // Ensure the touchable area matches the card size
                  style={styles.touchableArea}>
                  
                  <View style={styles.cardContainer}>
                    <View style={styles.cardImageContainer}>
                      <Image style={styles.cardImage}
                             source={require('../../assets/images/user.png')}/>
                    </View>
                    <View>
                      <Text style={styles.cardName}>John Doe</Text>
                    </View>
                    <View style={styles.cardOccupationContainer}>     
                      <Text style={styles.cardOccupation}>React Native Developer</Text>
                    </View>
                    <View>
                      <Text style={styles.cardDescription}>     
                        John is a really great JavaScript developer. He
                        loves using JS to build React Native applications
                        for iOS and Android.
                      </Text>
                    </View>
                  </View>
                </TouchableHighlight>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    );
  }
}

const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({
    container: {
        paddingVertical: 50,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    gridContainer: {
        width: 300, 
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    cardWrapper: {
        width: 140, 
        height: 150, 
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        overflow: 'visible' 
    },
    touchableArea: {
        width: 300,
        height: 400,
        borderRadius: 20,
    },
    cardContainer: {
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 3,
        borderStyle: 'solid',
        borderRadius: 20,
        backgroundColor: profileCardColor,
        width: 300,
        height: 400,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { height: 10 },
                shadowOpacity: 1
            },
            android: {
                elevation: 15
            }
        })
    },
    cardImageContainer: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: 'black',
        width: 120,
        height: 120,
        borderRadius: 60,
        marginTop: 30,
        paddingTop: 15,
    },
    cardImage: {
        width: 80,
        height: 80
    },
    cardName: {    
        color: 'white',
        marginTop: 30,
    },
    cardOccupationContainer: {     
        borderColor: 'black',
        borderBottomWidth: 3
    },
    cardOccupation: {     
        marginTop: 10,
        marginBottom: 10,
    },
    cardDescription: {     
        marginTop: 10,
        marginRight: 40,
        marginLeft: 40,
        marginBottom: 10
    }
});