import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  SafeAreaView,
} from 'react-native';

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={isDarkMode ? styles.darkText : styles.whiteText}>
          Hello World
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1, //flex 1 is disabled since it hides my content in safe area view
    //padding: 100, //to put content a little down
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteText: {
    color: '#880808',
  },
  darkText: {
    color: '#006400',
  },
});

export default AppPro;
