const apiBtn = document.querySelector('#btn-draw');
const apiOutput = document.querySelector('#api-output');
const urlApi = `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`;

const getDraw = () => {
    fetch(urlApi, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            let card = data.deck_id;
            let cardImgUrl = `https://deckofcardsapi.com/api/deck/${card}/draw/?count=1`;

            fetch(cardImgUrl, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json'
                    }
                })
                .then(res => res.json())
                .then(data => {
                    let cardImg = data.cards[0].image;
                    console.log(data.cards[0].image)

                    apiOutput.innerHTML +=
                        (`<img src="${cardImg}" alt="">`)

                })
                .catch(error => {
                    console.log('fel! ' + error);
                })
        })
        .catch(error => {
            console.log('fel! ' + error);
        })
}

apiBtn.addEventListener('click', getDraw);

getDraw.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.querySelector("#btn-search").click();
    }
});