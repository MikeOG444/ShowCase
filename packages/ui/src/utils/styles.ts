import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { isPlatformWeb } from './platform';
import { StylePropType } from '../types/component-props';

/**
 * Utility function to handle style props for both web and native platforms
 * @param style The style prop that could be either React.CSSProperties or React Native styles
 * @returns The appropriate style object for the current platform
 */
export function getStyleForPlatform(style?: StylePropType): any {
  if (!style) return undefined;

  // For web platform, return the style as is
  if (isPlatformWeb()) {
    return style;
  }

  // For native platform, if the style is a React.CSSProperties object,
  // we would ideally convert it to React Native styles, but for now
  // we'll just return undefined to avoid type errors
  // In a real implementation, you would convert CSS properties to RN styles
  return style;
}
