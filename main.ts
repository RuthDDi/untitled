let humidity = 0
basic.showIcon(IconNames.Heart)

basic.forever(function () {
    humedad= pins.analogReadPin(AnalogPin.P0)
    if(humedad < 500) {
        basic.showString('dry')
        pins.digitalWritePin(DigitalPin-P1, 1)
    } else {
        basic.ShoString('humidity')
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
    basic.pause(1000)
}