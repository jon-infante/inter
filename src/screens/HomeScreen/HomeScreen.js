import React, {useLayoutEffect} from "react";
import {View, Text, StyleSheet} from "react-native";
import Ball from './components/voice/Ball'




function HomeScreen({}) {

  return (
    <View style={styles.baseText}>
      <Text style={styles.titleText}>
        <Text>Home</Text>
        {"\n"}
        <Ball/>
        </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin",
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100, 
  },
  titleText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default HomeScreen;