function 적정 () {
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.SmallHeart)
    }
    basic.showNumber(input.temperature())
    basic.pause(1000)
    basic.clearScreen()
}
function 온도상태분류 () {
    if (input.temperature() < 29) {
        온도센서 = 1
    } else if (29 <= input.temperature() && input.temperature() <= 30) {
        온도센서 = 2
    } else {
        온도센서 = 3
    }
}
function 고온 () {
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        basic.showNumber(input.temperature())
        basic.pause(1000)
        basic.clearScreen()
    }
}
function 저온 () {
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            `)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
    basic.pause(1000)
    basic.showNumber(input.temperature())
    basic.clearScreen()
}
function LED표시 () {
    if (온도센서 == 1) {
        저온()
    } else if (온도센서 == 2) {
        적정()
    } else {
        고온()
    }
}
function 시작화면 () {
    basic.showString("GO!")
}
let 온도센서 = 0
시작화면()
basic.forever(function () {
    온도상태분류()
    LED표시()
})
