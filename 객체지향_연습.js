

// ------ 생성자 함수 만들기 예제 ------
// function NewFactory(name){
//   this.name = name;
//   this.sayYourName = function(){
//       console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
//   }
// }
// const Robot = new NewFactory('지성')
// console.log(Robot.sayYourName());



// ------메뉴 랜덤선택 생성자 함수 만들기 연습------
// const arr = ['짜장면', '짬뽕', '볶음밥', '간짜장'];

// function Pickbot(arr) {
//   this.empty = arr;
//   this.select = function() {
//     console.log(arr[Math.floor(Math.random() * arr.length)]);
//     console.log(this.empty[Math.floor(Math.random() * this.empty.length)]);
//   };
 select() {
   return arr[Math.floor(Math.random() * arr.length)];
 }
// };

// const pickRobot = new Pickbot(foodlist);
// pickRobot.select();




// ------ 프로토타입을 활용한 메서드 사용 ------
const foodlist = ['짜장면', '짬뽕', '볶음밥', '간짜장'];

function Pickbot(arr) {
  this.list = arr;
}

Pickbot.prototype.select = function () {
  return this.list[Math.floor(Math.random() * this.list.length)];
}

const pickRobot = new Pickbot(foodlist);
console.log(pickRobot.select());
console.log(pickRobot);

// 생성자 함수를 통해 만든 인스턴스에서 효율적인 메서드를 사용하기 위해서는 프로토타입을 활용해야 한다.
// 프로토타입을 사용하기 위해서는
// 생성자 함수명.prototype.메서드 = function () { 실행 하고자 하는 코드 }
// 를 작성한다.
// 프로토타입 메서드도 일반 메서드와 마찬가지로 this는 해당 메서드를 호출한 객체에 바인딩 된다. 따라서 프로토타입 메서드 내부에 선언된 this는 자신을 호출한 pickRobot 인스턴스의
