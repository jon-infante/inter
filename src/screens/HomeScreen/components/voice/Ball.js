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
    a="M 0 0 C 2.45 1.67 4.64 4.21 6.17 7.48 C 6.92 9.09 7.51 10.88 7.81 12.78 C 8.09 14.55 8.24 16.36 8.24 18.18 C 8.24 19.96 7.97 21.7 7.9 23.47"
    b="M 0 0 C 0.38 1.02 0.87 1.99 1.45 2.91 C 3.3 5.8 5.39 8.53 7.81 10.96 C 10.06 13.23 12.59 15.35 15.6 16.53 C 15.71 16.57 15.82 16.62 15.93 16.66 C 16.68 16.94 17.45 17.18 18.23 17.36 C 18.74 17.48 19.73 17.79 19.95 17.08 C 20.07 16.69 19.92 16.21 19.79 15.84 C 19.51 15.03 19.07 14.29 18.64 13.56"
    c="M 12.27 0 C 12.49 0.15 12.71 0.31 12.91 0.48 C 13.74 1.16 14.55 2 14.88 3.05 C 14.92 3.19 14.97 3.33 14.98 3.48 C 14.99 3.65 15 3.82 14.99 3.98 C 14.99 4.23 14.94 4.53 14.82 4.75 C 14.74 4.89 14.61 5.03 14.5 5.16 C 14.25 5.44 13.88 5.6 13.53 5.74 C 12.88 6.01 12.18 6.01 11.49 6.01 C 11.04 6.01 10.59 5.98 10.15 5.91 C 9.86 5.86 9.64 5.81 9.42 5.76 C 9.13 5.7 8.85 5.62 8.56 5.55 C 8.37 5.5 8.1 5.43 7.74 5.31 C 6.8 5.02 5.89 4.64 5.01 4.19 C 4.73 4.05 4.46 3.9 4.18 3.75 C 3.9 3.59 3.62 3.43 3.35 3.26 C 3.04 3.07 2.74 2.87 2.44 2.67 C 2.41 2.65 2.37 2.63 2.34 2.6 C 2.08 2.42 1.81 2.24 1.56 2.05 C 1.18 1.77 0.81 1.47 0.45 1.17 C 0.29 1.03 0.12 0.86 -0 0.68"
    d="M 26.17 0.78 C 29.63 3.57 32.75 6.96 34.53 11.09 C 36.06 14.63 36.71 19.1 34.41 22.47 C 33.32 24.08 31.67 25.24 29.88 25.95 C 25.5 27.7 20.56 26.95 16.19 25.5 C 12.05 24.13 8.18 21.82 5.12 18.7 C 3.38 16.93 1.94 14.86 0.91 12.6"
    e="M 26.81 41.44 C 23 43.09 19.06 44.68 14.87 44.93 C 11.24 45.15 7.31 44.57 4.28 42.39 C 1.36 40.29 -0.09 36.63 0 33.1 C 0.06 30.96 0.71 28.89 1.45 26.9 C 2.16 25.01 3.03 23.19 4.06 21.46 C 4.95 19.96 5.96 18.54 7.06 17.19 C 7.98 16.07 8.94 14.99 9.95 13.94 C 10.29 13.58 10.64 13.23 11 12.88 C 11.53 12.36 12.08 11.84 12.63 11.34 C 13.38 10.66 14.15 9.99 14.94 9.36 C 16.61 8.03 18.39 6.84 20.21 5.74 C 21.9 4.72 23.62 3.76 25.42 2.96 C 28.03 1.81 30.73 0.75 33.56 0.32 C 36.37 -0.11 39.41 -0.25 42.12 0.73 C 45.81 2.05 47.17 5.35 47.89 8.91 C 48.34 11.11 48.94 13.29 49.44 15.48 C 50.08 18.27 50.32 21.25 49.23 23.96 C 48.12 26.71 45.87 28.92 43.64 30.8 C 43.33 31.07 43.01 31.33 42.69 31.58"
    f="M 30 0 C 27.62 0.21 25.23 0.33 22.85 0.46 C 20.57 0.58 18.27 0.92 16.1 1.61 C 14 2.28 12.02 3.22 10.17 4.37 C 8.35 5.5 6.63 6.78 5.18 8.31 C 3.72 9.85 2.58 11.61 1.6 13.45 C 0.61 15.28 0 17.32 0 19.39 C 0 21.47 0.7 23.53 1.89 25.27 C 2.81 26.62 3.99 27.78 4.98 29.09"
    g="M 4.6 19.49 C 3.43 19.91 1.96 20.3 0.81 19.62 C 0.76 19.59 0.71 19.56 0.66 19.52 C -0.31 18.84 -0.04 17.52 0.37 16.61 C 0.94 15.35 1.81 14.21 2.74 13.2 L 2.76 13.18 C 3.73 12.13 4.77 11.16 5.87 10.24 C 6.47 9.74 7.08 9.26 7.72 8.81 C 9.04 7.87 10.43 7.04 11.81 6.2 C 13.04 5.45 14.33 4.8 15.63 4.19 H 15.65 C 16.5 3.78 17.36 3.41 18.22 3.05 C 19.7 2.43 21.21 1.83 22.75 1.39 H 22.77 C 24.36 0.93 25.99 0.64 27.61 0.37 C 29.22 0.1 30.85 -0.09 32.48 0.02 C 33.99 0.12 35.52 0.41 36.89 1.08 C 38.02 1.63 39.26 2.5 39.69 3.74 C 40.2 5.19 39.98 6.78 39.43 8.19 C 39.2 8.79 38.91 9.37 38.59 9.94 C 37.85 11.29 36.96 12.56 35.9 13.7 C 34.84 14.84 33.72 15.94 32.5 16.92 C 32.47 16.94 32.45 16.96 32.42 16.98 C 32.16 17.19 31.88 17.38 31.67 17.64"
    h="M 5 0 C 4.43 1.59 3.64 3.09 2.85 4.58 C 2 6.18 1.08 7.73 0 9.18"
    i="M 5.06 1.76 C 3.33 1.29 1.64 0.7 0 0"
    j="M 21.43 3.66 C 23.08 3.87 24.77 4.22 26.43 3.97"
    k="M 0 0 L 1 0"
    return (
      <View style={styles.container}>
        <Svg height="100%" width="100%" fill="none" >
          {/* black dot */}
        <G transform="scale(4)"x="209"y="200">
            <Path d={k} stroke="#000000"strokeLinecap="round"strokeLinejoin="round"strokeWidth="1"/>
          </G>
          {/* J Hook*/}
          <G transform="scale(5)"x="210"y="150">
            <Path d={b} stroke="#779ECC"strokeLinecap="round"strokeLinejoin="round"strokeWidth="1"/>
          </G>
           {/* Inner loop */}
          <G transform="scale(15)"x="155"y="160">
            <Path d={c} stroke="#779ECC"strokeLinecap="round" strokeLinejoin="round"strokeWidth="0.333"/>
          </G>
          {/* Outer loop */}
          <G transform="scale(10)"x="50"y="50">
            <Path d={d} stroke="#779ECC" trokeLinecap="round"strokeLinejoin="round"strokeWidth="0.5"/>
          </G>
          {/* Huge orange boy */}
          <G transform="scale(6)"x="35"y="40">
            <Path d={e} stroke="#FF985A"strokeLinecap="round"strokeLinejoin="round"strokeWidth="1"/>  
          </G>
          {/* outer band orange piece */}
          <G transform="scale(8)"x="4"y="40">
            <Path d={f} stroke="#FF985A"  strokeLinecap="round"strokeLinejoin="round"strokeWidth="1"/> 
          </G>
          {/* curling big orange piece */}
          <G transform="scale(7)"x="64"y="110">
            <Path d={g} stroke="#FF985A"strokeLinecap="round"strokeLinejoin="round"strokeWidth="1"/>  
          </G>
          <G transform="scale(5)"x="230"y="130">
            <Path d={h} stroke="#FF985A"strokeLinecap="round"strokeLinejoin="round"strokeWidth="1"/>  
          </G>
          {/* small blue piece */}
          <G transform="scale(5)"x="215"y="155">
            <Path d={i} stroke="#779ECC"strokeLinecap="round"strokeLinejoin="round"strokeWidth="1"/>
          </G>
          <G transform="scale(5)"x="-30"y="210">
            <Path d={j} stroke="#FF985A"strokeLinecap="round"strokeLinejoin="round"strokeWidth="1"/>
          </G>
            {/* curly last  */}
          <G transform="scale(5)"x="240"y="120">
            <Path d={a} stroke="#FF985A"strokeLinecap="round" strokeLinejoin="round"strokeWidth="1"/>
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
