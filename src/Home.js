import * as React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';

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
  title: {
    fontSize: 23,
    fontWeight: "bold"
  },
  contentHeader: {
    flexDirection: 'row',
    flex: 1,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 0
  },
  leftHeader: {
    fontSize: 12,
    textAlign: 'left'
  },
  rightHeader: {
    fontSize: 12,
    textAlign: 'right'
  },
  pageTitleOval1: {
    width: 150,
    height: 60,
    borderRadius: 20,
    backgroundColor: "red",
    transform: [{ scaleX: 2 }],
    position: 'absolute',
    top: 110,
    left: 130
  },
  pageTitleOval2: {
    width: 150,
    height: 60,
    borderRadius: 20,
    backgroundColor: "white",
    transform: [{ scaleX: 2 }],
    position: 'absolute',
    top: 100
  },
  pageTitleOval3: {
    width: 151,
    height: 61,
    borderRadius: 20,
    backgroundColor: "red",
    transform: [{ scaleX: 2 }],
    position: 'absolute',
    top: 99
  },
  pageTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    top: 15
  },
  info: {
    flexDirection: 'column',
    flex: 1,
    position: 'absolute',
    top: 180
  },
  BlrBlvd: {
    flex: 5
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



export default function HomeScreen ({ navigation }) {
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
        <Text style={styles.title}>MONTGOMERY BLAIR HIGH SCHOOL</Text>
        <View style={styles.contentHeader}>
          <View style={{flex: 1}}>
            <Text style={styles.leftHeader}>51 University Blvd East</Text>
            <Text style={styles.leftHeader}>Silver Spring MD 20901</Text>
            <Text style={styles.leftHeader}>(240) 740-7200</Text>
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.rightHeader}>Principal Renay Johnson</Text>
            <Text style={styles.rightHeader}>Home of the Blazers</Text>
            <Text style={styles.rightHeader}>Crescens Scientia</Text>
          </View>
        </View>
        <View style={styles.pageTitleOval3}></View>
        <View style={styles.pageTitleOval1}></View>
        <View style={styles.pageTitleOval2}>
          <Text style={styles.pageTitle}> STUDENT AREA </Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.infoTitle}> Blair Boulevard on the go </Text>
          <View style={styles.BlrBlvd}>
            <Image source={require('./BlrBlvdPlaceholder.png')} style={{ height: 125, width: 350 }}/>
          </View>
          <Text style={styles.infoTitle}> Blazer Exclusives </Text>
          <TouchableOpacity style={styles.BlazerExcl} onPress={() => navigation.navigate('Blazer Exclusives')}>
            <Image source={require('./blazerExclusivesPlaceHolder.png')} style={{ height: 125, width: 125 }}/>
            <Image source={require('./blazerExclusivesPlaceHolder.png')} style={{ height: 125, width: 125 }}/>
            <Image source={require('./blazerExclusivesPlaceHolder.png')} style={{ height: 125, width: 125 }}/>
          </TouchableOpacity>
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