// let title = document.getElementById('title');
// let list = document.getElementsByTagName('ul');
// let items = document.getElementsByClassName('item');
// let inp = document.getElementsByName('inp-name');
// for(let i = 0; i < items.length; i++){
//   items[i].style.listStyleType = "none"
// }


// let title = document.querySelector('#title');
// let list = document.querySelectorAll('ul');
// let items = document.querySelectorAll('.item');
// let inp = document.querySelectorAll('[name="inp-name"]');

// console.log(title);
// console.log(list);
// console.log(items);
// console.log(inp);


// let example = document.getElementById('hello');
// console.log(example.innerText);
// let example = document.querySelectorAll('h2');
// example.forEach(item => {
//   item.innerText = "Hello World";
// });


// let elements = document.querySelectorAll('.element');
// elements.forEach(item => {
//   console.log(item)
// });

// let elements = document.getElementsByClassName('element');
// for(let i = 0; i < elements.length; i++){
//   elements[i].innerHTML = `${elements[i].innerHTML} ${i + 1}`
// };

// let newElem = document.createElement('div');
// let container = document.querySelectorAll('.container');
// console.log(container);

// newElem.innerHTML = "<span>I am a new element</span>";
// newElem.style.color = "red";
// newElem.style.backgroundColor = "black";
// container[0].appendChild(newElem);


// let elem1 = document.createElement('div');
// let elem2 = document.createElement('div');
// let elem3 = document.createElement('div');

// elem1.innerText = "Element 1";
// elem2.innerText = "Element 2";
// elem3.innerText = "Element 3";

// container[0].append(elem1);
// container[0].prepend(elem2);
// container[0].appendChild(elem3);

// container[0].removeChild(elem2);

// elem1.classList.add('foo');
// // elem1.classList.remove('foo');
// elem1.classList.toggle('foo');

// function toggleTheme(){
//   let body = document.querySelector('body');
//   body.classList.toggle('theme-color');
// };


// function toggleTheme(){
//   let body = document.querySelector('body');
//   body.classList.forEach(item => {
//     if(item === 'theme-color__black'){
//       body.classList.remove(item)
//       body.classList.add('theme-color__red')
//     }else if(item === 'theme-color__red'){
//       body.classList.remove(item)
//       body.classList.add('theme-color__green');
//     }else if(item === 'theme-color__green'){
//       body.classList.remove(item)
//       body.classList.add('theme-color__white')
//     }else if(item === 'theme-color__white'){
//       body.classList.add('theme-color__black')
//       body.classList.remove(item)
//     }
//   })
// };

// setInterval(toggleTheme, 500)

// let date = new Date().getHours();
// if(date >= 19){
//   body.classList.add('theme-color__black')
// }
// console.log(date)


// let elements = document.querySelectorAll('.list li');
// elements.forEach(item => item.classList.add('newClass'));
// console.log(elements)