(function () {
  const nav = document.querySelector(".nav");
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 500) {
      nav.style.backgroundColor = "#29323f";
    }

    if (currentScrollPos < 500) {
      nav.style.backgroundColor = "rgba(0,0,0,0.4)";
    }
  };
})();
