let reset = document.getElementById("reset")
      let resultp = document.getElementById("result")
      let win = document.getElementById("wins")
      let show = document.getElementById("show")
      let autoplay = document.getElementById("autoplay")
      let hand = ["Rock","Paper","Scissor"]
      let comChoice=hand[Math.floor(Math.random()*hand.length)]
      let score =JSON.parse(localStorage.getItem('score'))||  {
    wins:0,
    losses:0,
    ties:0
  }

      function uchoice(userChoice) {
        let comChoice=hand[Math.floor(Math.random()*hand.length)]
        let result;
        reset.classList.remove("hide")
        show.classList.add('hide')
      if(userChoice=="Rock" && comChoice=="Scissor"){
      result = "You Won"
      score.wins++
      }
       else if(userChoice=="Rock" && comChoice=="Rock"){
      result =  "Its A Draw"
      score.ties++
      }
      else if (userChoice=="Rock" && comChoice=="Paper"){
      result = "Computer Won"
      score.losses++
      }

      else if(userChoice=="Paper" && comChoice=="Scissor"){
      result =  "Computer Won"
      score.losses++
      }
      else if(userChoice=="Paper" && comChoice=="Rock"){
      result = "You Won"
      score.wins++
      }
      else if (userChoice=="Paper" && comChoice=="Paper"){
      result =  "Its A Draw"
      score.ties++}

      else if(userChoice=="Scissor" && comChoice=="Scissor"){
      result = "Its A Draw"
      score.ties++
      }
      else if(userChoice=="Scissor" && comChoice=="Rock"){
      result =  "Computer Won"
      score.losses++
      }
      else if(userChoice=="Scissor" && comChoice=="Paper"){
      result = "You Won"
      score.wins++
      }
      localStorage.setItem('score',JSON.stringify(score))
  
      
      resultp.innerText = `Computer Choice: ${comChoice}\n  Your Choice: ${userChoice}\n  Result: ${result}`
      win.innerText = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`
    }

     reset.addEventListener('click',function(){
        score.wins=0
        score.losses=0
        score.ties=0
        localStorage.setItem('score',JSON.stringify(score))
        win.innerText = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`
        resultp.innerText=""

      })
      show.addEventListener('click',function(){
        win.innerText = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`
        show.classList.add('hide')
        reset.classList.remove("hide")
      })
      let isAutoplay=false;
      let intervalId;
      autoplay.addEventListener('click',function(){
        if(!isAutoplay){
        intervalId=setInterval(function(){
          userChoice=hand[Math.floor(Math.random()*hand.length)]
          uchoice(userChoice)
                  autoplay.innerHTML="Stop Auto Play"
        },1000)
        isAutoplay=true

      }


        else{
clearInterval(intervalId)
isAutoplay=false
 autoplay.innerHTML="Auto Play"
        }
      })
   