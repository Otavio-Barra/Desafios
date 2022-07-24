function getAdvice() {
    try {

        var promessa = fetch('https://api.adviceslip.com/advice').then(function (response) {
            return response;
        });

        promessa.then(function (response) {
            response.json().then(function (data) {
                var texto = data.slip.advice;

                var element = document.getElementById('advice-message');

                element.insertAdjacentHTML("afterbegin", `"` + texto + `"`);
            })
        });

    } catch (error) {
        console.error('Erro');
    }
}

getAdvice();