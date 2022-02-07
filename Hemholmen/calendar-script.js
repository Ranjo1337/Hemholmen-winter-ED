let today = new Date();
let d = new Date();
d.setDate(1);
let year = d.getFullYear();
let month = d.getMonth();
let day = d.getDate();
printDays();

function getTheMonth() {
  return month;
}
function incrementMonth() {
  month += 1;
  if (month > 11) {
    month = 0;
    incrementYear();
  }
  d.setMonth(month);
  printDays();
}
function decrementMonth() {
  month -= 1;
  if (month < 0) {
    month = 11;
    decrementYear();
  }
  d.setMonth(month);
  printDays();
}
function setFooterHeader() {
  document.querySelector(
    ".footer-heading"
  ).innerHTML = `Idag: ${today.getDate()} 
   ${getMonthName(today.getMonth())} ${today.getFullYear()}`;
}
function setCalendarHeader() {
  document.querySelector(".calendar-heading").innerHTML = `${getMonthName(
    month
  )} ${year}`;
}
function printDays() {
  setCalendarHeader();
  setFooterHeader();
  let string = "";
  string += printPrev();
  for (let i = 1; i <= getDaysInMonth(month); i++) {
    if (
      i === today.getDate() &&
      getTheMonth() === today.getMonth() &&
      getYear() === today.getFullYear()
    ) {
      string += `<div class="day today">${i}</div>`;
    } else {
      string += `<div class="day" onClick="reDirect(${i})">${i}</div>`;
    }
  }
  string += printNext();
  document.querySelector(".calendar").innerHTML = string;
}
function reDirect(date) {
  let temp = setTheDate(date);
  document.querySelector(".date").innerHTML = temp;
  const paramsString = `year=${d.getFullYear()}`;
  let searchParams = new URLSearchParams(paramsString);
  searchParams.append("date", date);
  searchParams.append("month", d.getMonth() + 1);
  window.location = `reservationHowMany.html?${searchParams}`;
}
function setTheDate(date) {
  let temp = "";
  if (d.getMonth() + 1 > 9) {
    temp = `${d.getFullYear()}-${d.getMonth() + 1}-${date}`;
  } else {
    temp = `${d.getFullYear()}-0${d.getMonth() + 1}-${date}`;
  }
  return temp;
}
function printPrev() {
  let temp = "";
  for (let i = d.getDay() - 1; i > 0; i--) {
    temp += `<div class="day prev-days">${
      getDaysInMonth(d.getMonth() - 1) - i + 1
    }</div>`;
  }
  return temp;
}
function printNext() {
  let temp = "";
  let dTemp = new Date(d.getFullYear(), d.getMonth() + 1, 1);
  for (let i = 1; i <= 7 - dTemp.getDay() + 1; i++) {
    temp += `<div class="day next-days">${i}</div>`;
  }
  return temp;
}

function decrementYear() {
  year = year - 1;
  d.setYear(year);
}
function incrementYear() {
  year = year + 1;
  d.setYear(year);
}

function getYear() {
  return year;
}
function getDaysInMonth(month) {
  let days = new Date(getYear(), month + 1, 0).getDate();
  return days;
}
function getMonthName(month) {
  switch (month) {
    case 0:
      month = "Januari";
      break;
    case 1:
      month = "Februari";
      break;
    case 2:
      month = "Mars";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "Maj";
      break;
    case 5:
      month = "Juni";
      break;
    case 6:
      month = "Juli";
      break;
    case 7:
      month = "Augusti";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "Oktober";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
      break;
  }
  return month;
}
