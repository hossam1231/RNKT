import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export function ModernEmptyStateWithMultipleActions() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.empty}>
        <Image
          alt=""
          source={{ uri: 'https://assets.withfra.me/EmptyState.3.png' }}
          style={styles.emptyImg}
        />

        <Text style={styles.emptyBadge}>Almost Done!</Text>

        <Text style={styles.emptyTitle}>Add your vehicle</Text>

        <Text style={styles.emptyDescription}>
          Dolor dolore ullamco non ex ipsum in. Ad non excepteur mollit duis
          aute mollit cupidatat irure eu.
        </Text>

        <View style={styles.emptyFooter}>
          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}
          >
            <View style={styles.btn}>
              <View style={{ width: 29 }} />

              <Text style={styles.btnText}>Get Started</Text>

              {/* <MaterialCommunityIcons
                color="#fff"
                name="arrow-right"
                size={17}
                style={{ marginLeft: 12 }}
              /> */}
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}
          >
            <View style={styles.btnSecondary}>
              <Text style={styles.btnSecondaryText}>Skip for now</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  /** Empty */
  empty: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 48,
    paddingHorizontal: 24,
  },
  emptyImg: {
    width: 300,
    height: 300,
    marginBottom: 24,
  },
  emptyBadge: {
    fontSize: 14,
    fontWeight: '700',
    color: '#54d378',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
    marginBottom: 8,
  },
  emptyTitle: {
    fontSize: 27,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 14,
  },
  emptyDescription: {
    marginBottom: 24,
    paddingHorizontal: 48,
    fontSize: 15,
    lineHeight: 22,
    fontWeight: '500',
    color: '#8c9197',
    textAlign: 'center',
  },
  emptyFooter: {
    marginTop: 'auto',
    alignSelf: 'stretch',
  },
  /** Button */
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#000',
    borderColor: '#000',
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
  btnSecondary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    marginTop: 8,
  },
  btnSecondaryText: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: '600',
    color: '#000',
  },
});
