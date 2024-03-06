import * as React from 'react';

import { StyleSheet, Text } from 'react-native';
import { XStack, multiply } from 'react-native-awesome-module';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    multiply(3, 7).then(setResult);
  }, []);

  return (
    <XStack space={3} style={styles.container}>
      <Text>{result}</Text>
      <Text>{result}</Text>
    </XStack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
