import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme, Theme } from '../contexts/ThemeContext';

/**
 * ThemeToggle component for switching between light, dark, and system themes
 */
export const ThemeToggle: React.FC = () => {
  const { theme, setTheme, colors } = useTheme();

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.card }]}>
      <Text style={[styles.title, { color: colors.foreground }]}>Theme</Text>
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: colors.muted },
            theme === 'light' && [styles.activeButton, { backgroundColor: colors.primary }],
          ]}
          onPress={() => handleThemeChange('light')}
        >
          <Text
            style={[
              styles.buttonText,
              { color: colors.foreground },
              theme === 'light' && styles.activeButtonText,
            ]}
          >
            Light
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: colors.muted },
            theme === 'dark' && [styles.activeButton, { backgroundColor: colors.primary }],
          ]}
          onPress={() => handleThemeChange('dark')}
        >
          <Text
            style={[
              styles.buttonText,
              { color: colors.foreground },
              theme === 'dark' && styles.activeButtonText,
            ]}
          >
            Dark
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: colors.muted },
            theme === 'system' && [styles.activeButton, { backgroundColor: colors.primary }],
          ]}
          onPress={() => handleThemeChange('system')}
        >
          <Text
            style={[
              styles.buttonText,
              { color: colors.foreground },
              theme === 'system' && styles.activeButtonText,
            ]}
          >
            System
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  activeButton: {
    // Base styles, color will be applied dynamically
  },
  buttonText: {
    // Color will be applied dynamically
  },
  activeButtonText: {
    color: '#fff',
  },
});
