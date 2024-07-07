const modal = document.querySelector('.modal')
const trigerSold = document.querySelectorAll('[data-modal="sold"]')
const trigerClose = document.querySelectorAll('[data-close="modal"]')

function showModal () {
    modal.classList.add('show')
}

function closeModal () {
modal.classList.remove('show')
}

trigerSold.forEach(triger => {
    triger.addEventListener('click', showModal)
})

trigerClose.forEach(close => {
    close.addEventListener('click', closeModal)
})

modal.addEventListener('click', (event) => {
event.target.classList.remove('show')
console.log('event.target click');
})