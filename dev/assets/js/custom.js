const buildItem = document.querySelectorAll('.build__item')

const cellAddress = document.querySelector('#address')
const cellFlats = document.querySelector('#flats')
const cellFlatsFree = document.querySelector('#flats-free')
const cellFlatsBooking = document.querySelector('#flats-booking')
const cellFlatsSold = document.querySelector('#flats-sold')


const showInformation = (cell, attr) => buildItem.forEach(object => {
    object.addEventListener('mouseover', () => {
        const value = object.getAttribute(attr)
        cell.innerText = value
    })

})

showInformation(cellAddress, 'data-address')
showInformation(cellFlats, 'data-flats')
showInformation(cellFlatsFree, 'data-flats-free')
showInformation(cellFlatsBooking, 'data-flats-booking')
showInformation(cellFlatsSold, 'data-flats-sold')

const calcInformation = () => buildItem.forEach(item => {

    let flats = Number(item.getAttribute('data-flats'));
    let flatsBooking = Number(item.getAttribute('data-flats-booking'))
    let flatsSold = Number(item.getAttribute('data-flats-sold'))

    let flatsFree = flats - (flatsBooking + flatsSold);

    item.setAttribute('data-flats-free', flatsFree)

    const dataFlatsFree = item.getAttribute('data-flats-free')
    if (dataFlatsFree === "0") {
        item.classList.add('sold')
        item.setAttribute('data-modal', 'sold')
        item.addEventListener('click', (event) => {
            event.preventDefault();
        })
    }
})

calcInformation()