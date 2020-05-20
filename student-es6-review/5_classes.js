class Person {
    constructor(first_name, last_name) {
      this.first_name = first_name;
      this.last_name = last_name;
    }
    full_name() {
      return `${this.first_name} ${this.last_name}`
    }
  }
  const joe = new Person('Joe', 'Bloggs');
  console.log(joe.full_name());

  class Teacher extends Person {
      constructor(first_name, last_name, subject) {
          this.first_name = first_name;
          this
      }
  }