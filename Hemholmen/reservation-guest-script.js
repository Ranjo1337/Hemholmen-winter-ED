renderDate();
function renderDate() {
  const url = window.location;
  let params = new URLSearchParams(url.search);
  let year = params.get("year");
  let month = params.get("month");
  let date = params.get("date");
  if (month <= 9) {
    month = "0" + month;
  }
  document.querySelector(".date").innerHTML = `${year}-${month}-${date}`;
}
