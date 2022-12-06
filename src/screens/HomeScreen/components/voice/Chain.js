import React, {useLayoutEffect, useState, useRef, useEffect} from "react";
import {View, Text, StyleSheet,Animated, Easing } from "react-native";
import anime from 'animejs';
import Constants from "../../../../const/Constants";
import Svg, {
    G,
    Path
  } from 'react-native-svg';


  
  function Chain() {
    let h = Constants.ScreenHeight
    let w = Constants.ScreenWidth
    OIBuddy = "M 40.49 89.64 C 42.83 81.19 43.63 72.34 42.99 63.6 C 42.37 55.17 40.36 46.84 37.01 39.07 C 36.98 38.99 36.94 38.91 36.91 38.83 C 33.66 31.35 29.32 24.33 24.01 18.14 C 18.7 11.96 12.04 7.29 5.16 3.01 C 3.47 1.96 1.77 0.9 0 0"
    OLarge = "M 52.9 82.52 C 51.12 83.65 49.09 84.39 47.13 85.16 C 43.04 86.77 38.85 88.08 34.52 88.83 C 30.15 89.59 25.66 89.87 21.25 89.28 C 17.2 88.74 13.22 87.52 9.74 85.36 C 6.33 83.24 3.6 80.26 2.01 76.56 C 0.35 72.68 -0.26 68.38 0.09 64.19 C 0.44 59.94 1.67 55.82 3.28 51.89 C 4.9 47.93 6.96 44.17 9.29 40.59 C 11.64 36.99 14.24 33.57 17.12 30.39 C 19.99 27.22 23.05 24.24 26.29 21.47 C 29.56 18.68 32.98 16.08 36.57 13.7 C 40.17 11.31 43.9 9.13 47.78 7.22 C 51.67 5.31 55.71 3.63 59.86 2.37 C 64.09 1.08 68.45 0.16 72.86 0.02 C 75.75 -0.07 78.68 0.12 81.49 0.82 C 85.15 1.73 88.7 3.56 91.12 6.53 C 93.57 9.54 94.26 13.47 95 17.17 C 95.88 21.57 96.73 25.98 97.7 30.36 C 97.95 31.48 98.19 32.6 98.44 33.72 C 98.92 35.91 99.41 38.18 99.57 40.43 C 99.85 44.46 98.02 48.29 95.82 51.55 C 93.43 55.09 90.55 58.14 87.32 60.91 C 86.51 61.6 85.69 62.28 84.89 62.97"
    OLast = "M 0 17.79 C 1.99 15.05 3.76 12.15 5.35 9.16 C 6.95 6.13 8.3 2.98 10 -0"
    OOutside = "M 11.12 75.86 C 8.73 72.44 5.78 69.4 3.65 65.8 C 1.58 62.3 0.5 58.31 0.13 54.28 C -0.39 48.58 0.72 42.82 2.92 37.56 C 5.03 32.5 8.11 27.81 11.65 23.65 C 12.25 22.94 12.87 22.25 13.5 21.57 C 16.37 18.49 19.55 15.71 22.94 13.22 C 26.41 10.68 30.16 8.55 34.07 6.79 C 38.03 5 42.12 3.47 46.39 2.64 C 50.78 1.79 55.24 1.41 59.69 1.07 C 64.1 0.73 68.56 0.38 72.99 0"
    OISwirl = "M 8.3 35.12 C 6.03 36.21 1.84 37.07 0.49 34.22 C -1 31.09 1.25 28 3.17 25.66 C 5.79 22.44 8.97 19.71 12.25 17.19 C 15.63 14.6 19.23 12.3 22.95 10.22 C 26.7 8.13 30.59 6.28 34.6 4.75 C 38.67 3.19 42.86 1.91 47.14 1.07 C 51.44 0.24 55.88 -0.29 60.26 0.15 C 63.88 0.52 67.69 1.67 70.2 4.46 C 70.49 4.78 70.76 5.12 71.01 5.48"
    OLilMan = "M 22.62 6.28 C 24.27 6.51 25.95 6.61 27.62 6.58"
    BFinalInner = "M 0 0 C 1.58 3.79 3.93 7.2 6.47 10.41 C 9.05 13.68 11.85 16.83 14.94 19.63 C 17.84 22.26 21.15 24.34 24.76 25.86 C 26.09 26.42 27.44 26.95 28.82 27.36 C 29.12 27.45 29.43 27.53 29.74 27.52 C 31.61 27.45 30.96 24.67 30.54 23.61 C 30.2 22.76 29.73 21.98 29.26 21.2"
    BInnerRing = "M 0 30.3 C 16.45 49.51 36.79 64.71 56.56 80.29 C 102.07 116.14 149.96 147.66 201.03 175.04 C 275.64 215.04 357.11 246.75 440.77 261.1 C 492.7 270 552.48 275.9 601.92 253.29 C 635.55 237.91 662.96 205.48 663.45 167.27 C 664.13 114.75 627 72.62 590.38 39.49 C 575.04 25.62 559.08 12.44 542.55 0"
    BLargeOuterBand = "M 0 308.28 C 18.87 357.75 48.44 402.26 83.28 441.89 C 119.73 483.37 163.16 518.49 208.25 550.13 C 254.1 582.3 303.87 608.48 355.46 630.18 C 408.3 652.41 463.94 667.91 520.57 676.71 C 578.53 685.71 638.2 687.57 696.03 676.56 C 748.14 666.64 799.84 646.27 840.14 611.04 C 879 577.07 905.13 530.53 914.37 479.81 C 924.79 422.58 916.21 363.46 897.33 308.91 C 878.93 255.74 851.24 205.92 818.92 160 C 786.26 113.6 747.18 71.55 704.55 34.17 C 691.26 22.51 677.57 11.29 663.97 -0"
    BLittleInner = "M 4 1.41 C 2.71 0.83 1.37 0.37 0 0"
    grail = "M 106.64 140.37 C 103.61 142.29 100.15 143.55 \
    96.83 144.85 C 89.88 147.59 82.74 149.82 75.38 151.09 C \
    67.94 152.37 60.31 152.85 52.81 151.85 C 45.93 150.93 39.15 \
    148.85 33.23 145.18 C 27.43 141.58 22.78 136.51 20.09 130.21 \
    C 17.27 123.62 16.23 116.3 16.82 109.16 C 17.42 101.94 19.51 \
    94.92 22.25 88.24 C 25.01 81.51 28.5 75.11 32.47 69.02 C 36.46 \
    62.9 40.89 57.08 45.79 51.66 C 50.66 46.28 55.87 41.2 61.4 36.49 \
    C 66.96 31.74 72.78 27.32 78.88 23.28 C 85 19.22 91.36 15.5 97.95 \
    12.26 C 104.57 9.01 111.44 6.16 118.5 4.01 C 125.66 1.83 133.09 \
    0.27 140.59 0.03 C 145.5 -0.13 150.49 0.21 155.27 1.39 C 161.5 \
    2.94 167.54 6.05 171.64 11.1 C 175.81 16.22 176.99 22.9 178.25 \
    29.19 C 179.75 36.68 181.2 44.17 182.84 51.63 C 183.26 53.53 183.68\
    55.44 184.1 57.34 C 184.92 61.07 185.75 64.93 186.02 68.75 C 186.5\
    75.6 183.39 82.13 179.65 87.66 C 175.59 93.67 170.69 98.86 165.19\
    103.59 C 163.82 104.77 162.42 105.92 161.05 107.09 M 18.94 130.47 C \
    14.87 124.65 9.85 119.46 6.22 113.34 C 2.69 107.39 0.85 100.59 0.22 93.73 \
    C -0.67 84.02 1.23 74.22 4.97 65.26 C 8.57 56.65 13.8 48.67 19.84 41.57 C \
    20.86 40.36 21.92 39.18 23 38.02 C 27.88 32.78 33.3 28.04 39.08 23.81 C 44.98 \
    19.49 51.37 15.87 58.03 12.86 C 64.78 9.81 71.73 7.21 79.01 5.79 C 86.49 \
    4.34 94.07 3.7 101.66 3.12 C 109.18 2.54 116.77 1.95 124.31 1.3 M 77.24 112.85 \
    C 73.37 114.72 66.21 116.17 63.9 111.31 C 61.36 105.97 65.2 100.7 68.47 96.7 \
    C 72.95 91.21 78.37 86.55 83.98 82.25 C 89.75 77.82 95.89 73.9 102.24 70.36 \
    C 108.64 66.79 115.29 63.64 122.13 61.02 C 129.08 58.36 136.23 56.16 143.54 \
    54.74 C 150.88 53.32 158.47 52.42 165.94 53.18 C 172.13 53.81 178.62 55.77 \
    182.9 60.53 C 183.39 61.08 183.86 61.66 184.28 62.27 M 146.09 97.57 C 147.08 \
    93.97 147.43 90.2 147.15 86.48 C 146.88 82.89 146.03 79.34 144.6 76.04 C 144.59 \
    76.01 144.57 75.97 144.56 75.94 C 143.18 72.75 141.33 69.77 139.07 67.13 C 136.81 \
    64.49 133.97 62.51 131.05 60.68 C 130.33 60.23 129.61 59.78 128.85 59.4 M 125.05 \
    73.55 C 126.36 71.74 127.53 69.83 128.57 67.86 C 129.63 65.87 130.52 63.79 \
    131.64 61.82 M 63.98 104.55 C 66.73 104.94 69.51 105.1 72.28 105.04 M 68.82 \
    97.01 C 72.03 105.42 77.05 112.98 82.98 119.72 C 89.18 126.77 96.56 132.74 \
    104.22 138.12 C 112.01 143.59 120.47 148.04 129.24 151.73 C 138.22 \
    155.51 147.68 158.14 157.3 159.64 C 167.15 161.17 177.29 161.49 187.12 \
    159.61 C 195.98 157.92 204.76 154.46 211.61 148.47 C 218.22 142.7 222.66 \
    134.79 224.23 126.16 C 226 116.43 224.54 106.38 221.33 97.11 C 218.2 88.07 \
    213.5 79.6 208 71.8 C 202.45 63.91 195.81 56.77 188.56 50.41 C 186.3 \
    48.43 183.97 46.52 181.66 44.6 M 94.11 75.36 C 96.91 78.63 100.36 81.21 \
    103.72 83.86 C 111.46 89.95 119.6 95.31 128.28 99.96 C 140.96 106.76 154.81 \
    112.15 169.03 114.59 C 177.86 116.1 188.02 117.11 196.42 113.26 C 202.14 \
    110.65 206.8 105.13 206.88 98.64 C 207 89.71 200.68 82.55 194.46 76.92 \
    C 191.85 74.56 189.14 72.32 186.33 70.21 M 118.99 62.76 C 121.74 69.34 \
    125.83 75.28 130.23 80.86 C 134.72 86.54 139.59 92.02 144.95 96.89 C  \
    150 101.47 155.74 105.08 162.02 107.72 C 164.33 108.69 166.67 109.62  \
    169.08 110.32 C 169.6 110.47 170.14 110.62 170.68 110.59 C 173.93 110.46  \
    172.8 105.63 172.07 103.79 C 171.48 102.32 170.67 100.95 169.84 99.6 M  \
    128.4 67.28 C 125.75 66.09 122.98 65.14 120.18 64.37"
    return (
      <View style={styles.container}>
        
        <Svg height="100%" width="100%" fill="none" >
          <G transform="scale(0.6)"x="232" y="319">
            <Path d={OIBuddy} stroke="#fffafa"strokeLinecap="round"strokeLinejoin="round"strokeWidth="5"/>
          </G>
          <G transform="scale(2.55)"x="63"y="230">
            <Path d={OLarge} stroke="#fffafa"strokeLinecap="round"strokeLinejoin="round"strokeWidth="1.1"/>
          </G>
          <G transform="scale(2.55)"x="40"y="232">
            <Path d={OOutside} stroke="#fffafa"strokeLinecap="round" strokeLinejoin="round"strokeWidth="1.1"/>
          </G>
          <G transform="scale(2.55)"x="133"y="310">
            <Path d={OISwirl} stroke="#fffafa" trokeLinecap="round"strokeLinejoin="round"strokeWidth="1.1"/>
          </G>
          <G transform="scale(0.95)"x="225"y="322">
            <Path d={OLast} stroke="#fffafa"strokeLinecap="round"strokeLinejoin="round"strokeWidth="2.5"/>  
          </G>
          <G transform="scale(2.2)"x="85"y="375">
            <Path d={OLilMan} stroke="#fffafa"  strokeLinecap="round"strokeLinejoin="round"strokeWidth="1.35"/> 
          </G> 
          <G transform="scale(2.55)"x="218"y="326">
            <Path d={BFinalInner} stroke="#d0c89d" strokeLinecap="round"strokeLinejoin="round"strokeWidth="1.2"/>
          </G>
          <G transform="scale(0.253)"x="180"y="337">
            <Path d={BInnerRing} stroke="#d0c89d"strokeLinecap="round"strokeLinejoin="round"strokeWidth="12"/>
          </G>
          <G transform="scale(0.255)"x="142" y="297">
            <Path d={BLargeOuterBand} stroke="#d0c89d"strokeLinecap="round"strokeLinejoin="round"strokeWidth="12"/>
          </G>
          <G transform="scale(2.6)"x="220"y="326">
            <Path d={BLittleInner} stroke="#d0c89d"strokeLinecap="round"strokeLinejoin="round"strokeWidth="1.15"/>
          </G>
          {/* <G transform="scale(1.3)"x="37"y="230">
            <Path d={grail} stroke="#d0c89d"strokeLinecap="round"strokeLinejoin="round"strokeWidth="1.255"/>
          </G>                 */}
        </Svg>
      </View>
    );

  }

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#84a797"
  }
});

export default Chain;


// paddingLeft, paddingRight, paddingTop