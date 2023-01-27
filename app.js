const displayArea = document.querySelector(".display-area")
const apiKey = "e1c3ac6792a90d8eb83df121f0fe3000"
const searchBox = document.querySelector(".search-box")
const searchBtn = document.querySelector(".search-btn")
const searchOddsBtn = document.querySelector(".search-odds-btn")
const searchInput = document.querySelector(".search-input")
const oddsContainer = document.querySelector(".odds-container")

let sportsName = searchInput.value

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
                <h1 class="Sports-Book-Title">${book1title}</h1>
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
                <h1 class="Sports-Book-Title">${book2title}</h1>
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
                
                
                
                
                
                
            }).join("")
    
        
            oddsContainer.innerHTML = displaybets
        }
        
        getBets()
        displayBetData()

       
    }



    searchOddsBtn.addEventListener('click',function(){
        displayBetsNew()
        
    })