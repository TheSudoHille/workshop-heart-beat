input.onButtonPressed(Button.A, function () {
    pause2 += -500
})
input.onButtonPressed(Button.B, function () {
    pause2 += 100
})
let pause2 = 1000
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(pause2)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(pause2)
})
