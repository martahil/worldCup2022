function createGame(player1, hour, player2) {
  return `
  <li>
              <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
              <strong>${hour}</strong>
              <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
            </li>
  `
}

let delay = -0.4
function createCard(date, day, games) {
  delay = delay + 0.4
  return `
  <div class="card" style="animation-delay: ${delay}s;">
          <h2>${date} <span>${day}</span></h2>
          <ul>
            ${games}           
          </ul>
        </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard("20/11", "domingo", createGame("qatar", "13:00", "ecuator")) +
  createCard(
    "21/11",
    "segunda",
    createGame("senegal", "13:00", "netherlands")
  ) +
  createCard("24/11", "quinta", createGame("brasil", "16:00", "serbia")) +
  createCard(
    "28/11",
    "segunda",
    createGame("switzerland", "13:00", "brasil") +
      createGame("portugal", "16:00", "uruguai")
  ) +
  createCard("2/12", "sexta", createGame("brasil", "16:00", "cameroon"))

/*<li>
  <img src="./assets/icon-brasil.svg" alt="Bandeira do Brasil" />
  <strong>16:00</strong>
  <img src="./assets/icon-serbia.svg" alt="Bandeira da Sérvia" />
</li>*/
