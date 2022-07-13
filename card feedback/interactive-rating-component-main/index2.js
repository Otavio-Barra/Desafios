var button = document.getElementById("btn")

button.addEventListener("click", function () {
    var cont1 = document.getElementById("container1")
    var cont2 = document.getElementById("container2")

    if (cont1.style.zIndex === "1") {
        cont1.style.zIndex = "0"
        cont2.style.zIndex = "1"
    } else {
        cont1.style.zIndex = "1"
        cont2.style.zIndex = "0"
    }
})
