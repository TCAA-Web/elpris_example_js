export function getTime(_date){
    let date = new Date(_date)
    let hours = date.getHours()
    if (hours <= 9){
        hours = "0"+hours
    }
    return `Kl. ${hours}.00`
}