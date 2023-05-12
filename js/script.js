
//===передача по ссылке и по значению=====================================================================================================================================================

//на практике мы видим, что изменяя копию, мы модифицируем наш изначальный объект

// когда мы работаем с примитимными типами данными типа строк чисел, логических значений то они передаются по значению. Когда мы работаем с объектами то передача уже идет не позначению а по ссылке

// let a = 5;
// let b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
// 	a: 5,
// 	b: 1,
// };

// const copy = obj; // передает ссылку

// copy.a = 10;

// console.log(copy);
// console.log(obj);


// 1-й способ создаем копии массивов, обектов и прочее

// метод циклов, мы создали поверхностную копию, вложенные объекты в объект тоже меняются (будут иметь ссылочный тип данных), а на первой линии все независимо, то есть копия, клонирование. Нормально мы сможем раотать только с теми свойстваим которые лежат на первом уровне

// const obj = {
// 	a: 5,
// 	b: 1,
// };

// function copy(mainObj) {
// 	let objCopy = {};

// 	let key;
// 	for (key in mainObj) {
// 		objCopy[key] = mainObj[key];
// 	}

// 	return objCopy;
// }

// const numbers = {
// 	a: 2,
// 	b: 5,
// 	c: {
// 		x: 7,
// 		y: 4,
// 	}
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10;

// console.log(newNumbers);
// console.log(numbers);



// 2-й способ Object.assign(); позволяет соединить сразу несколько объектов


// const numbers = {
// 	a: 2,
// 	b: 5,
// 	c: {
// 		x: 7,
// 		y: 4,
// 	}
// };

// const add = {
// 	d: 17,
// 	e: 20,
// };

// // 1-й аргумент в который мы хотим поместить, 2-й - тот объект в который мы помещаем
// console.log(Object.assign(numbers, add))

// // Тоже самое мы можем сделать и с пустым объектом

// console.log(Object.assign({}, add))

// const clone = Object.assign({}, add);

// console.log(clone);

// clone.d = 20;

// console.log(add);
// console.log(clone);


// const numbers = {
// 	a: 2,
// 	b: 5,
// 	c: {
// 		x: 7,
// 		y: 4,
// 	}
// };

// const add = {
// 	d: 17,
// 	e: 20,
// };

// 1-й аргумент в который мы хотим поместить, 2-й - тот объект в который мы помещаем
// console.log(Object.assign(numbers, add))

// // Тоже самое мы можем сделать и с пустым объектом

// console.log(Object.assign({}, add))

// const clone = Object.assign({}, add);

// console.log(clone);

// clone.d = 20;

// console.log(add);
// console.log(clone);


// поверхнсотная копия массивов slice() --- этот метод который позволяет скопировать старый массив

// const oldArray = ['a', 'b', 'c'];

// const newArray = oldArray.slice();

// newArray[1] = 'ddhihif';
// console.log(oldArray);
// console.log(newArray);


// поверхнсотная копия массивов оператор разворота SPREAD

// const video = ['youtube', 'vimeo', 'rutube'];
// const blogs = ['wordpress', 'livejournal', 'blogger'];
// const internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);


// function log(a, b, c) {
// 	console.log(a);
// 	console.log(b);
// 	console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);


// 4-й способ создания поверхностных копий

const array = ['a', 'b'];
const newArray = [...array];

console.log(newArray);

const q = {
	one: 1,
	two: 2,
};

const newObj = {...q};