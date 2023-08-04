function increaseBalance(x, y) {
  x = x + y;
  return x;
}

function decreaseBalance(x, y) {
  //здесь не хватало второй переменной 'Y'
  x = x - y;
  return x;
}

function divideBalanceByAccounts(x, y) {
  x = x / y;
  return x;
  console.log("x"); // - непонятно, для чего после return выводить x в consol.log, после return выполнение кода останавливается
}

function getRestAfterDivision(x, y) {
  x = x % y;
  return x;
}

console.log(increaseBalance(3000, 700));
console.log(decreaseBalance(3000, 700));
console.log(divideBalanceByAccounts(3000, 2, 4000));
-(
  //здесь видимо лишнее третье число 4000
  console.log(getRestAfterDivision(7000, 3))
);

//[Running] node "/Users/vasilijsabrov/Documents/HW6.1/hw-js-assignments/tempCodeRunnerFile.js"
//3700
//2300
//1500
//1

//[Done] exited with code=0 in 0.143 seconds
