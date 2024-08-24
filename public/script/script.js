
var FormActive = document.getElementById("form-active")
var form = document.querySelector("form")

FormActive.addEventListener("click",FormActive)

function FormActive (){
    form.classList("active")
}