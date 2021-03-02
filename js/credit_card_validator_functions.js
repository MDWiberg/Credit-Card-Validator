// Credit Card Validator Function Library
// Matthew Wiberg

const creditCard = {

  // Method takes in an array parameter which is the input card number and uses Luhn's Alogrithm to determine if the number is valid or not
  validateCard(arr) {
    // The starting number is always the second to last 
    let startIndex = arr.length-2;  
    // Add new variable to semantic purposes; will hold the currentIndex that is being accessed
    let currentIndex = startIndex;
    // sum will hold the total of all the numbers added together
    let sum = 0;
    // Initializes all the indexes which values are going to be doubled; the indexes that equal either 1 or 0 after %2
    const doubleIndex = startIndex%2;
    // Initializes all the indexes which values are going to stay the same; the indexes that equal either 1 or 0 after %2 
    const regularIndex = (startIndex-1)%2;
  

    // Loop makes sure all the numbers in the array have been dealt with 
    while(currentIndex != -2) {
  
      // Condition checks if the current index is equal to the indexes whose values are doubled
      if(currentIndex%2 === doubleIndex){
        // Condition checks if the value increases above 10 when doubles, and if so you subtract 9
        if(arr[currentIndex]*2 > 9){
          sum += arr[currentIndex]*2 - 9; 
        }
        // Otherwise double the number 
        else{
          sum += arr[currentIndex]*2;
        }
        // Decrease currentIndex to move through the numbers
        currentIndex --;
      }
      // Condition checks if the current index is equal to the indexes whose values stay the same
      else if(currentIndex%2 === regularIndex){
        sum += arr[currentIndex];
        // Decrease currentIndex to move through the numbers
        currentIndex --;
      }
      // Condition checks if the currentIndex is equal to -1, meaning it need to needs to add the number at the end of the array that was skipped in the beginning
      else if(currentIndex === -1){
        sum += arr[arr.length-1];
        // Luhn's Algorithm says that is the sum of all the numbers mod 10 is equal to 0, then it is a valid number
        if(sum%10 === 0){
          return true;
        }
        else {
          return false;
        }
      }
    }
  },

  // Method takes in an array parameter which is the input card number and checks the first number to see which card company the issued number if from  
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

