/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const meterToFeet = 3.281 
const literToGallon = 0.264 
const kiloToPound = 2.204

// get elements from the DOM
let volumeP = document.getElementById("volume-p")
let lengthP = document.getElementById("length-p")
let massP = document.getElementById("mass-p")

//variable that pulls user input from the DOM
let userInput = document.getElementById("user-input")

// get the btn from the dom 
let convertBtn = document.getElementById("convert-btn")
convertBtn.addEventListener("click", function(){
    
    // store the users input in a variable 
    let baseValue = userInput.value
    
    // change the text content for length 
    lengthP.textContent = `${baseValue} meters = ${(baseValue * meterToFeet).toFixed(2)} feet | ${(baseValue * meterToFeet).toFixed(2)} = ${(baseValue / meterToFeet).toFixed(2)} meters`
    
    // change the text content for volume 
    volumeP.textContent = `${baseValue} liters = ${(baseValue * literToGallon).toFixed(2)} gallons | ${(baseValue * literToGallon).toFixed(2)} gallons = ${(baseValue / literToGallon).toFixed(2)} liters`
    
    // change the text content for mass 
    massP.textContent = `${baseValue} kilos = ${(baseValue * kiloToPound).toFixed(2)} pounds | ${(baseValue * literToGallon).toFixed(2)} pounds = ${(baseValue / literToGallon).toFixed(2)} kilos`
})


