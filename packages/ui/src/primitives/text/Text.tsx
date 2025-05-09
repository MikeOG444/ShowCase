import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';
import { platformSelect, isPlatformWeb } from '../../utils/platform';
import { TextProps } from '../../types/component-props';
import { useComponentStyles } from '../../hooks/useComponentStyles';
import { getStyleForPlatform } from '../../utils/styles';

/**
 * Text primitive component that works on both web and native platforms
 */
export const Text: React.FC<TextProps> = ({
  children,
  className = '',
  style,
  variant = 'body',
  weight = 'normal',
  color = 'primary',
  testID,
  ...rest
}) => {
  // Generate component styles based on props
  const componentClasses = useComponentStyles(
    'ui-text',
    {
      body: 'ui-text-body',
      label: 'ui-text-label',
      caption: 'ui-text-caption',
    },
    variant,
    {
      normal: 'ui-text-normal',
      medium: 'ui-text-medium',
      bold: 'ui-text-bold',
    },
    { [weight]: true }
  );

  // Add color classes
  const colorClasses = {
    primary: 'ui-text-color-primary',
    secondary: 'ui-text-color-secondary',
    tertiary: 'ui-text-color-tertiary',
  };

  const classes = `${componentClasses} ${colorClasses[color]} ${className}`;

  // Get platform-specific style
  const platformStyle = getStyleForPlatform(style);

  // Platform-specific implementation
  return platformSelect(
    // Web implementation
    () => (
      <span className={classes} style={platformStyle} data-testid={testID} {...rest}>
        {children}
      </span>
    ),
    // Native implementation
    () => {
      // For React Native, we don't use className
      // In a real implementation, we would convert className to style props
      // or use a styling solution like styled-components/native
      return (
        <RNText style={platformStyle} testID={testID} {...rest}>
          {children}
        </RNText>
      );
    }
  );
};
