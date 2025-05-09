# ShowCase UI

A shared UI component library for the ShowCase application, designed to work seamlessly across web and mobile platforms.

## Features

- Cross-platform components that work on both web and mobile
- Theme-aware styling with support for light and dark modes
- Consistent design language using shared design tokens
- Accessibility-focused components

## Installation

This package is part of the ShowCase monorepo and is not published to npm. It is used internally by the web and mobile applications.

## Usage

```tsx
import { Button, Card, Text } from '@showcase/ui';

function MyComponent() {
  return (
    <Card variant="elevated" className="p-4">
      <Text variant="body" color="primary">
        Hello from ShowCase UI!
      </Text>
      <Button variant="primary" size="md" onPress={() => console.log('Button pressed')}>
        Click Me
      </Button>
    </Card>
  );
}
```

## Component Documentation

### Button

The Button component is a versatile interactive element that supports multiple variants and sizes.

#### Props

| Prop      | Type                                                | Default   | Description                            |
| --------- | --------------------------------------------------- | --------- | -------------------------------------- |
| variant   | 'primary' \| 'secondary' \| 'tertiary' \| 'outline' | 'primary' | The visual style of the button         |
| size      | 'sm' \| 'md' \| 'lg'                                | 'md'      | The size of the button                 |
| disabled  | boolean                                             | false     | Whether the button is disabled         |
| onPress   | () => void                                          | required  | Function called when button is pressed |
| children  | React.ReactNode                                     | required  | Content to display inside the button   |
| className | string                                              | ''        | Additional classes to apply            |

### Card

The Card component is a container that groups related content and actions.

#### Props

| Prop      | Type                                 | Default    | Description                        |
| --------- | ------------------------------------ | ---------- | ---------------------------------- |
| variant   | 'elevated' \| 'outlined' \| 'filled' | 'elevated' | The visual style of the card       |
| children  | React.ReactNode                      | required   | Content to display inside the card |
| className | string                               | ''         | Additional classes to apply        |

### Text

The Text component is used for displaying text with various styles.

#### Props

| Prop      | Type                                   | Default   | Description                 |
| --------- | -------------------------------------- | --------- | --------------------------- |
| variant   | 'body' \| 'label' \| 'caption'         | 'body'    | The text style variant      |
| weight    | 'normal' \| 'medium' \| 'bold'         | 'normal'  | The font weight             |
| color     | 'primary' \| 'secondary' \| 'tertiary' | 'primary' | The text color              |
| children  | React.ReactNode                        | required  | The text content            |
| className | string                                 | ''        | Additional classes to apply |

### Input

The Input component is used for text input fields.

#### Props

| Prop         | Type                   | Default   | Description                       |
| ------------ | ---------------------- | --------- | --------------------------------- |
| label        | string                 | undefined | Label text for the input          |
| placeholder  | string                 | undefined | Placeholder text                  |
| value        | string                 | required  | Current value of the input        |
| onChangeText | (text: string) => void | required  | Function called when text changes |
| error        | string                 | undefined | Error message to display          |
| disabled     | boolean                | false     | Whether the input is disabled     |
| className    | string                 | ''        | Additional classes to apply       |

## Development

### Adding a new component

1. Create a new directory in `src/components` for your component
2. Implement the component with proper theming support
3. Add the component to the exports in `src/index.ts`
4. Document the component in this README

### Testing

```bash
npm test
```

### Building

```bash
npm run build
```
