import { getDate } from "./helpers/getDate.js";
import { createHistoryPage } from "./pages/historyPage.js";

function init(){
    let {day, month, year} = getDate()
    let default_options = {day: day, month: month, year: year}
    createHistoryPage(default_options)
}

init()