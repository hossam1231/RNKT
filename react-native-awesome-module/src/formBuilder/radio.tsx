import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

const items = [
  {
    label: 'general',
    users: 1023,
    description: 'Bike',
  },
  {
    label: 'office',
    users: 827,
    description: 'Car',
  },
  {
    label: 'design',
    users: 72,
    description: 'Van',
  },
  {
    label: 'marketing',
    users: 24,
    description: 'Machinery',
  },
];

export function RadioCell(props) {
  console.log(
    `$: ----------------------------------------------------------------------------------------`
  );
  console.log(
    `ln38 $: RadioCell -> props `,
    `@jsonWatchdog`,
    JSON.stringify(props)
  );
  console.log(
    `$: ----------------------------------------------------------------------------------------`
  );
  const { options, form, setForm, contentKey } = props;
  // console.log(
  //   `$: ----------------------------------------------------------------------------------------`
  // );
  // console.log(
  //   `ln37 $: RadioCell -> props `,
  //   `@jsonWatchdog`,
  //   JSON.stringify(form)
  // );
  // console.log(
  //   `$: ----------------------------------------------------------------------------------------`
  // );
  console.log(contentKey);

  let formCopy = { ...form };

  return (
    <>
      {Object.keys(options).map((option, index) => {
        const optionData = Object.values(options)[index];
        const isActive = form[contentKey]['value'] === option;
        // console.log(option);
        return (
          <TouchableOpacity
            key={index}
            onPress={() => {
              Object.assign(formCopy[contentKey], { value: option });
              setForm(formCopy);
              // setValue(option);
              // when click set the value as the key so lets say setValue("green")
            }}
          >
            <View style={[styles.radio, isActive && styles.radioActive]}>
              <View style={styles.radioTop}>
                <Text style={styles.radioLabel}>
                  {optionData && optionData.label ? optionData.label : option}
                </Text>

                {/* <Text style={styles.radioUsers}>
                  <Text style={{ fontWeight: '700' }}>{users}</Text> users
                </Text> */}
              </View>

              {/* <Text style={styles.radioDescription}>
                {thisItem.description}
              </Text> */}
            </View>
          </TouchableOpacity>
        );
      })}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 12,
  },
  /** Radio */
  radio: {
    position: 'relative',
    backgroundColor: '#fff',
    marginBottom: 12,
    padding: 12,
    borderRadius: 6,
    alignItems: 'flex-start',
    borderWidth: 2,
    borderColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  radioActive: {
    borderColor: '#0069fe',
  },
  radioTop: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  radioLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111827',
  },
  radioUsers: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2f2f2f',
  },
  radioDescription: {
    fontSize: 15,
    fontWeight: '400',
    color: '#848a96',
  },
});
