import { getTime } from "../helpers/getTime.js"

export function createPricelist(_arr){
    let container = document.createElement('ul')
    container.classList.add('priceList')
    _arr.forEach((item) => {
        let listItem = document.createElement('li')
        listItem.classList.add('priceListItem')
        listItem.innerHTML = `<p>${item.DKK_per_kWh.toFixed(2)} Kr</p> <p>${getTime(item.time_start)}</p>`
        container.append(listItem)
    })
    let main = document.getElementById('mainContainer')
    main.append(container)
}