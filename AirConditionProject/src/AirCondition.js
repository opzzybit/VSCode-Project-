const airConditionBehavour ={
    powerBotton: "off",
    temperature: 24
}


function setActiveAirCondition(powerOn){
    airConditionBehavour.powerBotton =  powerOn;
}

function increaseTemperature(number) {
    
    airConditionBehavour.temperature +=  number;

    if(airConditionBehavour.temperature > 30){
      airConditionBehavour.temperature -= number;
    }
}

function decreaseTemperature(number) {
    
    airConditionBehavour.temperature -= number;
    
    if(airConditionBehavour.temperature < 16){
       airConditionBehavour.temperature += number; 
    }

}


function getTemperature(){
    return airConditionBehavour.temperature;
}

function getAirCondition(){
    return airConditionBehavour.powerBotton;
}

module.exports = {
    setActiveAirCondition,
    increaseTemperature,
    decreaseTemperature,
    getTemperature,
    getAirCondition
}
