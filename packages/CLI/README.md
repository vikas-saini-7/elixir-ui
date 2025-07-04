# Elixir UI CLI

A modern CLI tool for adding beautiful React components to your project with support for Next.js, Vite, Create React App, and TypeScript.

## Installation

```bash
npm install -g @elixir-labs/ui
```

Or use with npx:

```bash
npx @elixir-labs/ui
```

## Quick Start

1. **Initialize Elixir UI in your project:**
   ```bash
   npx @elixir-labs/ui init
   ```

2. **Add a component:**
   ```bash
   npx @elixir-labs/ui add button
   ```

3. **List available components:**
   ```bash
   npx @elixir-labs/ui list
   ```

## Features

- 🎯 **Smart Framework Detection** - Automatically detects Next.js (App/Pages Router), Vite, Create React App
- 🔧 **TypeScript Support** - Automatically generates TypeScript components when detected
- 📁 **Proper Directory Structure** - Creates components in the right location based on your framework
- 🎨 **Tailwind CSS Integration** - Generates proper Tailwind config with CSS variables
- 📦 **Component Management** - Tracks installed components in `components.json`
- 🚀 **Modern Components** - Pre-built components with accessibility and best practices

## Commands

### `init`
Initializes Elixir UI in your project:
- Detects your framework (Next.js, Vite, CRA, etc.)
- Creates components directory structure
- Generates Tailwind config with CSS variables
- Creates `components.json` for component tracking
- Installs necessary dependencies
- Creates global CSS file with design tokens

```bash
npx @elixir-labs/ui init
```

### `add <component>`
Adds a component to your project:
- Creates the component file in the correct directory
- Uses TypeScript template if your project uses TypeScript
- Updates the components index file for easy imports
- Updates `components.json` tracking

```bash
npx @elixir-labs/ui add button
npx @elixir-labs/ui add card
npx @elixir-labs/ui add input
```

### `list` / `ls`
Lists all available components and shows which ones are installed:

```bash
npx @elixir-labs/ui list
```

## Available Components

- **button** - Versatile button component with multiple variants
- **card** - Card component with header, content, and footer
- **input** - Styled input component
- **badge** - Badge/tag component for labels
- **alert** - Alert component for notifications
- **avatar** - Avatar component with image and fallback
- **general** - Generic template for custom components

## Framework Support

### Next.js
- **App Router**: Components created in `app/components/ui/`
- **Pages Router**: Components created in `components/ui/`
- Auto-detects router type and TypeScript usage

### Vite
- Components created in `src/components/ui/` (if src exists) or `components/ui/`

### Create React App
- Components created in `src/components/ui/`

### TypeScript
Automatically detects TypeScript projects and:
- Uses `.tsx` files instead of `.jsx`
- Generates TypeScript-compatible templates
- Includes proper type definitions

## File Structure

After running `init`, your project will have:

```
your-project/
├── components.json          # Component tracking
├── tailwind.config.js       # Tailwind config with CSS variables
├── app/globals.css          # (Next.js App Router) or
├── src/index.css           # (Other frameworks) - Design tokens
└── components/ui/          # Component directory
    ├── index.ts            # Component exports
    └── Button.tsx          # Example component
```

## Usage in Your App

After adding components, import them:

```tsx
// Direct import
import { Button } from './components/ui/Button';

// From index file
import { Button, Card, Input } from './components/ui';

// Usage
function App() {
  return (
    <div>
      <Button variant="primary" size="lg">
        Click me
      </Button>
      <Card>
        <CardHeader>
          <CardTitle>Hello World</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This is a card component.</p>
        </CardContent>
      </Card>
    </div>
  );
}
```

## CSS Variables

The CLI automatically sets up CSS variables for consistent theming:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  --secondary: 210 40% 96%;
  /* ... and more */
}
```

## Contributing

Want to add more components? Create a template file in the `templates/` directory:

1. Create `component-name.jsx` (and optionally `component-name.tsx`)
2. Use `COMPONENT_NAME` as a placeholder for the component name
3. Include proper TypeScript types if creating a `.tsx` template

## License

ISC License - feel free to use in your projects!

## Support

- 🐛 [Report Issues](https://github.com/elixir-labs/ui/issues)
- 📖 [Documentation](https://github.com/elixir-labs/ui)
- 💬 [Discussions](https://github.com/elixir-labs/ui/discussions)
