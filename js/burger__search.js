document.addEventListener("DOMContentLoaded", function(){
  let burger = document.getElementsByClassName("burger")[0].addEventListener("click", function (e){
    document.getElementsByClassName("burger__menu")[0].style.display = "initial"
  })
  document.getElementsByClassName("close")[0].addEventListener("click", function(e){
    document.getElementsByClassName("burger__menu")[0].style.display = "none"
  })
  let search = document.getElementsByClassName("search")[0].addEventListener("click", function (e){
    window.setTimeout(function(){
      document.getElementsByClassName("search__active")[0].style.display = "initial"
      document.getElementsByClassName("search")[0].style.visibility = "hidden"
    }, 200)
  })
  document.getElementsByClassName("close__search")[0].addEventListener("click", function(e){
    document.getElementsByClassName("search__active")[0].style.display = "none"
    document.getElementsByClassName("search")[0].style.visibility = "visible"
  })
  let questions = Array.from(document.getElementsByClassName("question__header")).forEach(element => {
    element.addEventListener("click", function(e){
      document.querySelector(".ui-accordion-header-active svg").style.transform = "rotate(45deg)"
      document.querySelector(".ui-accordion-header-active svg ellipse").style.fill, document.querySelector(".ui-accordion-header-active svg ellipse").style.stroke = "#ECECEC"
      document.querySelector(".ui-accordion-header-active svg path").style.fill, document.querySelector(".ui-accordion-header-active svg path").style.stroke = "#666"
    })
  });
})
