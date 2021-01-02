export function animate() {
  const div = document.getElementById('square')
  const w = 100
  let i = 0
  let direction = 'right'
  function loop() {
    if (direction === 'right') {
      if (i >= w) direction = 'left'
      i++
    } else {
      if (i === 0) direction = 'right'
      i--
    }

    div.style.marginLeft = `${i}px`
    requestAnimationFrame(loop)
  }
  loop()
}
