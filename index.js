function hasTargetSum(array, target) {
  result = false;
  for(let i = 0; i < array.length; i++){
    for(let j = i+1; j < array.length; j++){
      if(array[i]+array[j] === target) {
        result = true;
      }
      
    }
  }
  return result
}

/* 
  Write the Big O time complexity of your function here
  time complexity is n*n because i iterared twice ======> O(n*n)
  space complexity is n because i didn't create new data structure, 
  so we have just the input array =========> O(n)
*/


  //Add your pseudocode here
  /**
   * initialise the outcome
   * iterate through all elements starting with the first element
   *    iterate through all elements starting with the second element
   *      if the sum of 2 members adds up to the target
   *        change the state of our result
   */


/*
  Add written explanation of your solution here
  using 2 iterators  helps me work with 2 elements at once,
  also the result variable has to be returned outside the loop because,
  calling it within the loop will lead to multiple return values.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
