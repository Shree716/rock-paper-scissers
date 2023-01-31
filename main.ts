input.onButtonPressed(Button.A, function () {
    player_A += 1
})
function showScoreBoard () {
    OLED.clear()
    OLED.writeStringNewLine("player A'" + player_A)
    OLED.newLine()
    OLED.writeStringNewLine("player B'" + player_B)
    OLED.newLine()
    OLED.writeStringNewLine("rounds'" + rounds)
    OLED.newLine()
    OLED.writeStringNewLine("tie'" + tie)
}
input.onButtonPressed(Button.AB, function () {
    tie += 1
})
input.onButtonPressed(Button.B, function () {
    player_B += 1
})
input.onGesture(Gesture.Shake, function () {
    reset()
})
function reset () {
    OLED.init(128, 64)
    player_A = 0
    player_B = 0
    rounds = 0
    tie = 0
    OLED.writeStringNewLine("Suiiiiiii!")
    basic.pause(5000)
    showScoreBoard()
}
let tie = 0
let rounds = 0
let player_B = 0
let player_A = 0
reset()
