/**
 * Utility functions for platform detection and handling platform-specific code
 */

/**
 * Check if the current platform is web
 * @returns true if running on web, false if running on native
 */
export function isPlatformWeb(): boolean {
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}

/**
 * Check if the current platform is native (React Native)
 * @returns true if running on native, false if running on web
 */
export function isPlatformNative(): boolean {
  return !isPlatformWeb();
}

/**
 * Execute different code based on platform
 * @param webFn Function to execute on web
 * @param nativeFn Function to execute on native
 * @returns The result of the executed function
 */
export function platformSelect<T>(webFn: () => T, nativeFn: () => T): T {
  return isPlatformWeb() ? webFn() : nativeFn();
}

/**
 * Select a value based on platform
 * @param options Object containing web and native values
 * @returns The value for the current platform
 */
export function platformValue<T>(options: { web: T; native: T }): T {
  return isPlatformWeb() ? options.web : options.native;
}
