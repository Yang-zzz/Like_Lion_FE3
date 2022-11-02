const person = {
    name: 'Lee',
    getName() {
      return this.name;
    },
  };
  
  console.log(person.getName()); // Lee
  
  const anotherPerson = {
    name: 'Kim',
  };
  
  anotherPerson.getName = person.getName;
  console.log(anotherPerson.getName()); // Kim
  
  console.log(person.getName === anotherPerson.getName); // true