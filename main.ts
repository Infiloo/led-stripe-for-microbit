radio.onReceivedNumber(function (receivedNumber) {
    recv = receivedNumber
})
function flakernonline (recivednumber: number) {
    if (i % 2 == 1) {
        strip.showColor(neopixel.rgb(255, 255, 255))
    } else {
        strip.showColor(neopixel.rgb(0, 0, 0))
    }
    i += 1
    basic.pause(warte)
}
function Regenbogen () {
    strip.showRainbow(i + 1, i + 360)
    i = i + 10
    basic.pause(warte)
}
function Pulse () {
    if (farbe == 0) {
        strip.showColor(neopixel.rgb(i, 0, 0))
    } else if (farbe == 1) {
        strip.showColor(neopixel.rgb(0, i, 0))
    } else if (farbe == 2) {
        strip.showColor(neopixel.rgb(0, 0, i))
    } else if (farbe == 3) {
        strip.showColor(neopixel.rgb(i, i, 0))
    } else if (farbe == 4) {
        strip.showColor(neopixel.rgb(i, 0, i))
    } else if (farbe == 5) {
        strip.showColor(neopixel.rgb(0, i, i))
    }
    strip.show()
    basic.pause(warte)
    if (richtung == 1) {
        i = i + 10
        if (i >= 240) {
            richtung = 0
        }
    } else {
        i = i - 10
        if (i <= 10) {
            richtung = 1
            farbe = randint(0, 5)
        }
    }
}
let LedMode = 0
let farbe = 0
let richtung = 0
let warte = 0
let i = 0
let strip: neopixel.Strip = null
let recv = 0
radio.setGroup(123)
recv = 2
let LEDs = 144
strip = neopixel.create(DigitalPin.P0, LEDs, NeoPixelMode.RGB)
let Mode = 0
i = 0
warte = 15
richtung = 1
farbe = 0
basic.showIcon(IconNames.SmallDiamond)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        // Rainbow Mode
        LedMode = 1
    } else if (input.buttonIsPressed(Button.B)) {
        // Pulse Mode
        LedMode = 2
    }
    if (input.buttonIsPressed(Button.AB)) {
        // Flicker Mode
        LedMode = 3
    }
})
basic.forever(function () {
    if (LedMode == 2) {
        Pulse()
    }
})
basic.forever(function () {
    if (LedMode == 1) {
        Regenbogen()
    }
})
basic.forever(function () {
    if (LedMode == 3) {
        flakernonline(1)
    }
})
