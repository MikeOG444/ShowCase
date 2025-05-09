import { useMemo } from 'react';
import { useTheme } from './useTheme';

/**
 * Hook to generate component styles with theme and variant support
 *
 * @param baseClasses - Base classes that are always applied
 * @param variantClasses - Object mapping variant names to classes
 * @param variant - Current variant to apply
 * @param stateClasses - Object mapping state names to classes
 * @param states - Object with boolean values for each state
 * @returns Combined classes string
 */
export function useComponentStyles(
  baseClasses: string,
  variantClasses?: Record<string, string>,
  variant?: string,
  stateClasses?: Record<string, string>,
  states?: Record<string, boolean>
): string {
  const { theme } = useTheme();

  return useMemo(() => {
    let classes = baseClasses;

    // Add variant classes if a variant is specified
    if (variant && variantClasses && variantClasses[variant]) {
      classes += ' ' + variantClasses[variant];
    }

    // Add state classes for active states
    if (states && stateClasses) {
      Object.entries(states).forEach(([state, isActive]) => {
        if (isActive && stateClasses[state]) {
          classes += ' ' + stateClasses[state];
        }
      });
    }

    // Add theme class
    classes += ` theme-${theme}`;

    return classes;
  }, [baseClasses, variant, variantClasses, states, stateClasses, theme]);
}
