'use strict';

function isPalindroma(stringa){
    let tmp='';
    for (let i=stringa.length-1;i>=0;i--) tmp+=stringa[i];
    if (tmp===stringa) return true;
    return false;
}

const parola=prompt("inserisci una parola");
if (isPalindroma(parola)) console.log("è palindroma");
else console.log("non è palindroma");