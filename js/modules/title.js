export function createTitle(_title){
    // Create headline
    let headline = document.createElement('h1')
    headline.innerText = _title
    headline.classList.add('title')
    // Append headline to main
    let mainContainer = document.getElementById('mainContainer')
    mainContainer.append(headline)
}