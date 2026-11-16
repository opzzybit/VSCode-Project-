function sum(numberOne,numberTwo){
   if(typeof numberOne != 'number' || typeof numberTwo != 'number') 
       throw new Error('Both argument must be numbers or else');
    return  numberOne + numberTwo;   
}

function subtract(numberOne,numberTwo){
    return numberOne - numberTwo;
}


module.exports = {sum, subtract};
