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