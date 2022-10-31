// const jisung = new Humun(name, age, born, job);


// function Humun(name, age, born, job) {
//   this.name = name;
//   this.age = age
//   this.born = born;
//   this.job = job;
// }
// Humun.sympathy = function (you) { you.consolationUp();},
// Humun.cheer = function (you) { you.vesselUp();}

// function you() {
//   this.vessel = 1;
//   this.consolation = 1;
// }
// you.prototype.consolationUp = function() {
//   this.consolation++;
// }
// you.prototype.vesselUp = function() {
//   this.vessel++;
// }


class Human {
  constructor(name) {
    this.name = name;
  }
  cheer(You) {
    You.vesselUp();
  }
};

class You {
  constructor() {
    this.vessel = 1;
  }
  vesselUP() {
    this.vessel++;
 }
};

const human = new Human('asd');
const you = new You(2);
console.log(human.cheer);
console.log(you.vessel);





// 음식의 이름이 배열을 전달하면 배열안에서 랜덤하게 메뉴를 뽑아내는 로봇객체의 생성자를 만들어보세요.

 

// function Factory(food) {
//   this.pick = food[Math.floor(Math.random() * food.length)];
//   this.print = function () {
//     console.log(`주인님 ${this.pick} 드셔보세요 제발`);
//   };
// }

// const robot1 = new Factory(['짜장', '짬뽕', '탕수']);
// robot1.print();
// const robot2 = new Factory(['짜장', '짬뽕', '탕수']);
// robot2.print();
// console.log(robot1.pick === robot2.pick);


// //프로토타입
// function Factory2(food) {
//   this.pick = food[Math.floor(Math.random() * food.length)];
// }
// Factory.prototype.print = function () {
//   console.log(`주인님 ${this.pick} 드셔보세요 제발`);
// };

// const robot3 = new Factory(['짜장', '짬뽕', '탕수']);
// robot3.print();
// const robot4 = new Factory(['짜장', '짬뽕', '탕수']);
// robot4.print();


// console.log(robot3.pick === robot4.pick);
