const StyleDictionary = require('style-dictionary');
const Color = require('color');

// Register custom transforms
StyleDictionary.registerTransform({
  name: 'size/px',
  type: 'value',
  matcher: token => {
    return token.unit === 'pixel' || token.type === 'dimension';
  },
  transformer: token => {
    return `${token.value}px`;
  },
});

// Register custom format for CSS theme variables
StyleDictionary.registerFormat({
  name: 'css/theme-variables',
  formatter: function ({ dictionary }) {
    const getColorRgbValues = colorValue => {
      try {
        const color = Color(colorValue);
        const rgb = color.rgb().array();
        return `${Math.round(rgb[0])} ${Math.round(rgb[1])} ${Math.round(rgb[2])}`;
      } catch (e) {
        console.error(`Error parsing color: ${colorValue}`, e);
        return '0 0 0';
      }
    };

    // Extract theme tokens
    const lightIosTokens = {};
    const darkIosTokens = {};
    const lightAndroidTokens = {};
    const darkAndroidTokens = {};
    const lightWebTokens = {};
    const darkWebTokens = {};

    dictionary.allTokens
      .filter(token => token.path[0] === 'color' && token.path[1] === 'theme')
      .forEach(token => {
        const theme = token.path[2]; // light or dark
        const platform = token.path[3]; // ios, android, web
        const name = token.path[4]; // actual color name

        const rgbValue = getColorRgbValues(token.value);

        if (theme === 'light') {
          if (platform === 'ios') {
            lightIosTokens[name] = rgbValue;
          } else if (platform === 'android') {
            lightAndroidTokens[name] = rgbValue;
          } else if (platform === 'web') {
            lightWebTokens[name] = rgbValue;
          }
        } else if (theme === 'dark') {
          if (platform === 'ios') {
            darkIosTokens[name] = rgbValue;
          } else if (platform === 'android') {
            darkAndroidTokens[name] = rgbValue;
          } else if (platform === 'web') {
            darkWebTokens[name] = rgbValue;
          }
        }
      });

    // Generate CSS
    let css = '@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n';

    css += '@layer base {\n';
    css += ':root {\n';

    // Light mode variables
    Object.entries(lightIosTokens).forEach(([name, value]) => {
      css += `  --${name}: ${value};\n`;
    });

    Object.entries(lightAndroidTokens).forEach(([name, value]) => {
      css += `  --android-${name}: ${value};\n`;
    });

    Object.entries(lightWebTokens).forEach(([name, value]) => {
      css += `  --web-${name}: ${value};\n`;
    });

    css += '}\n\n';

    // Dark mode variables
    css += '@media (prefers-color-scheme: dark) {\n';
    css += '  :root {\n';

    Object.entries(darkIosTokens).forEach(([name, value]) => {
      css += `    --${name}: ${value};\n`;
    });

    Object.entries(darkAndroidTokens).forEach(([name, value]) => {
      css += `    --android-${name}: ${value};\n`;
    });

    Object.entries(darkWebTokens).forEach(([name, value]) => {
      css += `    --web-${name}: ${value};\n`;
    });

    css += '  }\n';
    css += '}\n';
    css += '}\n';

    return css;
  },
});

// Register custom format for Tailwind config
StyleDictionary.registerFormat({
  name: 'javascript/tailwind-config',
  formatter: function ({ dictionary }) {
    const colors = {};
    const spacing = {};
    const borderRadius = {};
    const fontSize = {};
    const lineHeight = {};
    const fontWeight = {};
    const fontFamily = {};
    const boxShadow = {};

    // Process brand colors
    dictionary.allTokens
      .filter(token => token.path[0] === 'color' && token.path[1] === 'brand')
      .forEach(token => {
        const path = token.path.slice(1); // Remove the first element (usually 'color')
        let current = colors;

        // Handle nested color structure (e.g., primary.navy)
        for (let i = 0; i < path.length - 1; i++) {
          const key = path[i];
          if (!current[key]) {
            current[key] = {};
          }
          current = current[key];
        }

        current[path[path.length - 1]] = token.value;
      });

    // Process status colors
    dictionary.allTokens
      .filter(token => token.path[0] === 'color' && token.path[1] === 'status')
      .forEach(token => {
        colors[token.path[2]] = token.value;
      });

    // Process theme colors for CSS variables
    const themeColors = {
      primary: 'rgb(var(--primary) / <alpha-value>)',
      secondary: 'rgb(var(--secondary) / <alpha-value>)',
      accent: 'rgb(var(--accent) / <alpha-value>)',
      background: 'rgb(var(--background) / <alpha-value>)',
      foreground: 'rgb(var(--foreground) / <alpha-value>)',
      card: 'rgb(var(--card) / <alpha-value>)',
      'card-foreground': 'rgb(var(--card-foreground) / <alpha-value>)',
      destructive: 'rgb(var(--destructive) / <alpha-value>)',
      success: 'rgb(var(--success) / <alpha-value>)',
      warning: 'rgb(var(--warning) / <alpha-value>)',
      info: 'rgb(var(--info) / <alpha-value>)',
      muted: 'rgb(var(--muted) / <alpha-value>)',
      'muted-foreground': 'rgb(var(--muted-foreground) / <alpha-value>)',
      border: 'rgb(var(--border) / <alpha-value>)',
      input: 'rgb(var(--input) / <alpha-value>)',
      ring: 'rgb(var(--ring) / <alpha-value>)',
    };

    // Add theme colors to colors object
    Object.assign(colors, themeColors);

    // Process spacing
    dictionary.allTokens
      .filter(token => token.type === 'spacing')
      .forEach(token => {
        spacing[token.name] = token.value;
      });

    // Process border radius
    dictionary.allTokens
      .filter(token => token.type === 'borderRadius')
      .forEach(token => {
        borderRadius[token.name] = token.value;
      });

    // Process font sizes
    dictionary.allTokens
      .filter(token => token.type === 'fontSize')
      .forEach(token => {
        fontSize[token.name] = token.value;
      });

    // Process line heights
    dictionary.allTokens
      .filter(token => token.type === 'lineHeight')
      .forEach(token => {
        lineHeight[token.name] = token.value;
      });

    // Process font weights
    dictionary.allTokens
      .filter(token => token.type === 'fontWeight')
      .forEach(token => {
        fontWeight[token.name] = token.value;
      });

    // Process font families
    dictionary.allTokens
      .filter(token => token.type === 'fontFamily')
      .forEach(token => {
        fontFamily[token.name] = token.value;
      });

    // Process shadows
    dictionary.allTokens
      .filter(token => token.type === 'boxShadow')
      .forEach(token => {
        boxShadow[token.name] = token.value;
      });

    return `module.exports = {
  theme: {
    colors: ${JSON.stringify(colors, null, 2)},
    spacing: ${JSON.stringify(spacing, null, 2)},
    borderRadius: ${JSON.stringify(borderRadius, null, 2)},
    fontSize: ${JSON.stringify(fontSize, null, 2)},
    lineHeight: ${JSON.stringify(lineHeight, null, 2)},
    fontWeight: ${JSON.stringify(fontWeight, null, 2)},
    fontFamily: ${JSON.stringify(fontFamily, null, 2)},
    boxShadow: ${JSON.stringify(boxShadow, null, 2)},
    extend: {},
  },
  darkMode: 'class',
};`;
  },
});

// Create and run Style Dictionary
const StyleDictionaryExtended = StyleDictionary.extend('./config.json');
StyleDictionaryExtended.buildAllPlatforms();
