// JS script to validate caredit card number
// Matthew Wiberg

import creditCard from "/js/credit_card_validator_functions.js";  // Use for ES6/Web environment
// const creditCard = require("./credit_card_validator_functions.js");  // Use for node environment
//creditCard.validateCard - Uses Luhn's Algorithm to check if credit card number is valid or not
//creditCard.idCard - Function to determine which card company the card belongs to 

// Write function to add and delete hyphens when necessary for input
// - const cardNumber = document.getElementById("cardNumber");
// - cardNumber.addEventListener("keydown", (c) => {
// - function
// })


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
    // if(i != 4 || i != 9 ||i != 14){
    cardNumberArr.push(parseInt(cardNumber[i]));
    // }
  }
  // Catch any strings/non-numbers to validate only numbers being entered in
  const truth = cardNumberArr.some(element => {
    return isNaN(element);
  });


  // Validate input type and put into an array
  if(truth){
    // alert('Please enter only numbers.  Thank you');
    document.getElementById("cardCompany").innerHTML = "Please enter only numbers.";
  }
  else if(typeof (parseInt(cardNumber)) === "number" && cardNumber != ""){
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
      document.getElementById("cardCompany").innerHTML = "Company not found";
    }
    else{
      document.getElementById("cardCompany").innerHTML = `Credit card company is ${cardCompanyName}.`;
    }

  }
  // Case if no input or not a number
  else{
    // alert('No Input Found');
    document.getElementById("cardCompany").innerHTML = "Please enter an input.";
  }
};

// Add a way for the function to be called when the button is clicked
const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", checkCard);
