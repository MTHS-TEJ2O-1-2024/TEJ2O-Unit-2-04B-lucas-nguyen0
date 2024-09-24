/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Lucas Nguyen
 * Created on: Sep 2024
 * This program displays the temperature.
*/

let currentTemperature: number
let inputTemperature: number

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
currentTemperature = input.temperature()
inputTemperature = currentTemperature
basic.clearScreen()
basic.showString('The temperature is: '+ currentTemperature.toString() + 'C.')
})
