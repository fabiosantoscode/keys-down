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

## require('keys-down').keysPressed()
Returns an array with the names of all keys which are currently pressed.

