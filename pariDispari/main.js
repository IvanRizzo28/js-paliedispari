'use strict';

function randomMinMax(min,max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function isPari(num1){  //scelta=true vuol dire che è stato scelto pari
    if (num1%2===0){
        console.log("il risultato è pari");
        return true;
    }
    console.log("il risultato è dispari");
    return false;
}

let num,scelta;

do{
    num=Number(prompt("inserisci un numero da 1 a 5"));
}while((num<1 || num>5))

do{
    scelta=prompt("Digita pari se vuoi scegliere i numeri Pari, digita dispari se vuoi scegliere i numer Dispari");
}while(scelta!='pari' && scelta!='dispari')
let randomNumber=randomMinMax(1,5);
console.log({randomNumber});
console.log(randomNumber+num);

const ris=isPari(num+randomNumber);

if ((ris===true && scelta==='pari') || (ris===false && scelta==='dispari')) console.log("vince l'utente");
else console.log("vince il computer");
