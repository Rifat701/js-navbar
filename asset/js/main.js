const pressIcon = document.querySelector(".icon")
const list = document.querySelector(".itames")

pressIcon.addEventListener("click", function(){
    list.classList.toggle("showData")
})