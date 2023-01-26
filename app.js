const displayArea = document.querySelector(".display-area")
const apiKey = "e1c3ac6792a90d8eb83df121f0fe3000"

const oddsbtn = document.querySelector(".getoddsbtn")
const spreadbtn = document.querySelector(".Spread")
const moneylineBtn = document.querySelector(".money-line")
const overUnderBTN = document.querySelector(".Over-Under")
const searchBox = document.querySelector(".search-box")
const searchBtn = document.querySelector(".search-btn")
const searchOddsBtn = document.querySelector(".search-odds-btn")
const searchInput = document.querySelector(".search-input")
const oddsContainer = document.querySelector(".odds-container")

let sportsName = searchInput.value

//const text = selectMenu.options[selectMenu.selectedIndex].text;


/*function getInputValue(){
    const searchInput = document.querySelector(".search-input")
    let sportsName = searchInput.value
    let selectValue = selectMenu.value;
    if(["NFL", "National Football League", 'Football'].includes(sportsName) && selectValue === 'Moneyline'){
       getNFLOddsMoneyLine()
    }else if(["NFL", "National Football League", 'Football'].includes(sportsName) && selectValue === 'Spread'){
        getNFLSpreads()
    }else if(["NFL", "National Football League", 'Football'].includes(sportsName) && selectValue === 'Over-Under'){
        getNFLOverUnder()
    }else if(["NBA", "National BasketBall Association", 'Basketball'].includes(sportsName) && selectValue === 'Moneyline'){
        getNBAOddsMoneyLine()
    }
}


searchOddsBtn.addEventListener('click', function(){
    getInputValue()


})


function getNFLOddsMoneyLine(){

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
       console.log(objects)
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
getBetData()
displayBetData()

}





function getNFLSpreads(){




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

getSpreadData()
displaySpreadData()

}






function getNFLOverUnder(){


const url_over_under =  `https://api.the-odds-api.com/v4/sports/americanfootball_nfl/odds/?apiKey=${apiKey}&markets=totals&oddsFormat=american&bookmakers=draftkings`





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
        console.log(spreads)
        console.log(newOverUnderData)
        return `

        <div class="display-card"> 
        <div class="name-odds-container">
                <div class="team-1"> 
                    <h5 class="team-name">${spreads.away_team} </h5>
                     <p class="bet-price">${newOverUnderData[0].price} </p>
                     <p class="bet-price">${newOverUnderData[0].point} </p>
                </div>
                <div class="team-2">
                    <h5 class="team-name">${spreads.home_team} </h5>
                    <p class="bet-price">${newOverUnderData[1].price} </p>
                    <p class="bet-price">${newOverUnderData[1].point} </p>
                </div>
            </div>
    

        </div>
        `
    }).join("")

    displayArea.innerHTML = displayNewOverUnderData
}

getOverUnderData()
displayOverUnderData()


}



function getNBAOddsMoneyLine(){

    const url =  `https://api.the-odds-api.com/v4/sports/basketball_nba/odds/?apiKey=${apiKey}&markets&oddsFormat=american&bookmakers=draftkings`
    
    const getBetData = async () => {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        return data 
    }
    
    const displayBetData = async () => {
        const payload = await getBetData()
        let displayBets = payload.map((objects) => {
           //let newbetobjects = objects.bookmakers[0].markets[0].outcomes
           //console.log(newbetobjects)
           console.log(objects)
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
    getBetData()
    displayBetData()
    
    }*/


    function displayBetsNew(){
        let sportsValue = searchInput.value
        
        if(["NFL", "National Football League", 'Football'].includes(sportsValue)){
            sportsValue = 'americanfootball_nfl'
            console.log('this is the new sports value: ' + sportsValue)
           
        }else if(["NBA", "National Basketball Association", 'Basketball'].includes(sportsValue)){
            sportsValue = "basketball_nba"
            console.log('this is the new sports value: '+ sportsValue)
            
        }else if(["Soccer", "EPL", 'Premier League', 'English Premier Leage', 'Barclays', 'Barclays Premier League'].includes(sportsValue)){
            console.log("soccer_epl")
            sportsValue = "soccer_epl"
            console.log('this is the new sports value: '+ sportsValue)

        }else if(["College Basketball", "CBB"].includes(sportsValue) ){
            console.log("basketball_ncaab")
            sportsValue = "basketball_ncaab"
            console.log('this is the new sports value: '+ sportsValue)
        }else if(["Hockey", "NHL"].includes(sportsValue) && selectValue){
            console.log("icehockey_nhl")
            sportsValue = "icehockey_nhl"
            console.log('this is the new sports value: '+ sportsValue)
        }



     
        const url =  `https://api.the-odds-api.com/v4/sports/${sportsValue}/odds/?apiKey=${apiKey}&markets=h2h,spreads,totals&oddsFormat=american&bookmakers=draftkings,fanduel`
       
        const getBets = async () => {
            const response = await fetch(url)
            const data = await response.json() 
            console.log(data)
            return data
        }



        const displayBetData = async () => {
           
           
            const payload = await getBets()
          
            let displaybets = payload.map((bets)=>{
              
                console.log(bets)
                

                try{


                    let book1title = bets.bookmakers[0].title
                
                //Book 1 Money Line Info
                let name1 = bets.bookmakers[0].markets[0].outcomes
                let nameaway2 = bets.bookmakers[0].markets[0].outcomes[1]

                let pricemoneyline1 = bets.bookmakers[0].markets[0].outcomes
                let pricemoneylineteam2 = bets.bookmakers[0].markets[0].outcomes[1]
                
                //Book1 Spread Info
                let priceSpread1 = bets.bookmakers[0].markets[1].outcomes
                let priceSpreadteam2 = bets.bookmakers[0].markets[1].outcomes[1]
                //Book1 OverUnder
                let priceOverUnder1 = bets.bookmakers[0].markets[2].outcomes
                let priceOverUnderTeam2 = bets.bookmakers[0].markets[2].outcomes[1]





                //Book 2 Team Names
                let namehome2 = bets.bookmakers[1].markets[0].outcomes[0]
                let book2nameaway2 = bets.bookmakers[1].markets[0].outcomes[1]




                //Book 2 Namee
                let book2title = bets.bookmakers[1].title

                //Book2 MoneyLine Info
        
                let pricemoneylinehome2 = bets.bookmakers[1].markets[0].outcomes[0]
                let pricemoneylineaway2 = bets.bookmakers[1].markets[0].outcomes[1]
 

                //Book2 Spread Info
                let priceSpreadhome2 = bets.bookmakers[1].markets[1].outcomes[0]
                let priceSpreadaway2 = bets.bookmakers[1].markets[1].outcomes[1]

                //Book2 OverUnder
                let priceOverUnderhome2 = bets.bookmakers[1].markets[2].outcomes[0]
                let priceOverUnderaway2 = bets.bookmakers[1].markets[2].outcomes[1]


                return `
                <div class="draft-kings-container">
                <h1>${book1title}</h1>
               <div class="new-display-card">
                   <div class="big-info-container">
                     <div class="home-team-container">
                            <div class="team-name-div">
                                <h4>${name1[0].name}</h4>
                            </div>
            
                            <div class="spread-container">
                                <div class="spread-title"><p>Spread</p></div>
                                <div class="spread-odds-container">
                                    <p class="spread-amount">${priceSpread1[0].point}</p>
                                    <p class="odds-amountt">${priceSpread1[0].price}</p>
                                </div>
                            </div>
            
                            <div class="spread-container">
                                <div class="spread-title"><p>Over/Under</p></div>
                                <div class="spread-odds-container">
                                    <p class="spread-amount">${priceOverUnder1[0].point}</p>
                                    <p class="odds-amountt">${priceOverUnder1[0].price}</p>
                                </div>
                            </div>
            
                            <div class="spread-container">
                                <div class="spread-title"><p>MoneyLine</p></div>
                                <div class="spread-odds-container-moneyline">
                                    <p class="odds-amount">${pricemoneyline1[0].price}</p>
                                </div>
                            </div>
                        </div>
                
            
                    <div class="home-team-container">
                        <div class="team-name-div">
                            <h4>${nameaway2.name}</h4>
                        </div>
             
                        <div class="spread-container">
                            <div class="spread-title"><p>Spread</p></div>
                            <div class="spread-odds-container">
                                 <p class="spread-amount">${priceSpreadteam2.point}</p>
                                 <p class="odds-amountt">${priceSpreadteam2.price}</p>
                            </div>
                        </div>
             
                        <div class="spread-container">
                             <div class="spread-title"><p>Over/Under</p></div>
                             <div class="spread-odds-container">
                                 <p class="spread-amount">${priceOverUnderTeam2.point}</p>
                                 <p class="odds-amount">${priceOverUnderTeam2.price}</p>
                             </div>
                         </div>
             
                         <div class="spread-container">
                             <div class="moneyline-title"><p>MoneyLine</p></div>
                             <div class="spread-odds-container-moneyline">
                                 <p class="odds-amountt">${pricemoneylineteam2.price}</p>
                            </div>
                        </div>
            
                    </div>
                    </div>
                
                </div>
                </div>
            
                <div class="fanduel-container">
                <h1>${book2title}</h1>
                    <div class="new-display-card">
                        <div class="big-info-container">
                          <div class="home-team-container">
                                 <div class="team-name-div">
                                     <h4>${namehome2.name}</h4>
                                 </div>
                 
                                 <div class="spread-container">
                                     <div class="spread-title"><p>Spread</p></div>
                                     <div class="spread-odds-container">
                                         <p class="spread-amount">${priceSpreadhome2.point}</p>
                                         <p class="odds-amountt">${priceSpreadhome2.price}</p>
                                     </div>
                                 </div>
                 
                                 <div class="spread-container">
                                     <div class="spread-title"><p>Over</p></div>
                                     <div class="spread-odds-container">
                                         <p class="spread-amount">${priceOverUnderhome2.point}</p>
                                         <p class="odds-amountt">${priceOverUnderhome2.price}</p>
                                     </div>
                                 </div>
                 
                                 <div class="spread-container">
                                     <div class="spread-title"><p>MoneyLine</p></div>
                                     <div class="spread-odds-container-moneyline">
                                         <p class="odds-amount">${pricemoneylinehome2.price}</p>
                                     </div>
                                 </div>
                             </div>
                     
                 
                         <div class="home-team-container">
                             <div class="team-name-div">
                                 <h4>${book2nameaway2.name}</h4>
                             </div>
                  
                             <div class="spread-container">
                                 <div class="spread-title"><p>Spread</p></div>
                                 <div class="spread-odds-container">
                                      <p class="spread-amount">${priceSpreadaway2.point}</p>
                                      <p class="odds-amountt">${priceSpreadaway2.price}</p>
                                 </div>
                             </div>
                  
                             <div class="spread-container">
                                  <div class="spread-title"><p>Under</p></div>
                                  <div class="spread-odds-container">
                                      <p class="spread-amount">${priceOverUnderaway2.point}</p>
                                      <p class="odds-amount">${priceOverUnderaway2.price}</p>
                                  </div>
                              </div>
                  
                              <div class="spread-container">
                                  <div class="moneyline-title"><p>MoneyLine</p></div>
                                  <div class="spread-odds-container-moneyline">
                                      <p class="odds-amountt">${pricemoneylineaway2.price}</p>
                                 </div>
                             </div>
                 
                         </div>
                         </div>
                     
                     </div>`
                     
                     
                     
                     
                
                
                

                }catch{
                    if(bets === undefined ){
                        console.log("Not Working")
                    }
                }
                
                
                
                

                /*return `
                <div class="draft-kings-container">
                <h1>${book1title}</h1>
               <div class="new-display-card">
                   <div class="big-info-container">
                     <div class="home-team-container">
                            <div class="team-name-div">
                                <h4>${name1[0].name}</h4>
                            </div>
            
                            <div class="spread-container">
                                <div class="spread-title"><p>Spread</p></div>
                                <div class="spread-odds-container">
                                    <p class="spread-amount">${priceSpread1[0].point}</p>
                                    <p class="odds-amountt">${priceSpread1[0].price}</p>
                                </div>
                            </div>
            
                            <div class="spread-container">
                                <div class="spread-title"><p>Over/Under</p></div>
                                <div class="spread-odds-container">
                                    <p class="spread-amount">${priceOverUnder1[0].point}</p>
                                    <p class="odds-amountt">${priceOverUnder1[0].price}</p>
                                </div>
                            </div>
            
                            <div class="spread-container">
                                <div class="spread-title"><p>MoneyLine</p></div>
                                <div class="spread-odds-container-moneyline">
                                    <p class="odds-amount">${pricemoneyline1[0].price}</p>
                                </div>
                            </div>
                        </div>
                
            
                    <div class="home-team-container">
                        <div class="team-name-div">
                            <h4>${nameaway2.name}</h4>
                        </div>
             
                        <div class="spread-container">
                            <div class="spread-title"><p>Spread</p></div>
                            <div class="spread-odds-container">
                                 <p class="spread-amount">${priceSpreadteam2.point}</p>
                                 <p class="odds-amountt">${priceSpreadteam2.price}</p>
                            </div>
                        </div>
             
                        <div class="spread-container">
                             <div class="spread-title"><p>Over/Under</p></div>
                             <div class="spread-odds-container">
                                 <p class="spread-amount">${priceOverUnderTeam2.point}</p>
                                 <p class="odds-amount">${priceOverUnderTeam2.price}</p>
                             </div>
                         </div>
             
                         <div class="spread-container">
                             <div class="moneyline-title"><p>MoneyLine</p></div>
                             <div class="spread-odds-container-moneyline">
                                 <p class="odds-amountt">${pricemoneylineteam2.price}</p>
                            </div>
                        </div>
            
                    </div>
                    </div>
                
                </div>
                </div>
            
                <div class="fanduel-container">
                <h1>${book2title}</h1>
                    <div class="new-display-card">
                        <div class="big-info-container">
                          <div class="home-team-container">
                                 <div class="team-name-div">
                                     <h4>${namehome2.name}</h4>
                                 </div>
                 
                                 <div class="spread-container">
                                     <div class="spread-title"><p>Spread</p></div>
                                     <div class="spread-odds-container">
                                         <p class="spread-amount">${priceSpreadhome2.point}</p>
                                         <p class="odds-amountt">${priceSpreadhome2.price}</p>
                                     </div>
                                 </div>
                 
                                 <div class="spread-container">
                                     <div class="spread-title"><p>Over</p></div>
                                     <div class="spread-odds-container">
                                         <p class="spread-amount">${priceOverUnderhome2.point}</p>
                                         <p class="odds-amountt">${priceOverUnderhome2.price}</p>
                                     </div>
                                 </div>
                 
                                 <div class="spread-container">
                                     <div class="spread-title"><p>MoneyLine</p></div>
                                     <div class="spread-odds-container-moneyline">
                                         <p class="odds-amount">${pricemoneylinehome2.price}</p>
                                     </div>
                                 </div>
                             </div>
                     
                 
                         <div class="home-team-container">
                             <div class="team-name-div">
                                 <h4>${book2nameaway2.name}</h4>
                             </div>
                  
                             <div class="spread-container">
                                 <div class="spread-title"><p>Spread</p></div>
                                 <div class="spread-odds-container">
                                      <p class="spread-amount">${priceSpreadaway2.point}</p>
                                      <p class="odds-amountt">${priceSpreadaway2.price}</p>
                                 </div>
                             </div>
                  
                             <div class="spread-container">
                                  <div class="spread-title"><p>Under</p></div>
                                  <div class="spread-odds-container">
                                      <p class="spread-amount">${priceOverUnderaway2.point}</p>
                                      <p class="odds-amount">${priceOverUnderaway2.price}</p>
                                  </div>
                              </div>
                  
                              <div class="spread-container">
                                  <div class="moneyline-title"><p>MoneyLine</p></div>
                                  <div class="spread-odds-container-moneyline">
                                      <p class="odds-amountt">${pricemoneylineaway2.price}</p>
                                 </div>
                             </div>
                 
                         </div>
                         </div>
                     
                     </div> `*/
                     
                     
                     
                     
                
                
                
                
                
                
                
                
            }).join("")
    
        
            oddsContainer.innerHTML = displaybets
        }
        
        getBets()
        displayBetData()

       
    }





    

    















    searchOddsBtn.addEventListener('click',function(){
        displayBetsNew()
        
    })