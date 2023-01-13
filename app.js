const displayArea = document.querySelector(".display-area")
const apiKey = "b41b154b6d31875c32718b24bf74f703"

const oddsbtn = document.querySelector(".getoddsbtn")
const spreadbtn = document.querySelector(".Spread")
const moneylineBtn = document.querySelector(".money-line")
const overUnderBTN = document.querySelector(".Over-Under")
const searchBox = document.querySelector(".search-box")
const searchBtn = document.querySelector(".search-btn")



let sportsName = searchBox.value




searchBtn.addEventListener('click', function(){
    console.log(sportsName)
})








/*else if(sportsName = 'NBA', 'national basketball association', 'basketball'){
    let sportsName = 'basketball_NFL'
}
else if(sportsName = 'EPL', 'Premier League', 'Prem'){
    let sportsName = 'soccer_epl'
}*/



const url =  `https://api.the-odds-api.com/v4/sports/americanfootball_nfl/odds/?apiKey=${apiKey}&markets&oddsFormat=american&bookmakers=draftkings`

const getBetData = async () => {
    const response = await fetch(url)
    const data = await response.json()
    return data 
}

const displayBetData = async () => {
    const payload = await getBetData()
    let displayBets = payload.map((objects) => {
       let newbetobjects = objects.bookmakers[0].markets[0].outcomes
       console.log(newbetobjects)
        return `
        <div class="display-card">  
            
        <div class="name-odds-container">
                <div class="team-1"> 
                    <h5 class="team-name">${newbetobjects[0].name} </h5>
                     <p class="bet-price">${newbetobjects[0].price} </p>
                </div>
                <div class="team-2">
                    <h5 class="team-name">${newbetobjects[1].name} </h5>
                    <p class="bet-price">${newbetobjects[1].price} </p>
                </div>
            </div>
    

        </div>
        `
   }).join("")


   displayArea.innerHTML = displayBets

}

moneylineBtn.addEventListener('click', function(){
    getBetData()

    displayBetData()

    console.log(sportsName)

  
    
})






const url_spreads =  `https://api.the-odds-api.com/v4/sports/americanfootball_nfl/odds/?apiKey=${apiKey}&markets=spreads&oddsFormat=american&bookmakers=draftkings`



const getSpreadData = async () => {
    const response = await fetch(url_spreads)
    const spreadData = await response.json()
    console.log(spreadData)
    return spreadData
}


const displaySpreadData = async () => {
    const spreadDataforMap = await getSpreadData()
    let displayNewSpreadData = spreadDataforMap.map((spreads) => {
        let newSpreadData = spreads.bookmakers[0].markets[0].outcomes
        console.log(newSpreadData)
        return `
        <div class="display-card">  
        <div class="name-odds-container">
                <div class="team-1"> 
                    <h5 class="team-name">${newSpreadData[0].name} </h5>
                     <p class="bet-price">${newSpreadData[0].price} </p>
                     <p class="bet-price">${newSpreadData[0].point} </p>
                </div>
                <div class="team-2">
                    <h5 class="team-name">${newSpreadData[1].name} </h5>
                    <p class="bet-price">${newSpreadData[1].price} </p>
                    <p class="bet-price">${newSpreadData[1].point} </p>
                </div>
            </div>
    

        </div>
        `
    }).join("")

    displayArea.innerHTML = displayNewSpreadData
}

spreadbtn.addEventListener('click', function (){
    getSpreadData()

    displaySpreadData()
  
})



const url_over_under =  `https://api.the-odds-api.com/v4/sports/americanfootball_nfl/odds/?apiKey=${apiKey}&markets=totals&oddsFormat=american&bookmakers=draftkings`


overUnderBTN.addEventListener('click', function (){
    getOverUnderData()
    displayOverUnderData()
  
})


const getOverUnderData = async () => {
    const response = await fetch(url_over_under)
    const overUnderData = await response.json()
    console.log(overUnderData)
    return overUnderData
}


const displayOverUnderData = async () => {
    const overUnderDataforMap = await getOverUnderData()
    let displayNewOverUnderData = overUnderDataforMap.map((spreads) => {
        let newOverUnderData = spreads.bookmakers[0].markets[0].outcomes
        console.log(newOverUnderData)
        return `
        <div class="display-card">  
        <div class="name-odds-container">
                <div class="team-1"> 
                    <h5 class="team-name">${newOverUnderData[0].name} </h5>
                     <p class="bet-price">${newOverUnderData[0].price} </p>
                     <p class="bet-price">${newOverUnderData[0].point} </p>
                </div>
                <div class="team-2">
                    <h5 class="team-name">${newOverUnderData[1].name} </h5>
                    <p class="bet-price">${newOverUnderData[1].price} </p>
                    <p class="bet-price">${newOverUnderData[1].point} </p>
                </div>
            </div>
    

        </div>
        `
    }).join("")

    displayArea.innerHTML = displayNewOverUnderData
}



