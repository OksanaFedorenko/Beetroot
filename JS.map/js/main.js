/*Напиши функцию map(fn, array), которая принимает на вход функцию и массив, и обрабатывает каждый элемент массива этой функцией, возвращая новый массив.Пример:


function square(x) { return x * x; } // возведение в квадрат
console.log(map(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
console.log(map(square, [])); // []
Обрати внимание: функция не должна изменять переданный ей массив:


var arr = [1, 2, 3];
console.log(map(square, arr)); // [1, 4, 9]
console.log(arr); // [1, 2, 3]*/

var pricelist = [{
  model: "Samsung A5(2017) 3/32Gb",
  color: "blue",
  price: "11000"
},
{
  model: "Samsung A7(2017) 3/32Gb",
  color: "black",
  price: "13000"
},
{
  model: "Huawei P Smart 3/32Gb",
  color: "gold",
  price: "8000"
},
{
  model: "Xiaomi Redmi Note 4 3/32Gb",
  color: "black",
  price: "4600"
},
{
  model: "Samsung Galaxy S8 4/64Gb",
  color: "Midnight black",
  price: "22000"
},
{
  model: "Huawei Mate 10 Light 4/64Gb",
  color: "black",
  price: "10000"
},
{
  model: "Nokia 8 Dual Sim 4/64Gb",
  color: "Tempered blue",
  price: "13000"
},
{
  model: "Meizu M5 Note 3/32Gb",
  color: "silver",
  price: "4500"
},
{
  model: "Apple iPhone 7 Plus 3/32Gb",
  color: "black",
  price: "23000"
},
{
  model: "ZTE Axon 7 4/64Gb",
  color: "gray",
  price: "15000"
}
];


/*function square(x) { return x * x; } // возведение в квадрат
console.log(map(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
console.log(map(square, [])); // []*/

//var x = 1000;
function discount(x) {
  return x - 0.1 * x;
  console.log(x);
};

//discount();
var y = (map(discount, pricelist.price));
console.log(y);