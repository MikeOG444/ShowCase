import React from 'react';
import { Pressable as RNPressable } from 'react-native';
import { platformSelect } from '../../utils/platform';
import { PressableProps } from '../../types/component-props';
import { useComponentStyles } from '../../hooks/useComponentStyles';
import { getStyleForPlatform } from '../../utils/styles';

/**
 * Pressable primitive component that works on both web and native platforms
 * This is a basic interactive component that can be used to build more complex components
 */
export const Pressable: React.FC<PressableProps> = ({
  children,
  className = '',
  style,
  onPress,
  disabled = false,
  accessibilityLabel,
  testID,
  ...rest
}) => {
  // Generate component styles
  const componentClasses = useComponentStyles(
    'ui-pressable',
    undefined,
    undefined,
    {
      disabled: 'ui-pressable-disabled',
    },
    { disabled }
  );
  const classes = `${componentClasses} ${className}`;

  // Get platform-specific style
  const platformStyle = getStyleForPlatform(style);

  // Platform-specific implementation
  return platformSelect(
    // Web implementation
    () => (
      <button
        className={classes}
        style={platformStyle}
        onClick={onPress}
        disabled={disabled}
        aria-label={accessibilityLabel}
        data-testid={testID}
        {...rest}
      >
        {children}
      </button>
    ),
    // Native implementation
    () => {
      // For React Native, we don't use className
      return (
        <RNPressable
          style={platformStyle}
          onPress={onPress}
          disabled={disabled}
          accessibilityLabel={accessibilityLabel}
          testID={testID}
          {...rest}
        >
          {children}
        </RNPressable>
      );
    }
  );
};
