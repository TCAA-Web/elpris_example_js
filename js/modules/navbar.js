export function createNavbar() {

    // Create navbar HTML
    let nav = document.createElement('nav')
    nav.classList.add('navbar')
    let list = document.createElement('ul')
    let link_overview = document.createElement('a')
    link_overview.innerText = "OVERSIGT"
    let link_now = document.createElement('a')
    link_now.innerText = 'LIGE NU'
    let link_history = document.createElement('a')
    link_history.innerText = 'HISTORIK'
    let logo = document.createElement('img')
    logo.src = '../../assets/mainIcon.svg'
    // append children
    list.append(link_history, link_now, link_overview)
    nav.append(logo, list)

    // append to main
    let main = document.getElementById('mainContainer')
    main.append(nav)
}    