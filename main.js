function init() {
    var menuBtn = document.getElementById("menuBtn")
    var menuList = document.getElementById("navPanel")
    var menuClose = document.getElementById("menuClose")
    menuBtn.onclick = function () {
      menuList.classList.toggle("visible")
    }
    menuClose.onclick = function () {
      menuList.classList.toggle("visible")
    }

  }