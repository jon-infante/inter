import React, {useLayoutEffect, Fragment} from "react";
import {View, Text, StyleSheet} from "react-native";
import Chain from "./components/brain/Chain";
import Scaffolding from "./components/brain/Scaffolding";


function HomeScreen({}) {

  return (
    <Fragment>
    <View>
      {/* <Scaffolding/> */}
      <Chain/>
    </View>
    </Fragment>
  );
};

export default HomeScreen;