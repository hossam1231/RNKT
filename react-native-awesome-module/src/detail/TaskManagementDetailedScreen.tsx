import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
// import FeatherIcon from 'react-native-vector-icons/Feather';
// import FontAwesome from 'react-native-vector-icons/FontAwesome5';

export function TaskManagementDetailedScreen() {
  const [tasks, setTasks] = React.useState([
    {
      label: 'Create project timeline',
      date: new Date('2023-03-31'),
      icon: '📅',
      completed: true,
    },
    {
      label: 'Define project goals',
      date: new Date('2023-03-15'),
      icon: '🎯',
      completed: false,
    },
    {
      label: 'Identify project stakeholders',
      date: new Date('2023-02-25'),
      icon: '👥',
      completed: true,
    },
    {
      label: 'Gather project requirements',
      date: new Date('2023-01-30'),
      icon: '📝',
      completed: false,
    },
    {
      label: 'Create project budget',
      date: new Date('2023-01-15'),
      icon: '💰',
      completed: false,
    },
  ]);

  // @ts-ignore
  const handleUpdateTask = (index) => {
    setTasks(
      [...tasks].map((task, i) => {
        if (i === index) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      })
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerAction}>
              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}
              >
                {/* <FeatherIcon color="#000" name="chevron-left" size={20} /> */}
              </TouchableOpacity>
            </View>

            <Text style={styles.headerTitle}>Project Pinnacle Planning</Text>

            <View style={[styles.headerAction, { alignItems: 'flex-end' }]}>
              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}
              >
                {/* <FeatherIcon color="#000" name="more-vertical" size={20} /> */}
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.title}>Project Pinnacle Planning</Text>
          <View style={styles.row}>
            <Text style={styles.rowField}>Due Date</Text>

            <Text style={styles.rowValue}>May 23, 2023</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowField}>Status</Text>

            <View style={styles.badge}>
              <Text style={styles.badgeText}>In Progress</Text>
            </View>
          </View>
          <View style={[styles.row, { alignItems: 'flex-start' }]}>
            <Text style={styles.rowField}>Collaborators</Text>

            <View style={styles.rowList}>
              <View style={styles.rowUser}>
                <Image
                  alt=""
                  source={{
                    uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
                  }}
                  style={styles.avatar}
                />

                <Text style={styles.rowUserText}>David Z. (you)</Text>
              </View>

              <View style={styles.rowUser}>
                <Image
                  alt=""
                  source={{
                    uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
                  }}
                  style={styles.avatar}
                />

                <Text style={styles.rowUserText}>Sierra K.</Text>
              </View>

              <View style={styles.rowUser}>
                <Image
                  alt=""
                  source={{
                    uri: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
                  }}
                  style={styles.avatar}
                />

                <Text style={styles.rowUserText}>Jack W.</Text>
              </View>
            </View>
          </View>
          <Text style={styles.subtitle}>Description</Text>
          <Text style={styles.paragraph}>
            This task involves reviewing and providing feedback on the design
            concepts and prototypes created by the design team. It includes
            evaluating the aesthetic appeal, functionality, usability, and
            alignment with project requirements.
          </Text>
          <Text style={styles.subtitle}>Tasks</Text>
          {/* @ts-ignore */}
          {tasks.map(({ label, date, icon, completed }, index) => {
            const isActive = completed === true;
            const dateFormatted = date.toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            });
            const description = completed
              ? `Completed on ${dateFormatted}`
              : `Started on ${dateFormatted}`;
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  handleUpdateTask(index);
                }}
              >
                <View style={styles.radio}>
                  <View
                    style={[
                      styles.radioCheck,
                      isActive && styles.radioCheckActive,
                    ]}
                  >
                    {/* <FontAwesome
                      color="#fff"
                      name="check"
                      style={!isActive && { display: 'none' }}
                      size={11}
                    /> */}
                  </View>

                  <View>
                    <Text style={styles.radioLabel}>{label}</Text>

                    <Text style={styles.radioDescription}>{description}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </SafeAreaView>

      <View style={styles.overlay}>
        <TouchableOpacity
          onPress={() => {
            // handle onPress
          }}
          style={{ flex: 1, paddingHorizontal: 24 }}
        >
          <View style={styles.btn}>
            <Text style={styles.btnText}>Save</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 0,
    paddingHorizontal: 16,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  title: {
    fontSize: 23,
    fontWeight: '600',
    color: '#1e1e1e',
    marginTop: 12,
    marginBottom: 10,
  },
  avatar: {
    width: 18,
    height: 18,
    borderRadius: 9999,
  },
  subtitle: {
    fontSize: 19,
    fontWeight: '600',
    color: '#1e1e1e',
    marginTop: 10,
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 20,
    color: '#444444',
    marginBottom: 16,
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 12,
    paddingHorizontal: 16,
    paddingBottom: 48,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  /** Header */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerAction: {
    width: 40,
    height: 40,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1d1d1d',
  },
  /** Row */
  row: {
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  rowField: {
    fontSize: 15,
    fontWeight: '600',
    color: '#0e0e0e',
    width: 130,
  },
  rowValue: {
    fontSize: 15,
    fontWeight: '500',
    color: '#171717',
  },
  rowList: {
    flexDirection: 'column',
  },
  rowUser: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  rowUserText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#171717',
    marginLeft: 6,
  },
  /** Badge */
  badge: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffa500',
  },
  badgeText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
  },
  /** Radio */
  radio: {
    position: 'relative',
    paddingTop: 12,
    paddingRight: 16,
    paddingBottom: 14,
    paddingLeft: 0,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  radioCheck: {
    marginTop: 4,
    marginRight: 12,
    marginBottom: 0,
    marginLeft: 6,
    width: 24,
    height: 24,
    borderRadius: 9999,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#eb3333',
  },
  radioCheckActive: {
    backgroundColor: '#eb3333',
  },
  radioLabel: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
    marginBottom: 5,
  },
  radioDescription: {
    fontSize: 14,
    fontWeight: '400',
    color: '#959595',
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
    backgroundColor: '#24232A',
    borderColor: '#24232A',
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
});
