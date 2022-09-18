basic.showIcon(IconNames.Heart)
basic.forever(function () {
    pins.servoWritePin(AnalogPin.P0, 180)
    basic.pause(500)
    pins.servoWritePin(AnalogPin.P0, 0)
})
