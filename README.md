# keys-down

Check what keys are down with a simple API

## require('keys-down').start()

Start detecting keyboard activity. Call this method before the others.

It returns a function that ends detecting keyboard activity.

```javascript
const keysDown = require('keys-down')
const end = keysDown.start()

// ... your code

end()
```

## require('keys-down').isPressed(key)

Returns `true` if `key` is pressed. The key code looks like [what you might see in `event.key`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values).

```javascript
const keysDown = require('keys-down')
keysDown.start()

// ...

const playerMovingLeft = keysDown.isPressed('ArrowLeft')
const playerRunning = keysDown.isPressed('Shift')
const playerShooting = keysDown.isPressed(' ')
const playerUsing = keyDown.isPressed('e') || keysDown.isPressed('E')
```

## require('keys-down').keysPressed()

Returns an array with the names of all keys which are currently pressed.


```javascript
const keysDown = require('keys-down')
keysDown.start()

// ...

console.log(keysDown.keysPressed())
```
