/* Array.메서드 VS Array.prototype.메서드 */

let arr1 = [1, 2, 3, 4, 5];


/* Array.메서드 */
console.log(Array.isArray(arr1));  // true
// console.log(arr1.isArray)  // undefined
// console.log(arr1.isArray())   // error


/* Array.prototype.메서드 */
// console.log(arr1.length);  // 5
// console.log(arr1.length());  // error
// console.log(Array.length(arr1)); // error

//- prototype이 안붙은 애들은 Object라는 키워드를 그대로 사용해야 함 ex) Object.values
// - prototype이 붙은 애들은 Object라는 키워드를 사용할 필요가 없음 ex) dog.tostring
// 오늘 배운것 대부분은 prototype에 속한다.