//jshint esversion:6

module.exports = function(inputArray){
  
  if(inputArray instanceof Array === false){
    return `Received ${typeof inputArray} while expecting array`;
  }

  for(i = 0; i < inputArray.length; i++){
    if(typeof inputArray[i] !== 'number'){
      return 'Received incomputable input';
    }
  }

  if (inputArray.length <= 1){
    return inputArray;
  }
  
  let mid = Math.floor(inputArray.length / 2);

};