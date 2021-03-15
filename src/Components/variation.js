var person = {
  name: "John",
};

function printName() {
  console.log(this.name);
}
printName();

var boundPrintName = printName.bind(person);
boundPrintName();

const me = [
  {
    myName: "Rasheed Akanni",
    age: class myAge {
      constructor(dataAge) {
        this.dataAge = dataAge;
      }
      ageExpert(dataExpert) {
        return this.dataAge - dataExpert;
      }
    },
  },
];

const date = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return currentYear;
};
const ages = new me[0].age(date());
console.log(ages);
const realAge = () => {
  class Loading {
    constructor(load) {
      this.load = load;
    }
  }
  const checked = new Loading(2000);
  const anotherFinding = "Vath";
  const world = Math.random();
  const personal = [
    {
      id: 1,
    },
  ];
  const swe = anotherFinding.length - Math.floor(world + personal[0].id);
  return checked.load + swe;
};

console.log(
  `My name is ${me[0].myName}. I'm ${ages.ageExpert(realAge())} years old`
);
