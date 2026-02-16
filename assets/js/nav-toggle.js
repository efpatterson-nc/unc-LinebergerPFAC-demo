(function(){
  document.addEventListener("DOMContentLoaded",function(){
    var nav=document.querySelector("nav.nav");
    if(!nav) return;
    var btn=nav.querySelector(".nav__toggle");
    if(!btn) return;

    btn.addEventListener("click",function(){
      var open=nav.classList.toggle("is-open");
      btn.textContent=open?"✕ Close":"☰ Menu";
      btn.setAttribute("aria-expanded",open?"true":"false");
    });
  });
})();