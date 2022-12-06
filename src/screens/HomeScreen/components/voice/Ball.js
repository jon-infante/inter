import React, {useLayoutEffect, useState, useRef, useEffect} from "react";
import {View, Text, StyleSheet,Animated, Easing } from "react-native";
import anime from 'animejs';
import Constants from "../../../../const/Constants";
import Svg, {
    G,
    Path
  } from 'react-native-svg';


  
  function Ball() {
    let h = Constants.ScreenHeight
    let w = Constants.ScreenWidth
    OIBuddy = "M 40.49 89.64 C 42.83 81.19 43.63 72.34 42.99 63.6 C 42.37 55.17 40.36 46.84 37.01 39.07 C 36.98 38.99 36.94 38.91 36.91 38.83 C 33.66 31.35 29.32 24.33 24.01 18.14 C 18.7 11.96 12.04 7.29 5.16 3.01 C 3.47 1.96 1.77 0.9 0 0"
    OLarge = "M 52.9 82.52 C 51.12 83.65 49.09 84.39 47.13 85.16 C 43.04 86.77 38.85 88.08 34.52 88.83 C 30.15 89.59 25.66 89.87 21.25 89.28 C 17.2 88.74 13.22 87.52 9.74 85.36 C 6.33 83.24 3.6 80.26 2.01 76.56 C 0.35 72.68 -0.26 68.38 0.09 64.19 C 0.44 59.94 1.67 55.82 3.28 51.89 C 4.9 47.93 6.96 44.17 9.29 40.59 C 11.64 36.99 14.24 33.57 17.12 30.39 C 19.99 27.22 23.05 24.24 26.29 21.47 C 29.56 18.68 32.98 16.08 36.57 13.7 C 40.17 11.31 43.9 9.13 47.78 7.22 C 51.67 5.31 55.71 3.63 59.86 2.37 C 64.09 1.08 68.45 0.16 72.86 0.02 C 75.75 -0.07 78.68 0.12 81.49 0.82 C 85.15 1.73 88.7 3.56 91.12 6.53 C 93.57 9.54 94.26 13.47 95 17.17 C 95.88 21.57 96.73 25.98 97.7 30.36 C 97.95 31.48 98.19 32.6 98.44 33.72 C 98.92 35.91 99.41 38.18 99.57 40.43 C 99.85 44.46 98.02 48.29 95.82 51.55 C 93.43 55.09 90.55 58.14 87.32 60.91 C 86.51 61.6 85.69 62.28 84.89 62.97"
    OLast = "M 0 17.79 C 1.99 15.05 3.76 12.15 5.35 9.16 C 6.95 6.13 8.3 2.98 10 -0"
    OOutside = "M 11.12 75.86 C 8.73 72.44 5.78 69.4 3.65 65.8 C 1.58 62.3 0.5 58.31 0.13 54.28 C -0.39 48.58 0.72 42.82 2.92 37.56 C 5.03 32.5 8.11 27.81 11.65 23.65 C 12.25 22.94 12.87 22.25 13.5 21.57 C 16.37 18.49 19.55 15.71 22.94 13.22 C 26.41 10.68 30.16 8.55 34.07 6.79 C 38.03 5 42.12 3.47 46.39 2.64 C 50.78 1.79 55.24 1.41 59.69 1.07 C 64.1 0.73 68.56 0.38 72.99 0"
    OISwirl = "M 8.3 35.12 C 6.03 36.21 1.84 37.07 0.49 34.22 C -1 31.09 1.25 28 3.17 25.66 C 5.79 22.44 8.97 19.71 12.25 17.19 C 15.63 14.6 19.23 12.3 22.95 10.22 C 26.7 8.13 30.59 6.28 34.6 4.75 C 38.67 3.19 42.86 1.91 47.14 1.07 C 51.44 0.24 55.88 -0.29 60.26 0.15 C 63.88 0.52 67.69 1.67 70.2 4.46 C 70.49 4.78 70.76 5.12 71.01 5.48"
    OLilMan = "M 22.62 6.28 C 24.27 6.51 25.95 6.61 27.62 6.58"
   
    return (
      <View style={styles.container}>
        <Svg height="100%" width="100%" fill="none" >
          <G transform="scale(0.6)"x="209"y="220">
            <Path d={OIBuddy} stroke="#FF985A"strokeLinecap="round"strokeLinejoin="round"strokeWidth="6.75"/>
          </G>
          <G transform="scale(2)"x="85"y="150">
            <Path d={OLarge} stroke="#FF985A"strokeLinecap="round"strokeLinejoin="round"strokeWidth="2"/>
          </G>
          <G transform="scale(2)"x="65"y="152">
            <Path d={OOutside} stroke="#FF985A"strokeLinecap="round" strokeLinejoin="round"strokeWidth="2"/>
          </G>
          <G transform="scale(2)"x="140"y="210">
            <Path d={OISwirl} stroke="#FF985A" trokeLinecap="round"strokeLinejoin="round"strokeWidth="2"/>
          </G>
          <G transform="scale(1)"x="207"y="229">
            <Path d={OLast} stroke="#FF985A"strokeLinecap="round"strokeLinejoin="round"strokeWidth="4"/>  
          </G>
          <G transform="scale(2)"x="96"y="257">
            <Path d={OLilMan} stroke="#FF985A"  strokeLinecap="round"strokeLinejoin="round"strokeWidth="2"/> 
          </G>    
        </Svg>
      </View>
    );

  }

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  origin: { 
    
  },
  lobepiece1: {
    alignItems: 'center',
    paddingRight: 5
  }
});



export default Ball;


// paddingLeft, paddingRight, paddingTop
