import { View, type ViewStyle } from 'react-native';
import React, { type ReactNode } from 'react';
import type { CSSAttributes } from '../../css';

// `$: -------------------------------------------------------------------------------`
interface XStackProps extends CSSAttributes {
  // we are now using both CSS attributes and also interface defined here
  children: ReactNode[];
  space?: number;
  style: ViewStyle;
}

export const XStack: React.FC<XStackProps> = React.memo(
  ({ children, space = 0, ...props }) => {
    // spreading props has allowed us to use props without specifically naming them all

    const modifiedChildren = React.useMemo(() => {
      return React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          const childStyle = child.props.style ? child.props.style : {};
          return React.cloneElement(child, {
            // @ts-ignore
            style: {
              ...childStyle,
              marginHorizontal: space * 10,
              // backgroundColor: 'black',
            },
          });
        }
        return child;
      });
    }, [children, space]);

    return (
      <View style={[props.style, { flexDirection: 'row' }]}>
        {modifiedChildren}
      </View>
    );
  }
);
// `$: -------------------------------------------------------------------------------`
// ^XSTACK

// `$: -------------------------------------------------------------------------------`
interface YStackProps {
  children: ReactNode[];
  space: number | undefined;
  style: ViewStyle;
}
export const YStack: React.FC<YStackProps> = React.memo(
  ({ children, space = 0, style }) => {
    // space is default 0
    console.log(children);

    const modifiedChildren = React.useMemo(() => {
      return React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            // @ts-ignore
            style: {
              ...child.props.style,
              marginHorizontal: space * 10,
              // backgroundColor: 'black',
            },
          });
        }
        return child;
      });
    }, [children, space]);

    return (
      <View style={[style, { flexDirection: 'column' }]}>
        {modifiedChildren}
      </View>
    );
  }
);
// `$: -------------------------------------------------------------------------------`
// ^YSTACK

// `$: -------------------------------------------------------------------------------`
interface CenterProps {
  children: ReactNode[];
  space?: number;
  style: ViewStyle;
}
export const Center: React.FC<CenterProps> = ({ children, style }) => {
  return (
    <View style={[style, { justifyContent: 'center', alignItems: 'center' }]}>
      {children}
    </View>
  );
};
// `$: -------------------------------------------------------------------------------`
// ^Center

// `$: -------------------------------------------------------------------------------`
interface BaselineProps {
  children: ReactNode[];
  space: number | undefined;
  style: ViewStyle;
}
export const Baseline: React.FC<BaselineProps> = React.memo(
  ({ children, style }) => {
    return (
      <View style={[style, { flex: 1, alignItems: 'center' }]}>{children}</View>
    );
  }
);
// `$: -------------------------------------------------------------------------------`
// ^Baseline
