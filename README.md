# @elixir-labs/ui

Modern Components, super fast shipment.

## Description

`@elixir-labs/ui` is a CLI tool for generating reusable UI components with modern styling using Tailwind CSS. It helps you quickly scaffold components for your React projects.

## Installation

To use the CLI without installing it globally, you can use `npx`:

```sh
npx @elixir-labs/ui init
```

For more detailed installation instructions, visit the [Installation Guide](https://elixir-ui.vercel.app/docs/installation).

## Usage

After initializing the project, you can add new components using the `add` command:

```sh
npx @elixir-labs/ui add <component-name>
```

Replace `<component-name>` with the name of the component you want to create. The component will be generated based on the templates provided in the `templates` directory.

For more detailed usage instructions, visit the [Usage Guide](https://elixir-ui.vercel.app/docs/introduction).

## Templates

The CLI uses templates located in the `templates` directory to generate components. You can customize these templates or add new ones to fit your needs. The default templates include:

- `button.jsx`
- `general.jsx`
- `input.jsx`

## Configuration

The CLI creates a `components.json` file to keep track of the generated components. This file is updated automatically whenever a new component is added.

## Dependencies

The CLI installs the following dependencies:

- `clsx`
- `framer-motion`
- `tailwindcss`

These dependencies are required for the generated components to work correctly.

## Components

For a list of available components and their usage, visit the [Components Guide](https://elixir-ui.vercel.app/docs/components).

## License

This project is licensed under the ISC License.
