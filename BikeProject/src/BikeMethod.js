const bikeBehaviour ={
    powerBotton: "off",
    acceleration: 10
}
  

function setPowerBotton(powerBotton) {
    bikeBehaviour.powerBotton = powerBotton;
}
//ACCELERATION METHOD
function gearOneAccelerated(gearNumber){

    if(gearNumber == 1) {
        bikeBehaviour.acceleration += gearNumber;
    }
    else {
        throw new Error('the acceleration number should be 1');
    }
}

function gearTwoAccelerated(gearNumber) {

    if(gearNumber == 2){
        bikeBehaviour.acceleration += gearNumber;
    }
    else{
        throw new Error('the acceleration number should be 2');
    }
}

function gearThreeAccelerated(gearNumber) {

    if (gearNumber == 3){
        bikeBehaviour.acceleration += gearNumber;
    }
        
    else{
        throw new Error('the acceleration number should be 3');
    }
        
}

function gearFourAccelerated(gearNumber) {

    if (gearNumber == 4){
        bikeBehaviour.acceleration += gearNumber;
    }
    else{
        throw new Error('the acceleration number should be 4')  
    }
}






//DECCELERATION METHOD
function gearOneDecelerated(gearNumber) {
   
    if(gearNumber == 1){
        bikeBehaviour.acceleration -= gearNumber;
    }
    else{
        throw new Error('the deceleration number should be 1')
    }
}

function gearTwoDecelerated(gearNumber) {
    
    if(gearNumber == 2){
         bikeBehaviour.acceleration -= gearNumber;
    }
    else{
        throw new Error('the deceleration number should be 2')
    }
}

function gearThreeDecelerated(gearNumber) {

    if (gearNumber == 3){
        bikeBehaviour.acceleration -= gearNumber;
    }
    else{ 
        throw new Error('the deceleration number should be 3')
    }
}

function gearFourDecelerated(gearNumber) {
    
    if (gearNumber == 4){
        bikeBehaviour.acceleration -= gearNumber;
    }
    else{
        throw new Error('the deceleration number should be 4')
    }
}




function getPowerBotton(){
    return bikeBehaviour.powerBotton;
}

function getAccelerationBotton(){
    return bikeBehaviour.acceleration;
}

module.exports ={
   setPowerBotton,
   gearOneAccelerated,
   gearTwoAccelerated,
   gearThreeAccelerated,
   gearFourAccelerated,
   gearOneDecelerated,
   gearTwoDecelerated,
   gearThreeDecelerated,
   gearFourDecelerated,
   getPowerBotton,
   getAccelerationBotton
}
