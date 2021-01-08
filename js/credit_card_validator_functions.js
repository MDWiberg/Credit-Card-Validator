// Credit Card Validator Function Library
// Matthew Wiberg

const creditCard = {
  validateCard(arr) {
    let startIndex = arr.length-2;
    let sum = 0;
    const doubleIndex = startIndex%2;
    const regularIndex = (startIndex-1)%2;
  
    while(startIndex != -2) {
  
      if(startIndex%2 === doubleIndex){
        if(arr[startIndex]*2 > 9){
          sum += arr[startIndex]*2 - 9;
        }
        else{
          sum += arr[startIndex]*2;
        }
        startIndex --;
      }
      else if(startIndex%2 === regularIndex){
        sum += arr[startIndex];
        startIndex --;
      }
      else if(startIndex === -1){
        sum += arr[arr.length-1];
        if(sum%10 === 0){
          return true;
        }
        else {
          return false;
        }
      }
    }
  },
  idCard(arr) {
    if(arr[0] === 3){
      return 'Amex';
    }
    else if(arr[0] === 4){
      return 'Visa';
    }
    else if(arr[0] === 5){
      return 'Mastercard';
    }
    else if(arr[0] === 6){
      return 'Discover';
    }
    else{
      return '';
    }
  }
}

 export default creditCard;  // Use for ES6/Web environment
//module.exports = creditCard;  // Use for Node environment



// Tests

// const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
// const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
// const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];

// if(creditCard.validateCard(valid1)){
//   console.log("Valid");
// }
// else {
//   console.log("Invalid");
// };
// console.log(creditCard.idCard(valid1));