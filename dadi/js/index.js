//VARIABILI
let utente = Math.floor(Math.random() *6 + 1) 
let giocatore = utente.toFixed(0)
let computer = Math.floor(Math.random() * 6 + 1) 
let ui = computer.toFixed(0)

//EVENTO
document.addEventListener("click", myFunction);
function myFunction() {
    
        if(giocatore > ui){
            document.getElementById("risulato-utente").innerHTML = (`Hai vinto <br> Giocatore ${giocatore} <br> Computer ${ui}`)
        }else if(giocatore === ui){
            document.getElementById("pareggio").innerHTML = (`Pareggio <br> Giocatore ${giocatore} <br> Computer ${ui}`)
        }else{
            document.getElementById("risulato-computer").innerHTML = (`Hai perso <br> Giocatore ${giocatore} <br> Computer ${ui}`)
        }
    }