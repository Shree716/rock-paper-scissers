input.onButtonPressed(Button.A, function () {
    rounds += 1
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
let tie = 0
let rounds = 0
let player_B = 0
let player_A = 0
OLED.init(128, 64)
player_A = 0
player_B = 0
rounds = 0
tie = 0
OLED.writeStringNewLine("Play the game!")
