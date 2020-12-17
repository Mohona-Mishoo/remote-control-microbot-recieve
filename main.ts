radio.onReceivedNumberDeprecated(function (receivedNumber) {
    Recieved = receivedNumber
})
let Recieved = 0
radio.setGroup(0)
Recieved = 0
basic.forever(function () {
    if (Recieved == 0) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        robobit.motor(RBMotor.Both, 0)
        basic.pause(1000)
    } else if (Recieved == 1) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        robobit.motor(RBMotor.Right, 200)
        robobit.motor(RBMotor.Right, 0)
    } else if (Recieved == 2) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        robobit.motor(RBMotor.Left, 200)
        robobit.motor(RBMotor.Left, 0)
    } else if (Recieved == 3) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        robobit.motor(RBMotor.Both, 200)
    } else if (Recieved == 4) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        robobit.go(RBDirection.Reverse, 20)
    }
})
