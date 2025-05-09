import React from 'react';
import { View as RNView } from 'react-native';
import { platformSelect } from '../../utils/platform';
import { ContainerProps } from '../../types/component-props';
import { useComponentStyles } from '../../hooks/useComponentStyles';
import { getStyleForPlatform } from '../../utils/styles';

/**
 * View primitive component that works on both web and native platforms
 * This is a basic container component that can be used to build more complex components
 */
export const View: React.FC<ContainerProps> = ({
  children,
  className = '',
  style,
  testID,
  ...rest
}) => {
  // Generate component styles
  const componentClasses = useComponentStyles('ui-view');
  const classes = `${componentClasses} ${className}`;

  // Get platform-specific style
  const platformStyle = getStyleForPlatform(style);

  // Platform-specific implementation
  return platformSelect(
    // Web implementation
    () => (
      <div className={classes} style={platformStyle} data-testid={testID} {...rest}>
        {children}
      </div>
    ),
    // Native implementation
    () => {
      // For React Native, we don't use className
      // In a real implementation, we would convert className to style props
      return (
        <RNView style={platformStyle} testID={testID} {...rest}>
          {children}
        </RNView>
      );
    }
  );
};
