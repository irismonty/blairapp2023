import * as React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#960F11",
    flex: 1
  },
  heading: {
    backgroundColor: '#960F11',
    flexDirection: 'row',
    flex: 1,
    top: 10
  },
  content: {
    flex: 6,
    alignItems: "center",
    backgroundColor: '#FFF'
  },
  footer: {
    backgroundColor: '#960F11',
    flex: 1,
  },
  headingLogo: {
    width: 70,
    height: 65,
    left: 120
  },
  menuButton: {
    width: 40,
    height: 40,
    left: 10,
    top: 10
  },
  homeButton: {
    width: 70,
    height: 65,
    top: 10,
    left: 0
  },
  pageTitleOval1: {
    width: 150,
    height: 60,
    borderRadius: 20,
    backgroundColor: "red",
    transform: [{ scaleX: 2 }],
    position: 'absolute',
    left: 130,
    top: 20
  },
  pageTitleOval2: {
    width: 150,
    height: 60,
    borderRadius: 20,
    backgroundColor: "white",
    transform: [{ scaleX: 2 }],
    top: 10,
    position: 'absolute'
  },
  pageTitleOval3: {
    width: 151,
    height: 61,
    borderRadius: 20,
    backgroundColor: "red",
    transform: [{ scaleX: 2 }],
    top: 9,
    position: 'absolute'
  },
  pageTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    top: 15
  },
  info: {
    flexDirection: 'column',
    flex: 1,
    position: 'absolute',
    top: 90
  },
  infoTitle: {
    flex: 1,
    fontSize: 20,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  BlazerExcl: {
    flex: 5,
    flexDirection: 'row'
  },
  BlazerExclImg: {
    flex: 1,
  }

});


export default function BlazerExcl ({ navigation }) {
  return (
    <View style={styles.container}>

      <View style={styles.heading}>
        <TouchableOpacity>
          <Image
            style={styles.menuButton}
            source={require('./MenuButton.png')}
          />
        </TouchableOpacity>
        <Image 
          style={styles.headingLogo} 
          source={require('./MB.png')}
        />
      </View>

      <View style={styles.content}>
        <View style={styles.pageTitleOval3}></View>
        <View style={styles.pageTitleOval1}></View>
        <View style={styles.pageTitleOval2}>
          <Text style={styles.pageTitle}> Blazer Exclusives </Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.infoTitle}> Access exclusive content from our very own Blazer community! </Text>
          <ScrollView>
            <View style={styles.BlazerExcl}>
              <TouchableOpacity onPress={() => navigation.navigate('Student Area')}>
                <Image source={require('./blazerExclusivesPlaceHolder.png')} style={{ height: 125, width: 125 }}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Student Area')}>
                <Image source={require('./blazerExclusivesPlaceHolder.png')} style={{ height: 125, width: 125 }}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Student Area')}>
                <Image source={require('./blazerExclusivesPlaceHolder.png')} style={{ height: 125, width: 125 }}/>
              </TouchableOpacity>
            </View>
            <View style={styles.BlazerExcl}>
              <TouchableOpacity onPress={() => navigation.navigate('Student Area')}>
                <Image source={require('./blazerExclusivesPlaceHolder.png')} style={{ height: 125, width: 125 }}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Student Area')}>
                <Image source={require('./blazerExclusivesPlaceHolder.png')} style={{ height: 125, width: 125 }}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Student Area')}>
                <Image source={require('./blazerExclusivesPlaceHolder.png')} style={{ height: 125, width: 125 }}/>
              </TouchableOpacity>
            </View>
            <View style={styles.BlazerExcl}>
              <TouchableOpacity onPress={() => navigation.navigate('Student Area')}>
                <Image source={require('./blazerExclusivesPlaceHolder.png')} style={{ height: 125, width: 125 }}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Student Area')}>
                <Image source={require('./blazerExclusivesPlaceHolder.png')} style={{ height: 125, width: 125 }}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Student Area')}>
                <Image source={require('./blazerExclusivesPlaceHolder.png')} style={{ height: 125, width: 125 }}/>
              </TouchableOpacity>
            </View>
            <View style={styles.BlazerExcl}>
              <TouchableOpacity onPress={() => navigation.navigate('Student Area')}>
                <Image source={require('./blazerExclusivesPlaceHolder.png')} style={{ height: 125, width: 125 }}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Student Area')}>
                <Image source={require('./blazerExclusivesPlaceHolder.png')} style={{ height: 125, width: 125 }}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Student Area')}>
                <Image source={require('./blazerExclusivesPlaceHolder.png')} style={{ height: 125, width: 125 }}/>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Student Area')}>
          <Image
            style={styles.homeButton}
            source={require('./HomeButton.png')}
          />
        </TouchableOpacity>
      </View>

    </View>
    );
};