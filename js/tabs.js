document.addEventListener("DOMContentLoaded", function(){
  let steps = Array.from(document.getElementsByClassName("steps__item"))
  steps.forEach(step => {
    step.addEventListener("click", function(e){
      steps.forEach(step => {
        if (step.classList.contains("active")) {
          step.classList.toggle("active")
        }
      })
      e.target.classList.add("active")
      let step__text = document.getElementById(`step${e.target.textContent[0]}`)
      let active = document.getElementsByClassName("active__step")[0].classList.remove("active__step")
      step__text.classList.add("active__step")
    })
  });
})
