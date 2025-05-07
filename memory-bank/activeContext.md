# Active Context

## Current Focus

We're implementing a comprehensive theming system for the ShowCase application, focusing on:

1. Creating a consistent design system across web and mobile platforms
2. Supporting light and dark modes with system preference detection
3. Implementing CSS variables for theme colors
4. Building reusable UI components with proper theming support

## Recent Changes

### Color System Update

- Updated the color system to use a new palette that avoids brand conflicts
- Implemented a new blue and gold color scheme:
  - Blue Base (#1A4D7C): Primary brand color
  - Blue Light (#2D6FAD): For accents and hover states
  - Blue Lighter (#4A8FD1): For subtle highlights
  - Blue Dark (#0F3356): For darker accents
  - Gold Base (#FBBF24): Secondary brand color
  - Gold Dark (#EAB308): For better contrast on dark backgrounds
  - Gold Darker (#D4AC16): For stronger emphasis
  - Gold Light (#FDE68A): For subtle accents
- Improved contrast ratios across all color combinations to meet WCAG AA standards
- Updated all CSS variables in global.css to use the new color values
- Ensured consistent color application across light and dark modes
- Updated color tokens in the design system

### Theme System Implementation

- Created a global CSS file with CSS variables for theme colors
- Implemented a ThemeContext for React to manage theme state
- Added a ThemeToggle component for switching between light, dark, and system themes
- Updated the Layout component to use theme variables and include the theme toggle
- Modified the tailwind.config.js to use our theme CSS variables
- Updated web app pages (Home, Activities, Profile) to use semantic color classes (text-text-primary, text-text-secondary, text-text-tertiary) instead of specific color classes (text-gray-900, text-gray-500, etc.)

### Component Architecture

- Building components with proper theming support using Tailwind CSS
- Using semantic color names (primary, secondary, background, etc.) instead of specific colors
- Ensuring all components respect the current theme

## Next Steps

1. ✅ Test the new color system across all components to ensure proper contrast
2. ✅ Update web pages to use theme-aware classes for proper dark mode support
3. Fix remaining TypeScript errors in the React Router components
4. Update the mobile app to use the same theming system and new color palette
5. Create shared UI components that work across web and mobile
6. Implement theme persistence using localStorage for web and AsyncStorage for mobile
7. Add animations for theme transitions

## Recent Fixes

- Fixed TypeScript errors in the NotFound.tsx file by replacing React Router's Link components with regular anchor tags
- Successfully set up and ran Docker containers for the entire application (web, API, and database)
- Verified the theming system works correctly in both light and dark modes across all pages

## Active Decisions

- Using CSS variables for theming to allow for runtime theme switching
- Implementing a ThemeProvider context to manage theme state
- Using Tailwind CSS for styling with custom theme configuration
- Keeping theme logic separate from UI components for better maintainability
- Using a blue and gold color palette that meets accessibility standards and avoids brand conflicts
- Implementing a semantic color system with primary, secondary, and tertiary text hierarchies

## Important Patterns

- Theme variables follow a consistent naming convention:
  - Base colors: background, foreground, card, etc.
  - Semantic variations: primary, secondary, accent, etc.
  - Foreground colors for contrast: primary-foreground, secondary-foreground, etc.
  - Text hierarchy: text-primary, text-secondary, text-tertiary
- Components should use semantic color names rather than specific colors
- Theme toggle should be accessible and intuitive
- Color contrast ratios should meet WCAG AA standards:
  - Normal text (14px): 4.5:1 minimum contrast ratio
  - Large text (18px+): 3:1 minimum contrast ratio
  - UI components: 3:1 minimum contrast ratio

## Learnings and Insights

- CSS variables provide a powerful way to implement theming with runtime switching
- Using a context provider pattern allows for clean theme management
- Tailwind CSS can be extended to work well with CSS variables for theming
- Semantic color naming improves maintainability and theme consistency
- Ensuring proper color contrast is essential for accessibility and user experience
- Using a consistent color system across platforms creates a cohesive brand experience
- Separating brand colors from semantic UI colors allows for easier theme updates
