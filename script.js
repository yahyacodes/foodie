const modal = document.querySelector('.modal')
const  talk = document.querySelector('.talk')
const close = document.querySelector('.close')
const send = document.querySelector('.send')
const contact = document.querySelector('#Contact')
const touch = document.querySelector('.touch')
const touch1 = document.querySelector('.touch1')

modal.style.display = 'none'

close.onclick = function() {
    modal.style.display = 'none'
}

send.onclick = function() {
    modal.style.display = 'none'
}

contact.onclick = function() {
    modal.style.display = 'block'
}

touch.onclick = function() {
    modal.style.display = 'block'
}

talk.onclick = function () {
    modal.style.display = 'block'
}

touch1.onclick = function() {
    modal.style.display = 'block'
}