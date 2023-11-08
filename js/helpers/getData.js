import { useFetch } from "./useFetch.js"

export async function getData(_year, _month, _day) {
    // set url with _year _month _day parameters
    let url = `https://www.elprisenligenu.dk/api/v1/prices/${_year}/${_month}-${_day}_DK1.json`
    // return array from fetch
    return await useFetch(url)
}
