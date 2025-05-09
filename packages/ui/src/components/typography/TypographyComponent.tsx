import React from 'react';
import { Text } from '../../primitives/text';
import { TextProps } from '../../types/component-props';
import { useComponentStyles } from '../../hooks/useComponentStyles';
import { getStyleForPlatform } from '../../utils/styles';

/**
 * Typography component for displaying text with consistent styling
 */
export const Typography: React.FC<TextProps> = ({
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
    'ui-typography',
    {
      body: 'ui-typography-body',
      label: 'ui-typography-label',
      caption: 'ui-typography-caption',
    },
    variant,
    {
      normal: 'ui-typography-normal',
      medium: 'ui-typography-medium',
      bold: 'ui-typography-bold',
    },
    { [weight]: true }
  );

  // Add color classes
  const colorClasses = {
    primary: 'ui-typography-color-primary',
    secondary: 'ui-typography-color-secondary',
    tertiary: 'ui-typography-color-tertiary',
  };

  const classes = `${componentClasses} ${colorClasses[color]} ${className}`;

  // Get platform-specific style
  const platformStyle = getStyleForPlatform(style);

  return (
    <Text
      className={classes}
      style={platformStyle}
      variant={variant}
      weight={weight}
      color={color}
      testID={testID}
      {...rest}
    >
      {children}
    </Text>
  );
};
