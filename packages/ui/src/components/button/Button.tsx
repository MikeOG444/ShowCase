import React from 'react';
import { Pressable } from '../../primitives/pressable';
import { Text } from '../../primitives/text';
import { PressableProps } from '../../types/component-props';
import { useComponentStyles } from '../../hooks/useComponentStyles';
import { useTheme } from '../../hooks/useTheme';

export interface ButtonProps extends PressableProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

/**
 * Button component with various styles and sizes
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  style,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  onPress,
  accessibilityLabel,
  testID,
  ...rest
}) => {
  const { theme } = useTheme();

  // Generate component styles based on props
  const baseClasses = 'ui-button';

  const variantClasses = {
    primary: `ui-button-primary ui-button-primary-${theme}`,
    secondary: `ui-button-secondary ui-button-secondary-${theme}`,
    tertiary: `ui-button-tertiary ui-button-tertiary-${theme}`,
    outline: `ui-button-outline ui-button-outline-${theme}`,
  };

  const sizeClasses = {
    small: 'ui-button-small',
    medium: 'ui-button-medium',
    large: 'ui-button-large',
  };

  const stateClasses = {
    disabled: 'ui-button-disabled',
    fullWidth: 'ui-button-full-width',
  };

  const states = {
    disabled,
    fullWidth,
  };

  const componentClasses = useComponentStyles(
    baseClasses,
    variantClasses,
    variant,
    stateClasses,
    states
  );

  const classes = `${componentClasses} ${className}`;

  // Text color based on variant
  const getTextColor = () => {
    if (disabled) return 'tertiary';

    if (variant === 'primary') {
      return 'primary';
    }

    return 'secondary';
  };

  return (
    <Pressable
      className={classes}
      style={style}
      onPress={onPress}
      disabled={disabled}
      accessibilityLabel={accessibilityLabel}
      testID={testID}
      {...rest}
    >
      {leftIcon && <span className="ui-button-icon ui-button-icon-left">{leftIcon}</span>}
      <Text variant="body" weight="medium" color={getTextColor()} className="ui-button-text">
        {children}
      </Text>
      {rightIcon && <span className="ui-button-icon ui-button-icon-right">{rightIcon}</span>}
    </Pressable>
  );
};
