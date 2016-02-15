//
// function sum (num1,num2) {
//   var prob1 = num1 + num2
//   console.log('The sum of ' + num1 + ' and ' + num2 + ' equals ' + prob1);
//   return prob1
// }
//
// function multiply (num1, num2) {
//   var prob2 = num1 * num2
//   console.log('The product of ' + num1 + ' and ' + num2 + ' equals ' + prob2) ;
//   return prob2
// }
//
// function sumAndMultiply (num1, num2, num3) {
//   var prob3sum = sum(num1, num2) + num3
//   var prob3multiply = (multiply(num1,num2) * num3)
//   console.log('The sum of ' + num1 + ' and ' + num2 + ' and '+ num3+ ' equals '+ prob3sum);
//   console.log('The product of ' + num1 + ' and ' + num2 + ' and ' + num3 + ' equals ' + prob3multiply);
//   return [prob3sum, prob3multiply];
// }

// function sumArray (array1) {
//   var arraytotal = 1;
//   for (var i=0; i<array1.length; i++){
//     arraytotal += array1[i];
//     console.table(array1)
//     console.log(array1+ ' was passed in as an array of numbers, and '+ arraytotal + ' is their sum.')
//   }
//   return arraytotal;
// }

function multiplyArray(array2) {
  var arrayproduct = 0;
  for (var i=0; i<array2.length; i++){
    arrayproduct += array2[i];
    console.table(array2)
    console.log(array2+ ' have a product of '+ arrayproduct)
  }
  return arrayproduct;
}
