import { View, type ViewStyle } from 'react-native';
import React, { type ReactNode } from 'react';

export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

//
interface CSSAttributes {
  alignContent?: string;
  alignItems?: string;
  alignSelf?: string;
  aspectRatio?: number;
  borderBottomWidth?: number;
  borderEndWidth?: number;
  borderLeftWidth?: number;
  borderRightWidth?: number;
  borderStartWidth?: number;
  borderTopWidth?: number;
  borderWidth?: number;
  bottom?: number | string;
  display?: string;
  end?: number | string;
  flex?: number;
  flexBasis?: number | string;
  flexDirection?: string;
  flexGrow?: number;
  flexShrink?: number;
  flexWrap?: string;
  height?: number | string;
  justifyContent?: string;
  left?: number | string;
  margin?: number | string;
  marginBottom?: number | string;
  marginEnd?: number | string;
  marginHorizontal?: number | string;
  marginLeft?: number | string;
  marginRight?: number | string;
  marginStart?: number | string;
  marginTop?: number | string;
  marginVertical?: number | string;
  maxHeight?: number | string;
  maxWidth?: number | string;
  minHeight?: number | string;
  minWidth?: number | string;
  overflow?: string;
  padding?: number | string;
  paddingBottom?: number | string;
  paddingEnd?: number | string;
  paddingHorizontal?: number | string;
  paddingLeft?: number | string;
  paddingRight?: number | string;
  paddingStart?: number | string;
  paddingTop?: number | string;
  paddingVertical?: number | string;
  position?: string;
  right?: number | string;
  start?: number | string;
  top?: number | string;
  width?: number | string;
  zIndex?: number;
  direction?: string;
  shadowColor?: string;
  shadowOffset?: { width: number; height: number };
  shadowOpacity?: number;
  shadowRadius?: number;
  elevation?: number;
  backgroundColor?: string;
  borderColor?: string;
  borderTopColor?: string;
  borderRightColor?: string;
  borderBottomColor?: string;
  borderLeftColor?: string;
  borderRadius?: number;
  borderTopEndRadius?: number;
  borderTopStartRadius?: number;
  borderTopRightRadius?: number;
  borderTopLeftRadius?: number;
  borderBottomEndRadius?: number;
  borderBottomStartRadius?: number;
  borderBottomRightRadius?: number;
  borderBottomLeftRadius?: number;
  borderStyle?: string;
  opacity?: number;
  transform?: string[];
}

// `$: -------------------------------------------------------------------------------`
interface XStackProps extends CSSAttributes {
  // we are now using both CSS attributes and also interface defined here
  children: ReactNode[];
  space?: number;
  style: ViewStyle;
}
export const XStack: React.FC<XStackProps> = React.memo(
  (props, { children, space = 0 }) => {
    // spreading props has allowed us to use props without specifically naming them all
    console.log(children);

    const modifiedChildren = React.useMemo(() => {
      return React.Children.map(children, (child) => {
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
            style: {
              ...child.props.style,
              marginHorizontal: space * 10,
              backgroundColor: 'black',
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
