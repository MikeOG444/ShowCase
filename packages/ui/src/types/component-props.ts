import React from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { isPlatformWeb } from '../utils/platform';

/**
 * Union type for style props that works on both web and native
 */
export type StylePropType = React.CSSProperties | StyleProp<ViewStyle> | StyleProp<TextStyle>;

/**
 * Base props that are common to all components
 */
export interface BaseProps {
  className?: string;
  style?: StylePropType;
  testID?: string;
}

/**
 * Props for components that can be pressed/clicked
 */
export interface PressableProps extends BaseProps {
  children: React.ReactNode;
  onPress?: () => void;
  disabled?: boolean;
  accessibilityLabel?: string;
}

/**
 * Props for text components
 */
export interface TextProps extends BaseProps {
  children: React.ReactNode;
  variant?: 'body' | 'label' | 'caption';
  weight?: 'normal' | 'medium' | 'bold';
  color?: 'primary' | 'secondary' | 'tertiary';
}

/**
 * Props for container components
 */
export interface ContainerProps extends BaseProps {
  children: React.ReactNode;
}

/**
 * Props for card components
 */
export interface CardProps extends BaseProps {
  children: React.ReactNode;
  variant?: 'default' | 'outlined' | 'elevated';
}

/**
 * Props for input components
 */
export interface InputProps extends BaseProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  error?: string;
  disabled?: boolean;
  secureTextEntry?: boolean;
}
