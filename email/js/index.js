//VARIABILI
let utente = prompt('Metti la tua email');
let email = ['emanuele.colaci@gmail.com', 'emanuele.salvatore@gmail.com', 'emanuele.io@gmail.com'];
let flag = false;

//CICLO
for(let i=0; i<email.length; i++){
    if(email[i] === utente){
        flag = true;
    }
    
}

//SE E VERO O FALSO
if(flag === true){
   console.log(`L'esito è corretto`);
}else{
    console.log(`L'esito non è corretto`);
}