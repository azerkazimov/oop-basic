function Person(name, age) {
  (this.name = name), (this.age = age);
  function greet(age) {
    const greet = "welcome";
    const getAway = "no ripe";
    if (age < 18) {
      return getAway + ' ' + name;
    } else {
      return greet + ' ' + name;
    }
  }
  console.log(`${greet(age)}`);
}

let person1 = new Person("Jack", 23); // welcome Jack

let person2 = new Person("Mark", 22); // welcome Mark

let person3 = new Person("Dave", 15); // no ripe Dave

// ========================================================

class resume {
  constructor(name, age, gender, phone, email) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.phone = phone;
    this.email = email;
  }
}

let employers = [
  (employer1 = new resume("Jack", 19, "male", "+99455544", "jack@mail.com")),
  (employer2 = new resume("Mark", 22, "male", "+99562751", "mark@mail.com")),
  (employer3 = new resume("Cate", 21, "female", "+99451458", "cate@mail.com")),
];

console.log(employers);
