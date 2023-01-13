import * as React from 'react';
import { Text, View, Image, StyleSheet, Button, TouchableOpacity} from 'react-native';

export const styles = StyleSheet.create({
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
  }
});
