# ShowCase Design Tokens

This package contains the design tokens for the ShowCase platform. It uses Style Dictionary to generate tokens in various formats for use across different platforms.

## Overview

Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes. We use these tokens in place of hard-coded values to ensure a scalable and consistent visual system.

## Installation

```bash
npm install @showcase/tokens
```

## Usage

### Web (React)

```tsx
import tokens from '@showcase/tokens';

function Button() {
  return (
    <button
      style={{
        backgroundColor: tokens.color.primary[500],
        color: tokens.color.gray[50],
        padding: `${tokens.spacing[2]} ${tokens.spacing[4]}`,
        borderRadius: tokens.borderRadius.md,
        fontWeight: tokens.font.weight.medium,
      }}
    >
      Click me
    </button>
  );
}
```

### Tailwind CSS

The tokens package generates a Tailwind configuration that can be imported into your Tailwind config:

```js
// tailwind.config.js
const tokens = require('@showcase/tokens/dist/tailwind/tailwind.config');

module.exports = {
  theme: {
    ...tokens.theme,
    extend: {
      // Your custom theme extensions
    },
  },
  // Other Tailwind config
};
```

### Mobile (React Native with NativeWind)

```tsx
import tokens from '@showcase/tokens';
import { styled } from 'nativewind';
import { Text, TouchableOpacity } from 'react-native';

const StyledText = styled(Text);
const StyledButton = styled(TouchableOpacity);

function Button({ title }) {
  return (
    <StyledButton className="bg-primary-500 px-4 py-2 rounded-md">
      <StyledText className="text-gray-50 font-medium">{title}</StyledText>
    </StyledButton>
  );
}
```

## Available Tokens

The package includes the following token categories:

- **Colors**: Primary, secondary, success, warning, error, and gray scales
- **Typography**: Font families, weights, sizes, line heights, and letter spacing
- **Spacing**: Consistent spacing values
- **Border Radius**: Border radius values
- **Shadows**: Box shadow values

## Development

### Building the tokens

```bash
npm run build
```

### Watching for changes

```bash
npm run dev
```

## Adding or Modifying Tokens

To add or modify tokens, edit the JSON files in the `tokens/` directory:

- `colors.json`: Color tokens
- `typography.json`: Typography tokens
- `spacing.json`: Spacing tokens
- `border-radius.json`: Border radius tokens
- `shadows.json`: Shadow tokens

After making changes, run `npm run build` to regenerate the token files.
