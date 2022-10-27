

// ------ 생성자 함수 만들기 예제 ------
// function NewFactory(name){
//   this.name = name;
//   this.sayYourName = function(){
//       console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
//   }
// }
// const Robot = new NewFactory('지성')
// console.log(Robot.sayYourName());



// ------메뉴 랜덤선택 생성자함수 만들기 연습------
// const foodlist = ['짜장면', '짬뽕', '볶음밥', '간짜장'];

// function Pickbot(arr) {
//   this.arr = arr;
//   this.select = function() {
//     console.log(this.arr[Math.floor(Math.random() * this.arr.length)]);
//   };
// };

// const pickRobot = new Pickbot(foodlist);
// pickRobot.select();
// console.log(pickRobot.select());




// ------ 프로토타입을 활용한 메서드 사용 ------
// function Pickbot(arr) {
//   this.arr = arr;
// }
// Pickbot.prototype.select = function () {
//   console.log(this.arr[Math.floor(Math.random() * this.arr.length)])
// }

// const pickRobot = new Pickbot(['짜장면', '짬뽕', '볶음밥', '간짜장']);
// console.log(pickRobot.select())

// 생성자함수를 통해 만든 인스턴스에서 효율적인 메서드를 사용하기 위해서는 프로토타입을 활용해야 한다.
// 프로토타입을 사용하기 위해서는
// 생성자 함수명.prototype.메서드 = function () { 실행 하고자 하는 코드 }
// 를 작성하는데 this키워드를 사용하여 생성자함수를 참조할 수 있도록 명시하여 사용해야 한다.
