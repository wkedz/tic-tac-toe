# Tic Tac Toe

A Tic Tac Toe implementation in React. 

This is a follow up repository based on https://react.dev/learn/tutorial-tic-tac-toe

## Inspecting the code

The file `App.js` is the main file of React app, where will be most of the code. 

The file `index.js` is the bridge between index.html file and App.js loginc. 

The file `styles.css` is there are styles hold.

## Making the interactive component 

React provides a special function called `useState`. It allows to call from you component to let it remember things.

```js
import { useState } from 'react';

function Square() {
  const [value, setValue] = useState(null);
  ...
```

By convention, it is name, and setName. Variable `value` stores the value, and function `setValue` set the value. 

## React Developer Tools 

Extenstion to browser allowing to inspect React components.

https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en

## useState

Calling setState will re-render each componen that is storing variable assigned to setValue

## Key in list

React check the components, and only create those that need to be re-rendered. So in order to avoid creating whole list, we need to pass a key, so that it will know, that some keys do noot need to be recreated. 

It’s strongly recommended that you assign proper keys whenever you build dynamic lists. 