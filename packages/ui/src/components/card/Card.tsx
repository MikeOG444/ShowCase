import React from 'react';
import { View } from '../../primitives/view';
import { StyleSheet } from 'react-native';
import { useComponentStyles } from '../../hooks/useComponentStyles';
import { CardProps } from '../../types/component-props';
import { getStyleForPlatform } from '../../utils/styles';

/**
 * Card component for displaying content in a contained, elevated surface
 */
export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  style,
  variant = 'default',
  testID,
  ...rest
}) => {
  // Generate component styles based on props
  const componentClasses = useComponentStyles(
    'ui-card',
    {
      default: 'ui-card-default',
      outlined: 'ui-card-outlined',
      elevated: 'ui-card-elevated',
    },
    variant
  );

  const classes = `${componentClasses} ${className}`;

  // Get platform-specific style
  const platformStyle = getStyleForPlatform(style);

  return (
    <View className={classes} style={platformStyle} testID={testID} {...rest}>
      {children}
    </View>
  );
};
