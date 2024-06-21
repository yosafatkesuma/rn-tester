import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as DevMenu from 'expo-dev-menu';
import * as React from 'react';
import BootSplash from 'react-native-bootsplash';

const Button = ({ label, onPress }) => (
  <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
    <Text style={styles.buttonText}>{label}</Text>
  </TouchableOpacity>
);

export default function App() {
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    // (async () => {
    //   await BootSplash.isVisible().then(async (value) => {
    //     console.log('isvisible 1: ', value);
    //     if (value) {
    //       await BootSplash.hide();
    //       setIsLoaded(true);
    //     }
    //     console.log('isvisible 2: ', value);
    //   });
    //   // const res = await BootSplash.isVisible();
    //   // console.log('isVisible', res);
    //   // if (res) {
    //   //   await BootSplash.hide();
    //   //   setIsLoaded(true);
    //   // }
    // })();
    BootSplash.isVisible().then((value) => {
      console.log('isvisible 1: ', value);
      // if (value) {
      // }
      BootSplash.hide();
      setIsLoaded(true);
      console.log('isvisible 2: ', value);
    });
  }, []);

  if (!isLoaded) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button
        label="Open Dev Menu"
        onPress={() => {
          DevMenu.openMenu();
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexBasis: 400,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    backgroundColor: '#4630eb',
    borderRadius: 4,
    padding: 12,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});
