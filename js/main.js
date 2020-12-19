function init() {
  var menuBtn = document.getElementById("menuBtn");
  var menuList = document.getElementById("navPanel");
  var menuClose = document.getElementById("menuClose");
  menuBtn.onclick = function () {
    menuList.classList.toggle("visible");
  };
  menuClose.onclick = function () {
    menuList.classList.toggle("visible");
  };
}
function DayNightBgChange() {
  var today = new Date();
  now = today.getHours();
  var picture = document.getElementById("DayNightChangeImage");
  if ((now >= 18 && now <= 24) || (now >= 0 && now <= 6)) {
  } else {
    // picture.style.backgroundImage = "url('picture/照片/1209 (8).jpg')";
  }
}


