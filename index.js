let rpsGameDiv = document.querySelector('#rps-game-div')
let replayBtn = document.querySelector('#replay-btn')


let rock = document.querySelector('#rock')
let paper = document.querySelector('#paper')
let scissors = document.querySelector('#scissors')
 


function rpsGame(choice){
    let computerChoice = computeComputerChoice()
    computeWinner(choice.id, computerChoice)
    removeOldImages()
    showChoicesAsImagesandText(choice.id, computerChoice)
    
    function computeComputerChoice(){
        let randomIndex = Math.floor(Math.random() * 3)
        return ['rock', 'paper', 'scissors'][randomIndex]
    }
    
function computeWinner(humanchoice, computerchoice){
     if(humanchoice === 'rock'){
         if(computerchoice === 'rock'){
             return 0.5
            }
            else if(computerchoice === 'paper'){
                return 0
            }
            else if(computerchoice === 'scissors'){
                return 1
            }
        }
     else if (humanchoice === 'paper'){
        if(computerchoice === 'rock'){
            return 1
        }
        else if(computerchoice === 'paper'){
            return 0.5
        }
        else if(computerchoice === 'scissors'){
            return 0
        }
    }
    else if (humanchoice === 'scissors'){
        if(computerchoice === 'rock'){
            return 0
        }
        else if(computerchoice === 'paper'){
            return 1
        }
        else if(computerchoice === 'scissors'){
            return 0.5
        }
    }
}



function getmessage(result){
    switch(result){
        case 0: return ['red', "You Lost"];
        break;
        case 0.5: return ['yellow', "You Drew"];
        break;
        case 1: return ['green',"You Won"];
        break;
    }
}



function showChoicesAsImagesandText(humanchoice, botChoice){
    showChoicesAsImages('human', humanchoice)
    showMessage()
    showChoicesAsImages('bot', botChoice)
}


function showChoicesAsImages(person, playerchoice){
    if(person === 'human'){
        player = 'Your'
    }
    else if(person = 'bot'){
        player = 'Bot'
    }

    let ImageDiv = document.createElement('div')
    let ImageChoice = document.createElement('img')
    ImageChoice.height = '150'
    ImageChoice.width = '150'
    switch(playerchoice){
        case 'rock': ImageChoice.src = rock.src;
        break;
        case 'paper': ImageChoice.src = paper.src;
        break;
        case 'scissors': ImageChoice.src = scissors.src;
        break;
    }
    let ImageChoiceText = document.createElement('h2')
    ImageChoiceText.textContent = `${player} Choice: ${playerchoice}`
    ImageDiv.appendChild(ImageChoiceText)
    ImageDiv.appendChild(ImageChoice)
    rpsGameDiv.appendChild(ImageDiv)
}

function showMessage(){
        let result = computeWinner(choice.id, computerChoice)
        let message  = getmessage(result)[1]
        color = getmessage(result)[0]
        let messageTextDiv = document.createElement('div')
        messageTextDiv.innerHTML = `<h2 style="color:${color}">${message}<h2/>`
    rpsGameDiv.appendChild(messageTextDiv)
}



function removeOldImages(){
    rock.remove()
    scissors.remove()
    paper.remove()
}
}