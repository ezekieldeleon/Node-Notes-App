var square = (x) => {
  var result = x * x;
  return result;
};
console.log(square(9));

var simpleSquare = x => x * x;
console.log(simpleSquare(9));

var user = {
  name: 'Ezekiel',
  sayHi: () => {
    console.log(arguments);
    console.log(`Hi, Im ${this.name}`);
  },
  sayHiAlt () {
    console.log(arguments);
    console.log(`Hi, Im ${this.name}`);
  }
};

user.sayHi(1,2,3);
