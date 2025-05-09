import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';
import { InputProps } from '../../types/component-props';
import { useComponentStyles } from '../../hooks/useComponentStyles';
import { getStyleForPlatform } from '../../utils/styles';
import { platformSelect } from '../../utils/platform';

/**
 * Input component for text entry
 */
export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  error,
  disabled = false,
  secureTextEntry = false,
  className = '',
  style,
  testID,
  ...rest
}) => {
  // Generate component styles based on props
  const componentClasses = useComponentStyles(
    'ui-input',
    {
      default: 'ui-input-default',
      error: 'ui-input-error',
      disabled: 'ui-input-disabled',
    },
    error ? 'error' : disabled ? 'disabled' : 'default'
  );

  const labelClasses = 'ui-input-label';
  const errorClasses = 'ui-input-error-text';

  const classes = `${componentClasses} ${className}`;

  // Get platform-specific style
  const platformStyle = getStyleForPlatform(style);

  return platformSelect(
    // Web implementation
    () => (
      <div className="ui-input-container">
        {label && <label className={labelClasses}>{label}</label>}
        <input
          className={classes}
          style={platformStyle}
          placeholder={placeholder}
          value={value}
          onChange={e => onChangeText(e.target.value)}
          disabled={disabled}
          type={secureTextEntry ? 'password' : 'text'}
          data-testid={testID}
          {...rest}
        />
        {error && <span className={errorClasses}>{error}</span>}
      </div>
    ),
    // Native implementation
    () => (
      <View style={styles.container}>
        {label && <Text style={styles.label}>{label}</Text>}
        <TextInput
          style={[styles.input, platformStyle]}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          editable={!disabled}
          secureTextEntry={secureTextEntry}
          testID={testID}
          {...rest}
        />
        {error && <Text style={styles.errorText}>{error}</Text>}
      </View>
    )
  );
};

// Basic styles for React Native
const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
  },
  errorText: {
    color: 'red',
    marginTop: 4,
  },
});
