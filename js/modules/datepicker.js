export function createDatePicker(_eventHandler){
    let datepicker = document.createElement('input')
    datepicker.type = "date"
    datepicker.addEventListener('change', (event) => {_eventHandler(event)})
    let main = document.getElementById('mainContainer')
    main.append(datepicker)
}
