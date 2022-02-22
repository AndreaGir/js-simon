const numeriGioco = ['10','22','74','3','56']

for(let i = 0; i < numeriGioco.length; i++){

    const visualizzareNumeri = alert(`Ricorda questi numeri    " ${numeriGioco[i]} "`)


}


let tempo = 5; 

 let divTempo = document.querySelector('.tempo')

 divTempo.innerHTML = `mancano ${tempo} secondi `

 

 const cronometro = setInterval( funzioneCronometro , 1000 )

 function funzioneCronometro(){
    tempo--
    divTempo.innerHTML = `mancano ${tempo} secondi `

    if(tempo === 0){
        clearInterval( cronometro )
        divTempo.innerHTML = 'Tempo terminato!'

    }
 }

 for(let i = 0; i > 5; i++){
     
 }

 
     
    

 
    
    

 
    

    
