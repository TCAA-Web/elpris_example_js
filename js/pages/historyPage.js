import { getData } from "../helpers/getData.js";
import { getDate } from "../helpers/getDate.js";
import { reset } from "../helpers/reset.js";
import { createDatePicker } from "../modules/datepicker.js";
import { createNavbar } from "../modules/navbar.js";
import { createPricelist } from "../modules/pricelist.js";
import { createSettingsButton } from "../modules/settingsButton.js";
import { createTitle } from "../modules/title.js";

export async function createHistoryPage(_options){
    createNavbar()
    createSettingsButton()
    createTitle('HISTORIK')
    createDatePicker(handleDateChange)
    createPricelist(await getData(_options.year, _options.month, _options.day))
}

function handleDateChange(_event){
    //console.log(_event.target.value)
    let {day, month, year} = getDate(_event.target.value);
    reset();
    let options = {day: day, month: month, year: year}
    createHistoryPage(options)
}