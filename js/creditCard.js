// JS script to validate caredit card number
// Matthew Wiberg

import creditCard from "/js/credit_card_validator_functions.js";  // Use for ES6/Web environment
// const creditCard = require("./credit_card_validator_functions.js");  // Use for node environment
//creditCard.validateCard - Uses Luhn's Algorithm to check if credit card number is valid or not
//creditCard.idCard - Function to determine which card company the card belongs to 

// Write eventListener to add and delete hyphens when necessary for input
const cardNumberHyphen = document.getElementById("cardNumber");
cardNumberHyphen.addEventListener("keydown", (c) => {
  if(c.key === "Backspace" || c.key === "Delete"){
    if(cardNumberHyphen.value.length === 6){
      cardNumberHyphen.value = cardNumberHyphen.value.slice(0,5);
    }
    else if(cardNumberHyphen.value.length === 11){
      cardNumberHyphen.value = cardNumberHyphen.value.slice(0,10);
    }
    if(cardNumberHyphen.value.length === 16){
      cardNumberHyphen.value = cardNumberHyphen.value.slice(0,15);
    }
  }
  else {
    if(cardNumberHyphen.value.length === 4){
      cardNumberHyphen.value += "-";
    }
    else if(cardNumberHyphen.value.length === 9){
      cardNumberHyphen.value += "-";
    }
    else if(cardNumberHyphen.value.length === 14){
      cardNumberHyphen.value += "-";
    }
  }
});
cardNumberHyphen.addEventListener("change", function (){
  if(cardNumberHyphen.value.length === 16){
    cardNumberHyphen.value = cardNumberHyphen.value.slice(0,4)+"-"+cardNumberHyphen.value.slice(4,8)+"-"+cardNumberHyphen.value.slice(8,12)+"-"+cardNumberHyphen.value.slice(12,16);
  }
});



 alert('JS first run test');

const checkCard = () => {

  // Reset p elements
  document.getElementById("numValidity").style.display = "none";
  document.getElementById("cardValidity").innerHTML = "";
  document.getElementById("cardCompany").innerHTML = "";
  document.getElementById("cardNumber").innerHTML = "";

  // Retrieve input from field
  const cardNumber = document.getElementById("cardNumber").value;
  let cardNumberArr = [];
  for(let i=0;i<=cardNumber.length-1;i++){
    if(i != 4 && i != 9 && i != 14){
    cardNumberArr.push(parseInt(cardNumber[i]));
    }
  }
  // Catch any strings/non-numbers to validate only numbers being entered in
  const truth = cardNumberArr.some(element => {
    return isNaN(element);
  });


  // Validate input type and put into an array
  if(truth){
    // alert('Please enter only numbers.  Thank you');
    document.getElementById("numValidity").style.display = "block";
    document.getElementById("numValidity").innerHTML = "Please enter only numbers.";
  }
  else if(cardNumberArr != "" && !(cardNumberArr.length < 16)){
    // let cardNumberArr = [];
    // for(let i=0;i<=cardNumber.length-1;i++){
    //   // if(i != 4 || i != 9 ||i != 14){
    //   cardNumberArr.push(parseInt(cardNumber[i]));
    //   // }
    // }
    // alert('Input Found');
    // Deal with hyphens --------------------------

    // Validate the card number 
    if(creditCard.validateCard(cardNumberArr)){
      // Display if valid card or not
      document.getElementById("cardValidity").style.display = "block";
      document.getElementById("cardValidity").innerHTML = "Valid Card";
    }
    else{
      // Display if valid card or not
      document.getElementById("cardValidity").style.display = "block";
      document.getElementById("cardValidity").innerHTML = "Invalid Card";
    }

    // Display Card company name/id
    const cardCompanyName = creditCard.idCard(cardNumberArr);
    if(cardCompanyName === ""){
      document.getElementById("cardCompany").innerHTML = "Company not found.";
    }
    else{
      document.getElementById("cardCompany").innerHTML = `Credit card company is ${cardCompanyName}.`;
    }

  }
  // Case if there are more than 0 numbesr entered but not all 16
  else if(cardNumberArr.length === 0){
    document.getElementById("numValidity").style.display = "block";
    document.getElementById("numValidity").innerHTML = "Please enter an input.";
  }
  // Case if no input or not a number
  else if(cardNumberArr.length < 16){
    document.getElementById("numValidity").style.display = "block";
    document.getElementById("numValidity").innerHTML = "Please enter all 16 numbers.";
  }
};

// Add a way for the function to be called when the button is clicked
const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", checkCard);
