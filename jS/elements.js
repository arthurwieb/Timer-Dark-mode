const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const addTime = document.querySelector('.addTime')
const removeTime = document.querySelector('.removeTime')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

const buttonForest = document.querySelector('.forest')
const buttonRain = document.querySelector('.rain')
const buttonCoffee = document.querySelector('.coffee')
const buttonFire = document.querySelector('.fire')

const sliderForest = document.getElementById('sliderForest')
const sliderRain = document.getElementById('sliderRain')
const sliderCoffee = document.getElementById('sliderCoffee')
const sliderFire = document.getElementById('sliderFire')



const forestBg = document.querySelector('.forestBg')
const forestFill = document.querySelector('.forestFill')
const rainBg = document.querySelector('.rainBg')
const rainFill = document.querySelector('.rainFill')
const coffeeBg = document.querySelector('.coffeeBg')
const coffeeFill = document.querySelector('.coffeeFill')
const fireBg = document.querySelector('.fireBg')
const fireFill = document.querySelector('.fireFill')
const themeIconSun = document.getElementById('themeIconSun')
const themeIconMoon = document.getElementById('themeIconMoon')


export {
    buttonPlay,
    buttonStop,
    buttonPause,
    addTime,
    removeTime,
    minutesDisplay,
    secondsDisplay,
    buttonForest,
    buttonRain,
    buttonCoffee,
    buttonFire,
    forestBg,
    forestFill,
    rainBg,
    rainFill,
    coffeeBg,
    coffeeFill,
    fireBg,
    fireFill,
    themeIconSun,
    themeIconMoon,
    sliderForest,
    sliderRain,
    sliderCoffee,
    sliderFire
}