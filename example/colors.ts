import { Platform } from 'react-native';

const IOS_SYSTEM_COLORS = {
  white: 'rgb(255, 255, 255)',
  black: 'rgb(0, 0, 0)',
  light: {
    grey6: 'rgb(246, 250, 255)',
    grey5: 'rgb(240, 243, 246)',
    grey4: 'rgb(230, 237, 241)',
    grey3: 'rgb(210, 220, 230)',
    grey2: 'rgb(176, 188, 199)',
    grey: 'rgb(130, 145, 160)',
    background: 'rgb(246, 250, 255)',
    foreground: 'rgb(6, 8, 10)',
    root: 'rgb(246, 250, 255)',
    card: 'rgb(255, 255, 255)',
    destructive: 'rgb(220, 38, 38)',
    primary: 'rgb(12, 35, 64)',
    secondary: 'rgb(255, 183, 3)',
    accent: 'rgb(255, 183, 3)',
    success: 'rgb(34, 197, 94)',
    warning: 'rgb(245, 158, 11)',
    info: 'rgb(59, 130, 246)',
  },
  dark: {
    grey6: 'rgb(17, 31, 50)',
    grey5: 'rgb(25, 40, 60)',
    grey4: 'rgb(30, 44, 65)',
    grey3: 'rgb(38, 57, 82)',
    grey2: 'rgb(60, 80, 105)',
    grey: 'rgb(100, 120, 140)',
    background: 'rgb(12, 22, 37)',
    foreground: 'rgb(241, 249, 255)',
    root: 'rgb(12, 22, 37)',
    card: 'rgb(17, 31, 50)',
    destructive: 'rgb(248, 113, 113)',
    primary: 'rgb(12, 35, 64)',
    secondary: 'rgb(255, 183, 3)',
    accent: 'rgb(255, 183, 3)',
    success: 'rgb(74, 222, 128)',
    warning: 'rgb(251, 191, 36)',
    info: 'rgb(96, 165, 250)',
  },
} as const;

const ANDROID_COLORS = {
  white: 'rgb(255, 255, 255)',
  black: 'rgb(0, 0, 0)',
  light: {
    grey6: 'rgb(246, 250, 255)',
    grey5: 'rgb(240, 243, 246)',
    grey4: 'rgb(230, 237, 241)',
    grey3: 'rgb(210, 220, 230)',
    grey2: 'rgb(176, 188, 199)',
    grey: 'rgb(130, 145, 160)',
    background: 'rgb(246, 250, 255)',
    foreground: 'rgb(6, 8, 10)',
    root: 'rgb(246, 250, 255)',
    card: 'rgb(255, 255, 255)',
    destructive: 'rgb(220, 38, 38)',
    primary: 'rgb(12, 35, 64)',
    secondary: 'rgb(255, 183, 3)',
    accent: 'rgb(255, 183, 3)',
    success: 'rgb(34, 197, 94)',
    warning: 'rgb(245, 158, 11)',
    info: 'rgb(59, 130, 246)',
  },
  dark: {
    grey6: 'rgb(17, 31, 50)',
    grey5: 'rgb(25, 40, 60)',
    grey4: 'rgb(30, 44, 65)',
    grey3: 'rgb(38, 57, 82)',
    grey2: 'rgb(60, 80, 105)',
    grey: 'rgb(100, 120, 140)',
    background: 'rgb(12, 22, 37)',
    foreground: 'rgb(241, 249, 255)',
    root: 'rgb(12, 22, 37)',
    card: 'rgb(17, 31, 50)',
    destructive: 'rgb(248, 113, 113)',
    primary: 'rgb(36, 64, 100)',
    secondary: 'rgb(255, 183, 3)',
    accent: 'rgb(255, 183, 3)',
    success: 'rgb(74, 222, 128)',
    warning: 'rgb(251, 191, 36)',
    info: 'rgb(96, 165, 250)',
  },
} as const;

const WEB_COLORS = {
  white: 'rgb(255, 255, 255)',
  black: 'rgb(0, 0, 0)',
  light: {
    grey6: 'rgb(246, 250, 255)',
    grey5: 'rgb(240, 243, 246)',
    grey4: 'rgb(230, 237, 241)',
    grey3: 'rgb(210, 220, 230)',
    grey2: 'rgb(176, 188, 199)',
    grey: 'rgb(130, 145, 160)',
    background: 'rgb(246, 250, 255)',
    foreground: 'rgb(6, 8, 10)',
    root: 'rgb(246, 250, 255)',
    card: 'rgb(255, 255, 255)',
    destructive: 'rgb(220, 38, 38)',
    primary: 'rgb(12, 35, 64)',
    secondary: 'rgb(255, 183, 3)',
    accent: 'rgb(255, 183, 3)',
    success: 'rgb(34, 197, 94)',
    warning: 'rgb(245, 158, 11)',
    info: 'rgb(59, 130, 246)',
  },
  dark: {
    grey6: 'rgb(17, 31, 50)',
    grey5: 'rgb(25, 40, 60)',
    grey4: 'rgb(30, 44, 65)',
    grey3: 'rgb(38, 57, 82)',
    grey2: 'rgb(60, 80, 105)',
    grey: 'rgb(100, 120, 140)',
    background: 'rgb(12, 22, 37)',
    foreground: 'rgb(241, 249, 255)',
    root: 'rgb(12, 22, 37)',
    card: 'rgb(17, 31, 50)',
    destructive: 'rgb(248, 113, 113)',
    primary: 'rgb(36, 64, 100)',
    secondary: 'rgb(255, 183, 3)',
    accent: 'rgb(255, 183, 3)',
    success: 'rgb(74, 222, 128)',
    warning: 'rgb(251, 191, 36)',
    info: 'rgb(96, 165, 250)',
  },
} as const;

// Showcase brand colors
export const SHOWCASE_COLORS = {
  primary: {
    navy: 'rgb(12, 35, 64)',     // Dark blue/navy from logo background
    navyLight: 'rgb(36, 64, 100)', // Lighter version for dark mode
  },
  secondary: {
    gold: 'rgb(255, 183, 3)',    // Gold/yellow from the "S" and shield
    goldDark: 'rgb(224, 160, 0)', // Darker gold for certain elements
    goldLight: 'rgb(255, 203, 75)' // Lighter gold for hover states
  },
  neutral: {
    white: 'rgb(255, 255, 255)',
    black: 'rgb(0, 0, 0)',
    grey: 'rgb(130, 145, 160)',
    greyLight: 'rgb(210, 220, 230)',
    greyDark: 'rgb(60, 80, 105)'
  },
  status: {
    success: 'rgb(34, 197, 94)',
    warning: 'rgb(245, 158, 11)',
    error: 'rgb(220, 38, 38)',
    info: 'rgb(59, 130, 246)'
  }
};

const COLORS =
  Platform.OS === 'ios'
    ? IOS_SYSTEM_COLORS
    : Platform.OS === 'android'
      ? ANDROID_COLORS
      : WEB_COLORS;

export { COLORS };