// let str = "hello world"
// // 첫번째 인자(start)가, 두번쨰(end) 인자보다 클 경우
// // substring 의 경우 (5,0) 을 (0,5) 로 변환
// let a = str.substring(5, 0);

// // slice 는 빈문자열 반환
// let b = str.slice(5, 0);

// console.log("substring : " + a); // hello
// // 첫번째 인자 (start) -> index[0] == 'h' 부터
// // 두번째 (end) -1 -> index[5-1] == index[4] == o 까지 잘라내어 출력 

// console.log("slice : " + b);
// //s

// let c = 'werr';
// console.log(isNaN(NaN)); //넘버가 아니다

// function c() {
//     for(let i=1; i<10; i++){
//         if(i < 5) {
//             console.log(i)
//             return "return을 일찍 만났다."
//           } else {
//             return "i값이, 5초과되면서 return을 만났다."
//           }
//            // return문을 사용하지 않는다면 동작문 끝에 return undefined 숨어있음.
//     }
//    };
//    console.log(c());

//    function a(Q,W,E,R) {
//     console.log(Q,W,E,R);
//     console.log(arguments);
//    }
   
//    a("skill1", "skill2", "skill3");

//    function e() {
//     for(let i=1; i<5; i++){
//         console.log(i)
//     } // return문을 사용하지 않는다면 동작문 끝에 return undefined 숨어있음.
//    };
//    console.log(e());

//  const Yang = {
//     name: 'jisug',
//     age: 20,
//     born: 'incheon',
//   }
  
//   const kim = {
//     name: 'jisug',
//     age: 20,
//     born: 'incheon',
//   }
  
//   console.log(Yang===kim);

//   const a = Yang;
//   const b = kim;

//   console.log(typeof a);

// let x = 3;
    
// x == 4 ? console.log('if문으로 실행되었습니다.') : console.log('else문으로 실행되었습니다.');

// let result = x == 4 ? 100 : 200;
// console.log(result);


// let score = 71;
// let money = 1000;
// score > 90 ? money += 100000 :
// score > 80 ? money += 10000 :
// score > 70 ? money += 1000 : money = 0

// console.log(money);

// if(score > 90) {
//     money += 100000
// } else if (score > 80) {
//     money += 10000
// } else if (score > 70) {
//     money += 1000
// } else {
//     money = 0
// }
// console.log(money);

// // console.log(`10. ${false == null}<br>`); // 주의 false
// // console.log(`11. ${false == undefined}<br>`); // 주의  false


// // console.log(`14. ${isNaN(undefined)}<br>`); // true 주의
// // console.log(`15. ${isNaN(null)}<br>`); // false 주의
// // console.log(`16. ${isNaN(NaN)}<br>`); // true 주의


// // console.log(`17. ${Number.isNaN(undefined)}<br>`); // true 주의   false
// // console.log(`18. ${Number.isNaN(null)}<br>`); // true 주의   false
// // console.log(`19. ${Number.isNaN(NaN)}<br>`); // true 주의   true
// // console.log(`20. ${![]}<br>`); // false 주의   false
// // console.log(`21. ${!{}}<br>`); // false 주의   false

// console.log(Boolean());
// // 궁금?!
// // nuber



// let fish = ['정어리', '고등어', '돌고래', '참치', '고래상어', '코끼리']
// console.log(fish.slice(2,3))
// console.log(fish.slice(5,5))

// const porketmons = {
//     피카추: 1,
//     파이리: 2,
//     꼬부기: 3,
//     야도란: 4,
//   };
//   const a = Object.entries(porketmons);
//   console.log(a)

// for (const i in data) {
//     console.log(data[i]);
// }

let array = [10, 20, 30, 40, 50]

for(arr of array) {
 console.log(arr)
 }