
// const add = (arr) => arr.map(num => num + 1);
const add = (arr) => arr.filter(num => num % 2==0).map(num=>num+1);


const multiply = (arr) => arr.map(num => num * 2);

const subtraction = (arr) => arr.map(num => num - 1);

const divide=(arr) =>arr.map(num=>num/1);

module.exports = {
  add,
  multiply,
  subtraction,divide
};

