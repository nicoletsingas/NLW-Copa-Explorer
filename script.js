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
        ${createCard('20/11', 'Domingo', createGame('qatar', '13:00', 'ecuador'))}
        
        ${createCard('21/11', 'Segunda', createGame('england', '10:00', 'iran') + createGame('senegal', '13:00', 'netherland') + createGame('united-states', '16:00', 'wales'))}

        ${createCard('22/11', 'Terça', createGame('argentina', '07:00', 'saudi-arabia') + createGame('denmark', '10:00', 'tunisia') + createGame('mexico', '13:00', 'polonia') + createGame('france', '16:00', 'australia'))}

        ${createCard('23/11', 'Quarta', createGame('moroco', '07:00', 'croatia') + createGame('japan', '10:00', 'germany') + createGame('spain', '13:00', 'costa-rica') + createGame('belgium', '16:00', 'canada'))}

        ${createCard('24/11', 'Quinta', createGame('switzerland', '07:00', 'cameroon') + createGame('uruguay', '10:00', 'south-korea') + createGame('portugal', '13:00', 'ghana') + createGame('brazil', '16:00', 'serbia'))}

        ${createCard('25/11', 'Sexta', createGame('wales', '07:00', 'iran') + createGame('qatar', '10:00', 'senegal') + createGame('netherland', '13:00', 'ecuador') + createGame('england', '16:00', 'united-states'))}

        ${createCard('26/11', 'Sabado', createGame('tunisia', '07:00', 'australia') + createGame('polonia', '10:00', 'saudi-arabia') + createGame('france', '13:00', 'denmark') + createGame('argentina', '16:00', 'mexico'))}

        ${createCard('27/11', 'Domingo', createGame('japan', '07:00', 'costa-rica') + createGame('belgium', '10:00', 'moroco') + createGame('croatia', '13:00', 'canada') + createGame('spain', '16:00', 'germany'))}

        ${createCard('28/11', 'Segunda', createGame('cameroon', '07:00', 'serbia') + createGame('south-korea','10:00','ghana') + createGame('brazil','13:00','switzerland') + createGame('portugal', '16:00', 'uruguay'))}

        ${createCard('29/11', 'Terça', createGame('ecuador', '12:00', 'senegal') + createGame('qatar','12:00','netherland') + createGame('united-states','16:00','iran') + createGame('wales', '16:00', 'england'))}

        ${createCard('30/11', 'Quarta', createGame('tunisia', '12:00', 'france') + createGame('australia', '12:00', 'denmark') + createGame('saudi-arabia', '16:00', 'mexico') + createGame('polonia', '16:00', 'argentina'))}

        ${createCard('01/12', 'Quinta', createGame('croatia', '12:00', 'belgium') + createGame('canada', '12:00', 'moroco') + createGame('japan', '16:00', 'spain') + createGame('costa-rica', '16:00', 'germany'))}

        ${createCard('02/12', 'Sexta', createGame('south-korea', '12:00', 'portugal') + createGame('ghana', '12:00', 'uruguay') + createGame('brazil', '16:00', 'cameroon') + createGame('serbia', '16:00', 'switzerland'))}
    </main>
`