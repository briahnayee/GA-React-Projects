class Person {
    constructor(first_name, last_name) {
      this.first_name = first_name;
      this.last_name = last_name;
      this.favorites = {
          food: 'sushi',
          color: 'green',
          drink: 'beer'
      }
    }
    greetings() {
      return `Hello, my name is ${this.first_name} ${this.last_name}. My favorite color is ${this.favorites.color}.`
    }
  }
  const joe = new Person('Joe', 'Bloggs', {food: 'sushi', color: 'green', drink: 'beer'})
  const joanna = new Person('Joanna', 'Jones', {food: 'steak', color: 'red', drink: 'wine'})
  
  console.log(joe.greetings());