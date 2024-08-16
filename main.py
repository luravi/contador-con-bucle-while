def on_forever():
    contador = 0
    while contador < 5:
        basic.show_number(contador)
        basic.pause(1000)
        contador += 1

basic.forever(on_forever)
