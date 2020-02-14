'use strict'

function start() {
  if (typeof document === 'undefined') return

  document.body.addEventListener('keydown', onKeyDown)
  document.body.addEventListener('keyup', onKeyUp)

  return function end() {
    document.body.removeEventListener('keydown', onKeyDown)
    document.body.removeEventListener('keyup', onKeyUp)
  }
}

var keys = {}

function onKeyDown(e) {
  keys[e.key] = true
}

function onKeyUp(e) {
  delete keys[e.key]
}

function isPressed(key) {
  return keys[key] || false
}

function keysPressed() {
  return Object.keys(keys)
}

module.exports = {
  start: start,
  isPressed: isPressed,
  keysPressed: keysPressed
}
