function createGame(player1, hour, player2) {
    return `
        <li>
            <img src="assets/icon-${player1}.svg" alt="Bandeira da ${player1}">
            <strong>${hour}</strong>
            <img src="assets/icon-${player2}.svg" alt="Bandeira do ${player2}">
        </li>
    `
}

function createCard(date, day, games){ 
    return `
        <div class="card">
            <h2>${date}<span>${day}</span></h2>
            <ul>
                ${games}
            </ul>
        </div>
    `
}

document.querySelector("#app").innerHTML = `
    <header>
        <img src="assets/logo.svg" alt="Logo NLW copa">
    </header>
    <main id="cards">
        ${createCard('24/11', 'Quinta', createGame('switzerland', '07:00', 'cameroon') + createGame('uruguay', '10:00', 'south-korea') + createGame('brazil', '16:00', 'serbia'))}

        ${createCard('28/11', 'Segunda', createGame('cameroon', '07:00', 'serbia') + createGame('brazil','13:00','switzerland') + createGame('portugal', '16:00', 'uruguay'))}

        ${createCard('02/12', 'Sexta', createGame('south-korea', '12:00', 'portugal') + createGame('ghana', '12:00', 'uruguay') + createGame('brazil', '16:00', 'cameroon'))}
    </main>
`