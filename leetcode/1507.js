/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function (date) {
  let dates = date.split(" ");
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months.indexOf(dates[1]) + 1;
  month = month < 10 ? "0" + month : month;
  let day = "";
  for (let i = 0; i < dates[0].length; i++) {
    if (dates[0][i] < "0" || dates[0][i] > "9") {
      day = dates[0].substring(0, i);
      day = day < 10 ? "0" + day : day;
      break;
    }
  }
  return `${dates[2]}-${month}-${day}`;
};
