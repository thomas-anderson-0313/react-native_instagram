import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Tabs } from './app/config/router.js';

export default function App () {
    return (
    	<View style={styles.container}>
    		<Tabs />
    	</View>
    );
}

const styles = StyleSheet.create({
	container: {
    flex:1,
	},
});