// /* Array.메서드 VS Array.prototype.메서드 */

// let arr1 = [1, 2, 3, 4, 5];


// /* Array.메서드 */
// console.log(Array.isArray(arr1));  // true
// // console.log(arr1.isArray)  // undefined
// // console.log(arr1.isArray())   // error


/* Array.prototype.메서드 */
// console.log(arr1.length);  // 5
// console.log(arr1.length());  // error
// console.log(Array.length(arr1)); // error

//- prototype이 안붙은 애들은 Object라는 키워드를 그대로 사용해야 함 ex) Object.values
// - prototype이 붙은 애들은 Object라는 키워드를 사용할 필요가 없음 ex) dog.tostring
// 오늘 배운것 대부분은 prototype에 속한다.



// const numbers = [1, 2, 3, 4, 5];

// const result =
// numbers.map(number => { numbers.push(number); return number * number;} );

// console.log(result); // [1, 4, 9, 16, 25];

// let temp = new Map([[1, 10],
//     [2, 20],
//     [3, 30],
//     [4, 40]]);
    
//     console.log(temp);
//     console.log(typeof temp);

// let s = new Set('abcdeeeeeeeee');
// console.log(s);
// console.log(s.size);
// console.log(s[1]);
// console.log(typeof s)

// 값이 배열인 경우
// let cc = [0,1,2,3,4]
// console.log(cc[0])
// console.log(typeof cc)
// let ss = new Set('abcdeeeeeeeee'.split(''));
// console.log(ss);
// console.log(ss[1]);
// ss.clear
// console.log(ss);

// let a = new Set('abc');
// let b = new Set('cde');
// let cro = [...a].filter(value => b.has(value))
// console.log(cro)

// let union = new Set([...a].concat(...b))


// function sayName(){
//   console.log(this.name);
// }

// var name = 'Hero'; 
// // 전역으로 선언한 name 변수의 앞에는 window 가 생략되어 있습니다. 
// // 때문에 window.name === "Hero" 가 성립합니다.
// let peter = {
//   name : 'Peter Parker',
//   sayName : sayName
// }

// let bruce = {
//   name : 'Bruce Wayne',
//   sayName : sayName
// }

// sayName();
// peter.sayName(); 
// bruce.sayName();

/* sayName() 함수를 실행했을 때와 
peter, bruce 객체의 sayName 함수를 호출했을 때의 결과를 비교해 보세요 */

var peter = {
    name : 'Peter Parker',
    sayName : function(){    
          console.log(this.name);
      }
  }
  
  var bruce = {
    name : 'Bruce Wayne',
  }
  peter.sayName.call(bruce);