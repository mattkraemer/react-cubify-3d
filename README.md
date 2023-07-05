# react3dcube
A customizable 3D cube component for React.

## Installation
To install my-3d-cube, you can use npm:

```
npm install react3dcube
```

## Usage
Here's a basic example of how to use the Cube component:

```
import React from 'react';
import Cube from 'react3dcube';

function App() {
  return (
    <div>
      <Cube />
    </div>
  );
}

export default App;
```

By default, the cube will have a width, height, and depth of 100. You can customize these dimensions using the width, height, and depth props:

```
<Cube width={150} height={200} depth={100} />
```

## Props
### width
The width of the cube. Defaults to 100.
### height
The height of the cube. Defaults to 100.
### depth
The depth of the cube. Defaults to 100.
