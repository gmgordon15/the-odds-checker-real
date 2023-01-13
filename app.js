const displayCard = document.querySelector(".display-card")
const apiKey = "b41b154b6d31875c32718b24bf74f703"
const url =  `https://api.the-odds-api.com/v4/sports/americanfootball_nfl/odds/?apiKey=${apiKey}&markets&oddsFormat=american&bookmakers=draftkings`
const oddsbtn = document.querySelector(".getoddsbtn")

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
        return `<h1>${newbetobjects[0].name} <h1/>
        <h1>${newbetobjects[0].price} <h1/>
        <h1>${newbetobjects[1].name} <h1/>
        <h1>${newbetobjects[1].price} <h1/>
        `
   })


   displayCard.innerHTML = displayBets
}

 



   



oddsbtn.addEventListener('click', function(){
    getBetData()

    displayBetData()

    
    
})