
function $(id) {
    return document.getElementById(id);
}



document.addEventListener("DOMContentLoaded", function () {


    var button = document.getElementById("btn")

    button.addEventListener("click", function () {
        var cont = document.getElementById("container1")
        var cont2 = document.getElementById("container2")

        if (cont.style.display === "block") {
            cont.style.display = "none"
            cont2.style.display = "block"
        } else {
            cont.style.display = "block"
            cont2.style.display = "none"
        }
    })

    function formatosClick() {
        for (var i = 0; i < conteudos.length; i++) {

            conteudos[i].style.display = 'none';
        }

        for (var i = 0; i < formatos.length; i++) {

            formatos[i].classList.remove('sel');

        }

        $(this.getAttribute('data-item-id')).style.display = 'block';



        this.classList.add('sel');
    }


    var formatos = document.getElementsByClassName('formato');

    var conteudos = document.getElementsByClassName('conteudo');

    for (var i = 0; i < formatos.length; i++) {
        formatos[i].classList.add('color');
        formatos[i].onclick = formatosClick;
    }



});

function toggle() {
    document.getElementsByClassName("active").classList.toggle('selected')
}

console.log(typeof document)