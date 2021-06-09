import * as React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import ActionButton from '../ActionButton/ActionButton';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 17,
    paddingBottom: 17,
    paddingLeft: 16,
    paddingRight: 16,
    borderBottomColor: '#E5E5E5',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  text: {
    maxWidth: 249,
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '400',
    color: '#111827',
    maxWidth: 249,
  },
  buttonContainer: {
    marginTop: 2,
  },
});

export default function ListItemComponent({
  categoryName, // This name should be broader as there are more use-cases than just categories
  onPress = () => {},
  text, // make clear what this is for
  isCorrect,
  isIncorrect,
  isEnglishPrimaryLanguage,
}) // if you choose to make it multiline (which is fine for me), make the action button always in the center vertically
 {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>{categoryName}</Text>
      <View style={styles.buttonContainer}>
        <ActionButton
          isEnglishPrimaryLanguage={isEnglishPrimaryLanguage}
          isCorrect={isCorrect}
          isIncorrect={isIncorrect}
          isDisabled={false}
          onPress={onPress}
          title={text}
        />
      </View>
    </SafeAreaView>
  );
}
