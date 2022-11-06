const person = {
  name: 'Lee',
  getName() {
    return this.name;
  }, // 메서드 내부의 this는 ? == 자신을 호출한 객체를 가르킨다.
};

console.log(person.getName()); // Lee

console.log(person.getName); // Lee


const anotherPerson = {
  name: 'Kim',
};

anotherPerson.getName = person.getName;
console.log(anotherPerson.getName()); // Kim

console.log(person.getName === anotherPerson.getName); // true


