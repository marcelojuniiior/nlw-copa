function createGame(player1,hour,player2){
    return `
    <li>
        <img src="./assets/icon-${player1}.svg" alt="" />
        <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="" />
      </li>     
    `
}

let delay = -0.4;
function createCard(date,day,games){
  delay = delay + 0.4;
    return `<div class="card" style="animation-delay: ${delay}s">
    <h2>${date}<span>${day}</span></h2>
  
    <ul>
       ${games}
    </ul>
  </div>`
}

document.querySelector("#cards").innerHTML = 
createCard('24/11', 'quinta', createGame('brazil','16:00','serbia') + 
createGame('portugal','16:00','uruguay'))+ 
createCard('20/11', 'terça', createGame('brazil','13:00','switzerland'))+
createCard('20/11', 'terça', createGame('brazil','13:00','switzerland'))
