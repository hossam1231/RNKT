import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

export function Counter() {
  const [value, setValue] = React.useState(0);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <View style={styles.counter}>
          <TouchableOpacity
            onPress={() => {
              setValue(value - 1);
            }}
            style={styles.counterAction}
          >
            <Text style={styles.counterActionText}>-</Text>
          </TouchableOpacity>

          <Text style={styles.counterValue}>{value}</Text>

          <TouchableOpacity
            onPress={() => {
              setValue(value + 1);
            }}
            style={styles.counterAction}
          >
            <Text style={styles.counterActionText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  /** Counter */
  counter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#e1e1e1',
    borderStyle: 'solid',
    borderRadius: 8,
  },
  counterAction: {
    width: 46,
    height: 34,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterActionText: {
    fontSize: 20,
    lineHeight: 20,
    fontWeight: '500',
    color: '#000',
  },
  counterValue: {
    minWidth: 34,
    fontSize: 14,
    fontWeight: '500',
    color: '#101010',
    textAlign: 'center',
    paddingHorizontal: 8,
  },
});
