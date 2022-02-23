let numeriCasuali;

let numeriComputer;

/* creo numeri casuali  */

function numeriRandom(min , max){
    return Math.floor(Math.random() * (max - min + 1) + min)
    }



let  numeriGioco = []

    for(let i = 0; i < 5; i++ ){
        let numeri = numeriRandom(1 , 100)
        numeriGioco.push(numeri)
        
    }
    

for(let i = 0; i < numeriGioco.length; i++){

    const visualizzareNumeri = alert(`Ricorda questi numeri    " ${numeriGioco[i]} "`)

    
}


let tempo = 2; 

 let divTempo = document.querySelector('.tempo')

 divTempo.innerHTML = `mancano ${tempo} secondi `

 let numeriScritti = []

 let numeriUtente;

 const cronometro = setInterval( funzioneCronometro , 950 )

 function funzioneCronometro(){
    tempo--
    divTempo.innerHTML = `mancano ${tempo} secondi `

    

    if(tempo === 0){
        clearInterval( cronometro )
        divTempo.innerHTML = 'Tempo terminato!'
    }

    for(let i = 0; i < numeriGioco.length; i++){
        numeriUtente =  prompt('Ora scrvimi i numeri che ti ho fatto vedere prima')

        
    }
    if(numeriGioco.includes(numeriUtente)){
        numeriScritti.push(numeriUtente)
    }
    console.log(numeriGioco ,numeriScritti)
    
    
       
   
 }

    






       
 

  

 
 
     
    

 
    
    

 
    

    
