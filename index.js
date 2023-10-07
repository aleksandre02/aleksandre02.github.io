const jeiraniButtons = document.querySelectorAll('.jeirani-b')
let playerBox=document.getElementById("motamashe")
let choices=["✂️", "📄", "🪨"]
let computerBox=document.getElementById("roboti")
let playerHp=10
let computerHp=10
const enemyHpBar=document.querySelector(".computer-hp-background")
const playerHpBar=document.querySelector(".player-hp-background")

jeiraniButtons.forEach(button => {
    button.addEventListener("click", function(){
        let playerChoice=button.innerHTML
        playerBox.innerHTML=playerChoice
        let computerChoice = choices[Math.floor(Math.random() * choices.length)];
        computerBox.innerHTML=computerChoice
        if((playerChoice==="✂️"&& computerChoice==="📄")||
            (playerChoice==="📄"&& computerChoice==="🪨")||
            (playerChoice==="🪨"&& computerChoice==="✂️")
        ){
          computerHp--
          enemyHpBar.style.width=`${(computerHp / 10) * 100}%`  
        }
        else if((computerChoice==="✂️"&& playerChoice==="📄")||
                (computerChoice==="📄"&& playerChoice==="🪨")||
                (computerChoice==="🪨"&& playerChoice==="✂️")
        ){
          playerHp--
          playerHpBar.style.width=`${(playerHp / 10) * 100}%`   
        }
        console.log("player- ",playerHp ," enemy- ",computerHp)

    })
})
console.log("player- ",playerHp ," enemy- ",computerHp)


