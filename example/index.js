
const keysDown = require('..')

keysDown.start()

document.body.style.fontFamily = 'monospace'
document.body.addEventListener('keydown', onChange)
document.body.addEventListener('keyup', onChange)

function onChange() {
  console.log(keysDown.keysPressed())
  document.body.textContent = 'Keys pressed: ' + keysDown.keysPressed().join(', ')
}
