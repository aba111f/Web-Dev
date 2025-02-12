let date = new Date(2012, 0, 3);  // 3 Jan 2012


function getLocalDay(date){
    let day = date.getDay();
    day == 0 ? day = 7 : day = day;
    return day;
}

console.log(getLocalDay(date));