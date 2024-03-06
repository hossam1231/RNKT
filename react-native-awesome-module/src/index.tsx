import { View, type ViewStyle } from 'react-native';
import React, { type ReactNode } from 'react';

export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

interface XStackProps {
  children: ReactNode[];
  space: number | undefined;
  style: ViewStyle;
}

export const XStack: React.FC<XStackProps> = ({ children, space, style }) => {
  console.log(children);

  const modifiedChildren = React.Children.map(children, (child) => {
    space = 2;
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        style: {
          ...child.props.style,
          marginHorizontal: space * 10,
          backgroundColor: 'black',
        },
      });
    }
    return child;
  });

  return (
    <View style={[style, { flexDirection: 'row' }]}>{modifiedChildren}</View>
  );
};
// export const YStack: React.FC<{ children: ReactNode }> = ({ children }) => {
//   return <View style={{ flexDirection: 'column' }}>{children}</View>;
// };

// interface Styles {
//   container: ViewStyle;
//   contentContainer: ViewStyle;
// }

// const styles = StyleSheet.create<Styles>({
//   container: {
//     flex: 1,
//     padding: 24,
//     justifyContent: 'center',
//     backgroundColor: 'grey',
//   },
//   contentContainer: {
//     flex: 1,
//     alignItems: 'center',
//   },
// });
