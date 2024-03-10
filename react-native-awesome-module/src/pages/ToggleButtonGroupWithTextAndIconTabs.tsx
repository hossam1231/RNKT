import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
// import FeatherIcon from 'react-native-vector-icons/Feather';

interface Tab {
  name: string;
  icon: string;
}

const tabs: Tab[] = [
  { name: 'Cars', icon: 'user' },
  { name: 'Motorbikes', icon: 'shopping-cart' },
  { name: 'Machines', icon: 'users' },
  { name: 'Vans', icon: 'user' },
];

export function ToggleButtonGroupWithTextAndIconTabs(): JSX.Element {
  const [value, setValue] = React.useState<number>(0);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <Text style={styles.title}>Selling</Text>

        <View style={styles.tabs}>
          {tabs.map(({ name, icon }: Tab, index: number) => {
            const isActive: boolean = index === value;
            icon;
            return (
              <View
                key={name}
                style={[
                  styles.tabWrapper,
                  isActive && { borderBottomColor: '#6366f1' },
                ]}
              >
                <TouchableOpacity
                  onPress={() => {
                    setValue(index);
                  }}
                >
                  <View style={styles.tab}>
                    {/* <FeatherIcon
                      color={isActive ? '#6366f1' : '#6b7280'}
                      name={icon}
                      size={16}
                    /> */}

                    <Text
                      style={[styles.tabText, isActive && { color: '#6366f1' }]}
                    >
                      {name}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>

        <View style={styles.placeholder}>
          <View style={styles.placeholderInset}>
            {/* Replace with your content */}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    padding: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  title: {
    paddingHorizontal: 16,
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 12,
  },
  tabs: {
    flexDirection: 'row',
  },
  /** Tab */
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    position: 'relative',
    overflow: 'hidden',
  },
  tabWrapper: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    borderColor: '#e5e7eb',
    borderBottomWidth: 2,
  },
  tabText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#6b7280',
    marginLeft: 5,
  },
  /** Placeholder */
  placeholder: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    height: 400,
    marginTop: 0,
    paddingVertical: 24,
    paddingHorizontal: 16,
    backgroundColor: 'transparent',
  },
  placeholderInset: {
    borderWidth: 4,
    borderColor: '#e5e7eb',
    borderStyle: 'dashed',
    borderRadius: 9,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
});
