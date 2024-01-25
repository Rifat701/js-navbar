const pressIcon = document.querySelector(".icon")
const list = document.querySelector(".itames")

pressIcon.addEventListener("click", function(){
    list.classList.toggle("showData")

    if (list.classList.contains("showData")){
        document.getElementById("bar").className = "bi bi-x-lg"
    }else{
        document.getElementById("bar").className = "bi bi-list"
    }
})