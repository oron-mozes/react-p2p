import { StyleSheet, Text, View } from 'react-native';

import * as ReactP2p from 'react-p2p';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ReactP2p.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
