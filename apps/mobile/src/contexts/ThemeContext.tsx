import React, { createContext, useContext, useState, useEffect } from 'react';
import { Appearance } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Define theme types
export type Theme = 'light' | 'dark' | 'system';
export type ThemeColors = {
  background: string;
  foreground: string;
  card: string;
  'card-foreground': string;
  popover: string;
  'popover-foreground': string;
  primary: string;
  'primary-foreground': string;
  secondary: string;
  'secondary-foreground': string;
  muted: string;
  'muted-foreground': string;
  accent: string;
  'accent-foreground': string;
  destructive: string;
  'destructive-foreground': string;
  border: string;
  input: string;
  ring: string;
  success: string;
  'success-foreground': string;
  warning: string;
  'warning-foreground': string;
  info: string;
  'info-foreground': string;
  'text-primary': string;
  'text-secondary': string;
  'text-tertiary': string;
};

// Create context with default values
interface ThemeContextType {
  theme: Theme;
  isDark: boolean;
  colors: ThemeColors;
  setTheme: (theme: Theme) => void;
}

// Light and dark theme colors
const lightColors: ThemeColors = {
  background: 'rgb(248, 250, 252)',
  foreground: 'rgb(15, 23, 42)',
  card: 'rgb(255, 255, 255)',
  'card-foreground': 'rgb(15, 23, 42)',
  popover: 'rgb(255, 255, 255)',
  'popover-foreground': 'rgb(15, 23, 42)',
  primary: 'rgb(26, 77, 124)',
  'primary-foreground': 'rgb(255, 255, 255)',
  secondary: 'rgb(251, 191, 36)',
  'secondary-foreground': 'rgb(15, 23, 42)',
  muted: 'rgb(241, 245, 249)',
  'muted-foreground': 'rgb(55, 65, 81)',
  accent: 'rgb(251, 191, 36)',
  'accent-foreground': 'rgb(15, 23, 42)',
  destructive: 'rgb(239, 68, 68)',
  'destructive-foreground': 'rgb(255, 255, 255)',
  border: 'rgb(226, 232, 240)',
  input: 'rgb(226, 232, 240)',
  ring: 'rgb(251, 191, 36)',
  success: 'rgb(16, 185, 129)',
  'success-foreground': 'rgb(255, 255, 255)',
  warning: 'rgb(245, 158, 11)',
  'warning-foreground': 'rgb(255, 255, 255)',
  info: 'rgb(59, 130, 246)',
  'info-foreground': 'rgb(255, 255, 255)',
  'text-primary': 'rgb(15, 23, 42)',
  'text-secondary': 'rgb(55, 65, 81)',
  'text-tertiary': 'rgb(107, 114, 128)',
};

const darkColors: ThemeColors = {
  background: 'rgb(17, 24, 39)',
  foreground: 'rgb(249, 250, 251)',
  card: 'rgb(31, 41, 55)',
  'card-foreground': 'rgb(249, 250, 251)',
  popover: 'rgb(31, 41, 55)',
  'popover-foreground': 'rgb(249, 250, 251)',
  primary: 'rgb(45, 111, 173)',
  'primary-foreground': 'rgb(255, 255, 255)',
  secondary: 'rgb(251, 191, 36)',
  'secondary-foreground': 'rgb(15, 23, 42)',
  muted: 'rgb(55, 65, 81)',
  'muted-foreground': 'rgb(229, 231, 235)',
  accent: 'rgb(251, 191, 36)',
  'accent-foreground': 'rgb(15, 23, 42)',
  destructive: 'rgb(248, 113, 113)',
  'destructive-foreground': 'rgb(255, 255, 255)',
  border: 'rgb(55, 65, 81)',
  input: 'rgb(55, 65, 81)',
  ring: 'rgb(251, 191, 36)',
  success: 'rgb(74, 222, 128)',
  'success-foreground': 'rgb(255, 255, 255)',
  warning: 'rgb(251, 191, 36)',
  'warning-foreground': 'rgb(255, 255, 255)',
  info: 'rgb(96, 165, 250)',
  'info-foreground': 'rgb(255, 255, 255)',
  'text-primary': 'rgb(249, 250, 251)',
  'text-secondary': 'rgb(229, 231, 235)',
  'text-tertiary': 'rgb(156, 163, 175)',
};

const defaultContext: ThemeContextType = {
  theme: 'system',
  isDark: false,
  colors: lightColors,
  setTheme: () => {},
};

export const ThemeContext = createContext<ThemeContextType>(defaultContext);

// Storage key for persisting theme preference
const THEME_STORAGE_KEY = '@showcase/theme';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>('system');
  const [isDark, setIsDark] = useState(false);

  // Load saved theme preference on mount
  useEffect(() => {
    const loadThemePreference = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem(THEME_STORAGE_KEY);
        if (savedTheme) {
          setThemeState(savedTheme as Theme);
        }
      } catch (error) {
        console.error('Failed to load theme preference:', error);
      }
    };

    loadThemePreference();
  }, []);

  // Update isDark state based on theme and system preference
  useEffect(() => {
    const systemColorScheme = Appearance.getColorScheme() || 'light';
    const shouldUseDarkMode =
      theme === 'dark' || (theme === 'system' && systemColorScheme === 'dark');

    setIsDark(shouldUseDarkMode);

    // Listen for system theme changes if in system mode
    if (theme === 'system') {
      const subscription = Appearance.addChangeListener(({ colorScheme }) => {
        setIsDark(colorScheme === 'dark');
      });

      return () => subscription.remove();
    }
  }, [theme]);

  // Save theme preference when it changes
  const setTheme = async (newTheme: Theme) => {
    setThemeState(newTheme);
    try {
      await AsyncStorage.setItem(THEME_STORAGE_KEY, newTheme);
    } catch (error) {
      console.error('Failed to save theme preference:', error);
    }
  };

  // Get the appropriate color palette based on theme
  const themeColors = isDark ? darkColors : lightColors;

  const contextValue: ThemeContextType = {
    theme,
    isDark,
    colors: themeColors,
    setTheme,
  };

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};

// Custom hook for accessing theme context
export const useTheme = () => useContext(ThemeContext);
