basic.forever(function on_forever() {
    let contador = 0
    while (contador < 5) {
        basic.showNumber(contador)
        basic.pause(1000)
        contador += 1
    }
})
