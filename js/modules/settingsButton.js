export function createSettingsButton(){
  
    let img = document.createElement('img')
    img.src = '../../assets/gear-solid.svg'
    img.classList.add('settingsButton')
    let main = document.getElementById('mainContainer')
    main.append(img)
}