<div align="center">
    <h1 align="center">
        <img width="110" alt="Lesli CSS" src="./docs/css-logo.svg" />
    </h1>
    <h3>Shared Sass utilities and color tokens for Lesli applications.</h3>
</div>

<br />

<div align="center">
    <a target="_blank" href="https://github.com/LesliTech/lesli-css/actions/workflows/lesli-spec.yaml">
        <img alt="Lesli CSS test status" src="https://img.shields.io/github/actions/workflow/status/LesliTech/lesli-css/lesli-spec.yaml?branch=master&style=for-the-badge&logo=github&label=tests">
    </a>
    <a target="_blank" href="https://www.npmjs.com/package/lesli-css">
        <img alt="npm version" src="https://img.shields.io/npm/v/lesli-css?style=for-the-badge&logo=npm">
    </a>
    <a target="_blank" href="https://codecov.io/gh/LesliTech/lesli-css">
        <img alt="Codecov" src="https://img.shields.io/codecov/c/github/LesliTech/lesli-css?style=for-the-badge&logo=codecov">
    </a>
    <a target="_blank" href="https://sonarcloud.io/project/overview?id=LesliTech_lesli-css">
        <img alt="Sonar quality gate" src="https://img.shields.io/sonar/quality_gate/LesliTech_lesli-css?server=https%3A%2F%2Fsonarcloud.io&style=for-the-badge&logo=sonarqubecloud&label=Quality">
    </a>
</div>

<br />

## Introduction

Lesli CSS is the shared styling foundation for Lesli products. It provides reusable Sass functions, mixins, layout helpers, and a centralized color system for applications built with Sass, Bulma, plain CSS, or Tailwind CSS.

The Sass color maps are the source of truth. During the package build they are also exported as CSS custom properties, allowing Sass and CSS-based tools to use exactly the same palette without copying color values between projects.

<br />

## Features

- A shared primary and semantic color system
- Product collection palettes inspired by Guatemala
- Portable CSS custom properties generated from the Sass maps
- Tailwind CSS v4-compatible design tokens
- Bulma-compatible Sass functions
- Responsive breakpoint helpers
- Typography, flexbox, shadow, container, and scrollbar mixins
- Sass modules using the modern `@use` API

<br />

## Installation

### Requirements

- Node.js and npm
- Sass when compiling Sass source; the compatible version is installed with this package

Install the package with npm:

```shell
npm install lesli-css
```

<br />

## Quick Start

Import the library as a Sass module:

```scss
@use "lesli-css" as lesli;

.button {
    background-color: lesli.lesli-color(primary, 500);
    color: lesli.lesli-color(neutral, 50);
}

.notification {
    background-color: lesli.lesli-color(success, 100);
    color: lesli.lesli-color(success, 800);
}
```

The default variant is `500`, so these declarations are equivalent:

```scss
color: lesli.lesli-color(success);
color: lesli.lesli-color(success, 500);
```

<br />

## Color System

### Core palettes

| Palette | Variants | Purpose |
| --- | --- | --- |
| `primary` | 50–900 | Lesli brand and primary actions |
| `neutral` | 50–900 | Text, borders, surfaces, and disabled states |
| `info` | 50–900 | Informational messages and states |
| `success` | 50–900 | Successful actions and positive states |
| `warning` | 50–900 | Warnings and actions that need attention |
| `danger` | 50–900 | Errors and destructive actions |
| `black` | 50–900 | Neutral dark tones |

### Collection palettes

Collection palettes provide variants `100`, `300`, `500`, `700`, and `900`:

- `ruby`
- `ember`
- `maize`
- `agave`
- `jade`
- `cenote`
- `quetzal`
- `bugambilia`
- `cacao`
- `obsidian`

Collection aliases are also available for Lesli products:

```scss
.analytics-module {
    color: lesli.lesli-color(collection, analytics);
}

.finance-module {
    color: lesli.lesli-color(collection, finance);
}
```

The available aliases are `administration`, `intelligence`, `productivity`, `integration`, `analytics`, `security`, `finance`, `sales`, and `it`.

<br />

## CSS Custom Properties

Projects that do not compile Sass can import the generated color tokens:

```css
@import "lesli-css/css/colors.css";

.button {
    background-color: var(--lesli-color-primary-500);
    color: var(--lesli-color-neutral-50);
}

.notification {
    border-color: var(--lesli-color-warning-300);
}
```

The package generates variables for every palette entry, including:

```css
--lesli-color-primary-500: #245F93;
--lesli-color-success-600: #1F694F;
--lesli-color-cenote-300: #8FB8C4;
--lesli-color-collection-finance: #A83E6F;
```

> [!NOTE]
> Package imports in CSS must be processed by a bundler or CSS compiler that resolves dependencies from `node_modules`.

### Generate variables from Sass

The variable generator is also available as a mixin. This is useful when the variables must be emitted inside another selector or use a custom prefix:

```scss
@use "lesli-css" as lesli;

:root {
    @include lesli.lesli-color-variables();
}

.embedded-application {
    @include lesli.lesli-color-variables("--embedded-color");
}
```

<br />

## Tailwind CSS v4

Import the generated variables and map them to Tailwind theme tokens:

```css
@import "tailwindcss";
@import "lesli-css/css/colors.css";

@theme inline {
    --color-primary-50: var(--lesli-color-primary-50);
    --color-primary-500: var(--lesli-color-primary-500);
    --color-primary-600: var(--lesli-color-primary-600);
    --color-primary-900: var(--lesli-color-primary-900);

    --color-success-500: var(--lesli-color-success-500);
    --color-warning-500: var(--lesli-color-warning-500);
    --color-danger-500: var(--lesli-color-danger-500);

    --color-cenote-300: var(--lesli-color-cenote-300);
    --color-collection-finance: var(--lesli-color-collection-finance);
}
```

The mapped colors become standard Tailwind utilities:

```html
<button class="bg-primary-500 hover:bg-primary-600 text-white">
    Save changes
</button>

<p class="text-success-500">Changes saved successfully.</p>

<div class="border border-cenote-300 bg-collection-finance">
    Finance
</div>
```

Use a separate semantic variable when an application's brand color can change at runtime:

```css
:root {
    --application-color-brand: var(--lesli-color-primary-500);
}

@theme inline {
    --color-brand: var(--application-color-brand);
}
```

This keeps the Lesli palette stable while allowing an account or application to override `--application-color-brand`.

<br />

## Bulma

Use the shared colors when configuring Bulma's Sass variables:

```scss
@use "lesli-css" as lesli;

@use "bulma/sass" with (
    $primary: lesli.lesli-color(primary, 500),
    $info: lesli.lesli-color(info, 500),
    $success: lesli.lesli-color(success, 500),
    $warning: lesli.lesli-color(warning, 500),
    $danger: lesli.lesli-color(danger, 500)
);
```

<br />

## Sass Utilities

### Responsive breakpoints

```scss
@use "lesli-css" as lesli;

.navigation {
    display: none;

    @include lesli.lesli-breakpoint(tablet) {
        display: flex;
    }
}

.mobile-only {
    @include lesli.lesli-breakpoint-only-mobile() {
        display: block;
    }
}

.custom-range {
    @include lesli.lesli-breakpoint(600px, 900px) {
        padding: 2rem;
    }
}
```

### Typography and layout

```scss
@use "lesli-css" as lesli;

@include lesli.lesli-fonts-standard("Domine", "OpenSans");

.toolbar {
    @include lesli.lesli-flex(row, center, space-between);
    @include lesli.lesli-shadow();
}

.page-container {
    @include lesli.lesli-container();
}

.scrollable-panel {
    @include lesli.lesli-scrollbar(
        normal,
        lesli.lesli-color(neutral, 400),
        transparent
    );
}
```

<br />

## Package Structure

```text
lesli-css/
├── css/
│   └── colors.css             Generated portable color tokens
├── scss/
│   ├── colors/                Color maps, functions, and generators
│   ├── components/            Reusable components
│   ├── elements/              Element styles
│   ├── helpers/               Breakpoints, fonts, flexbox, and shadows
│   ├── layout/                Containers, normalization, and scrollbars
│   └── vendor/                Bulma and Normalize integrations
├── _index.scss                Package Sass entry point
└── lesli.scss                 Public Sass module
```

<br />

## Development

Clone the repository and install its dependencies:

```shell
git clone https://github.com/LesliTech/lesli-css.git
cd lesli-css
npm install
```

Generate the distributable color tokens:

```shell
npm run build
```

Build the complete development CSS and color-token outputs:

```shell
make build.css
```

Run the Sass test suite:

```shell
npm test
```

The `prepack` script regenerates `css/colors.css` automatically before the package is packed or published.

<br />

## Documentation

- [Breakpoint mixins](./docs/mixin-breakpoint.md)
- [Lesli documentation](https://www.lesli.dev/)
- [Releases](https://github.com/LesliTech/lesli-css/releases)

<br />

## Community

- [X: @LesliTech](https://x.com/LesliTech)
- [hello@lesli.tech](mailto:hello@lesli.tech)
- [https://www.lesli.tech](https://www.lesli.tech)

<br />

## License

Copyright (c) 2026, Lesli Technologies, S. A.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
at your option any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see [https://www.gnu.org/licenses/](https://www.gnu.org/licenses/).

The complete license text is available in the [license file](./license).

---

<br />
<br />

<div align="center">
    <img width="80" alt="Lesli icon" src="https://cdn.lesli.tech/lesli/brand/app-icon.svg" />
    <h3 align="center">Shared styling foundations for the Lesli ecosystem.</h3>
</div>
