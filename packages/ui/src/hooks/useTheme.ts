import { useState, useEffect, useMemo } from 'react';
import { isPlatformWeb } from '../utils/platform';

export type Theme = 'light' | 'dark';
export type ThemePreference = Theme | 'system';

interface ThemeContextValue {
  theme: Theme;
  preference: ThemePreference;
  setTheme: (theme: ThemePreference) => void;
  toggleTheme: () => void;
}

/**
 * Hook to manage theme state
 */
export function useThemeState(): ThemeContextValue {
  const [preference, setPreference] = useState<ThemePreference>('system');
  const [theme, setThemeState] = useState<Theme>('light');

  // Function to determine theme based on system preference
  const getSystemTheme = (): Theme => {
    if (!isPlatformWeb()) {
      // For React Native, we'll need to use Appearance API
      // This is a simplified version for now
      return 'light';
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  // Update the theme when preference changes
  useEffect(() => {
    if (preference === 'system') {
      setThemeState(getSystemTheme());
    } else {
      setThemeState(preference);
    }
  }, [preference]);

  // Listen for system theme changes
  useEffect(() => {
    if (!isPlatformWeb() || preference !== 'system') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e: MediaQueryListEvent) => {
      setThemeState(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [preference]);

  // Toggle between light, dark, and system
  const toggleTheme = () => {
    setPreference(prev => {
      if (prev === 'light') return 'dark';
      if (prev === 'dark') return 'system';
      return 'light';
    });
  };

  // Set theme directly
  const setTheme = (newTheme: ThemePreference) => {
    setPreference(newTheme);
  };

  // Memoize the context value to prevent unnecessary re-renders
  return useMemo(() => {
    return { theme, preference, setTheme, toggleTheme };
  }, [theme, preference]);
}

/**
 * Hook to access the current theme
 * This hook will try to use the app's ThemeContext if available,
 * otherwise it will fall back to the default theme state
 */
export function useTheme() {
  // Try to import the app's ThemeContext
  try {
    // For React Native / Mobile
    if (!isPlatformWeb()) {
      // Dynamic import would be ideal here, but for simplicity we'll use a try/catch
      // This assumes the mobile app exports a useTheme hook with a compatible interface
      const mobileContext = require('../../../apps/mobile/src/contexts/ThemeContext');
      if (mobileContext && mobileContext.useTheme) {
        const mobileTheme = mobileContext.useTheme();
        return {
          theme: mobileTheme.isDark ? ('dark' as Theme) : ('light' as Theme),
          preference: mobileTheme.theme as ThemePreference,
          setTheme: mobileTheme.setTheme,
          toggleTheme: () => {
            const nextTheme =
              mobileTheme.theme === 'light'
                ? 'dark'
                : mobileTheme.theme === 'dark'
                ? 'system'
                : 'light';
            mobileTheme.setTheme(nextTheme);
          },
        };
      }
    }

    // For Web
    else {
      const webContext = require('../../../apps/web/src/contexts/ThemeContext');
      if (webContext && webContext.useTheme) {
        return webContext.useTheme();
      }
    }
  } catch (e) {
    // If we can't import the app's ThemeContext, fall back to the default
    console.warn('Could not import app ThemeContext, using default theme state');
  }

  // Fall back to the default theme state
  const themeState = useThemeState();
  return themeState;
}
