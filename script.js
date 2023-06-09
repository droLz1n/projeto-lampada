const turnOn = document.getElementById('turnOn')
const turnOff = document.getElementById('turnOff')
const lamp = document.getElementById('lamp')

function isLampBroken() {
    return lamp.src.indexOf('lampada-quebrada') > -1
}

function lampOn() {
    if (!isLampBroken()){
    lamp.src = './images/lampada-acesa.jpg'
    }
}

function lampOff() {
    if (!isLampBroken()){
    lamp.src = './images/lampada-apagada.jpg'
    }
}

function brokenLamp() {
    lamp.src ='./images/lampada-quebrada.jpg'
}

turnOn.addEventListener('click', lampOn)
turnOff.addEventListener('click', lampOff)
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)
lamp.addEventListener('dblclick', brokenLamp)