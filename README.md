# Statex

![statex](https://github.com/rrios-dev/statex/blob/main/statex.png?raw=true)

## Description

**Statex** is a minimalist TypeScript library designed for state management, optimized for simplicity and efficiency. It primarily focuses on creating and managing application states based on observables, enabling easy subscription and real-time data updates.

## Features

- **Simplified State Management**: Statex offers an easy-to-use solution for state management without the complexity of other libraries.
- **Observables**: Allows components to subscribe to state changes and automatically receive updates.
- **Strong Typing**: Thanks to TypeScript, it provides compile-time type safety.
- **Flexibility**: Supports updating both entire and partial states.

## Installation

```bash
npm install @rrios-dev/statex

yarn add @rrios-dev/statex

bun add @rrios-dev/statex
```

## Basic Usage

### Creating a State

```ts
import Statex from 'your-statex-package';

// Define your state type
interface AppState {
  counter: number;
}

// Create a new state instance
const appState = new Statex<AppState>({ counter: 0 });
```

### Subscribing to Changes

```ts
appState.subscribe((newState) => {
  console.log('State has changed:', newState);
});
```

### Updating State

```ts
// Complete update
appState.set({ counter: 1 });

// Partial update
appState.setPartial({ counter: appState.get().counter + 1 });
```

### API

- `subscribe(fn: Subscriber<V>): Unsubscriber`
- `get(): V`
- `getProp<K extends keyof V>(key: K): V[K]`
- `set(v: V): void`
- `setPartial(v: Partial<V>): void`

## React

### Introduction

`@rrios-dev/statex-react` is an integration package that bridges @rrios-dev/statex with React, enabling React components to seamlessly subscribe and react to state changes. This package provides a custom React hook, useStatex, to facilitate state management in a React application.

## Installation

```bash
npm install @rrios-dev/statex-react

yarn add @rrios-dev/statex-react

bun add @rrios-dev/statex-react
```

## Using useStatex in a Component

### useStatex allows you to subscribe to a Statex atom within your React components:

```tsx
import React from 'react';
import useStatex from '@rrios-dev/statex-react';

const MyComponent = () => {
  const state = useStatex(myAtom);

  return (
    <div>
      {/* Render your component based on the state */}
      Current value: {state.someProperty}
    </div>
  );
};
```

## Example: Counter Component

Here's an example of a counter component that uses a Statex atom for its state:

```tsx
import React from 'react';
import useStatex from '@rrios-dev/statex-react';

// Assume `counterAtom` is a Statex atom with a `counter` property
const Counter = () => {
  const { counter } = useStatex(counterAtom);

  return <div>Counter value: {counter}</div>;
};
```

### API

- `useStatex<V>(atom: AtomSubscriber<V>): V` A custom hook that subscribes to a Statex atom and returns its current state.

### Contributions

Contributions are welcome. Please send a Pull Request or open an Issue to discuss proposed changes.

### License

This project is licensed under MIT
