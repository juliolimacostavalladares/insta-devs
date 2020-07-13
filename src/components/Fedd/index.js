import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, View } from 'react-native';
import Constants from 'expo-constants';

const Feed = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView >
        <View style={styles.cardContent}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </Text>
        </View>
        <View style={styles.cardContent}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </Text>
        </View>
        <View style={styles.cardContent}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </Text>
        </View>
        <View style={styles.cardContent}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </Text>
        </View>
        <View style={styles.cardContent}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </Text>
        </View>
        <View style={styles.cardContent}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  cardContent: {

    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginTop: 20
  },
  text: {
    fontSize: 42,
  },
});

export default Feed;