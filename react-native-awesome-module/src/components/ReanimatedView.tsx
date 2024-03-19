import React, { useRef, type ReactNode } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
} from 'react-native-reanimated';

interface ReanimatedViewProps {
  children: ReactNode;
}

const ReanimatedView = ({ children }: ReanimatedViewProps) => {
  const isVisible = useSharedValue(false);
  const opacity = useSharedValue(0);
  const height = useSharedValue(0);
  const containerHeight = useRef(0);

  const toggleVisibility = () => {
    isVisible.value = !isVisible.value;
    if (isVisible.value) {
      opacity.value = withSpring(1);
      height.value = withSpring(containerHeight.current);
    } else {
      opacity.value = withSpring(0);
      height.value = withSpring(0);
    }
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      height: height.value,
    };
  });

  return (
    <View>
      <TouchableOpacity onPress={toggleVisibility}>
        <Text>Toggle</Text>
      </TouchableOpacity>
      <Animated.View style={[animatedStyle]}>
        <View
          onLayout={(event) => {
            containerHeight.current = event.nativeEvent.layout.height;
          }}
        >
          {children}
        </View>
      </Animated.View>
    </View>
  );
};

export default ReanimatedView;
