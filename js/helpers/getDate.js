export function getDate(_dateString) {
    let date = _dateString ? new Date(_dateString) : new Date()
    let day = date.getDate()
    let month = date.getMonth()+1
    let year = date.getFullYear()

    // if day is less then or equal to 9 add a 0 before it
    if (day <= 9){
        day = "0"+day
    }
    // if month is less or equal to 9 add a 0 before it
    if (month <= 9){
        month = "0"+month
    }
    return {day, month, year}
}