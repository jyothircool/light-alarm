input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.lightLevel())
})
radio.setGroup(1)
basic.forever(function () {
    if (input.lightLevel() > 50) {
        radio.sendString("lights on")
    } else {
        radio.sendString("lights off")
        basic.pause(1000)
    }
})
