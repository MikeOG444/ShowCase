import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { View } from 'react-native';

// Import styles for NativeWind
import './styles/index.css';

import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import RootNavigator from './navigation/RootNavigator';
import { styled } from 'nativewind';

// Create a client for React Query
const queryClient = new QueryClient();

// Theme-aware StatusBar component
function ThemedStatusBar() {
  const { isDark } = useTheme();
  return <StatusBar style={isDark ? 'light' : 'dark'} />;
}

// Create a styled SafeAreaView that can accept className
const StyledSafeAreaProvider = styled(SafeAreaProvider);

// Theme-aware root component
function ThemedApp() {
  const { isDark } = useTheme();

  return (
    <StyledSafeAreaProvider className={isDark ? 'dark' : 'light'}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <RootNavigator />
          <ThemedStatusBar />
        </NavigationContainer>
      </QueryClientProvider>
    </StyledSafeAreaProvider>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
}
