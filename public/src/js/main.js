$(function () {
  $("#header").load("/src/components/header/header.html");
  $("#footer").load("/src/components/footer/footer.html");
  $("#outlet").load("/src/pages/home/home.html");
});

$("#slider").load("/src/components/slider/slider.html");
$(document).ready(function () {
  $(".chip").click(function () {
    $(".chip").removeClass("active-chip");
    $(this).addClass("active-chip");
  });
});

function getCurrentDate() {
  const daysOfWeek = [
    "Chủ Nhật",
    "Thứ Hai",
    "Thứ Ba",
    "Thứ Tư",
    "Thứ Năm",
    "Thứ Sáu",
    "Thứ Bảy",
  ];
  const monthsOfYear = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ];

  let today = new Date();
  let dayOfWeek = daysOfWeek[today.getDay()];
  let dayOfMonth = today.getDate();
  let month = monthsOfYear[today.getMonth()];
  let year = today.getFullYear();

  return `${dayOfWeek}, ${dayOfMonth}/${month}/${year}`;
}
