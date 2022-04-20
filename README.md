## Overview

This is a basic React Dropdown component, created to experiment and test stuff.
It's built using [Popper.js](https://popper.js.org/), a positioning engine third-party library. Menu items can be either a Button or a Link and supports both HTML attributes.

You can check out [Storybook Demo](https://google.com) if you don't want to clone the project!

## Accessibility

This dropdown is designed to be completely usable or keyboard and mouse.
## Basic usage
```
  <Dropdown>
    <Dropdown.Button>
      Menu
    </Dropdown.Button>
    <Dropdown.Menu>
      <Dropdown.Item>
        Click me
      </Dropdown.Item>
      <Dropdown.Item as="a" href="https://google.com" target="_blank">
        Access google
      </Dropdown.Item>
      <Dropdown.Item>
        That's the button!
      </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
```
## Getting Started

First, run the storybook server:

```bash
npm run storybook
# or
yarn storybook
```

## Unit tests

You are able to check unit tests by running:

```bash
npm run test
# or
yarn test
```
