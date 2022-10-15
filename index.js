const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generateButton = document.getElementById('generateButton')
let passwordElOne = document.getElementById('passwordOne')
let passwordElTwo = document.getElementById('passwordTwo')

generateButton.addEventListener('click', generatePasswords)

function generatePasswords(){
    passwordElOne.textContent = ''
    passwordElTwo.textContent = ''
    for(let i = 0; i < 10; i++){
        let character = pickRandomChar()
        passwordElOne.textContent += character
    }

    for(let i = 0; i < 10; i++){
        let character = pickRandomChar()
        passwordElTwo.textContent += character
    }
}

function pickRandomChar(){
    let randomIndex = Math.floor(Math.random() * characters.length + 1)
    for(let i = 0; i < characters.length; i++){
        return characters[randomIndex]
    }
}