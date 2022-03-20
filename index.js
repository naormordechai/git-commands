'use strict';

console.log('App started!');

const helloFunc = async () =>  {
  document.querySelector('img').src = (await axios.get('https://dog.ceo/api/breeds/image/random')).data.message;
  const myBtn = document.querySelector("[id=my-btn]");
  console.log(myBtn)
}

const handleRemove = () => {
  console.log('BranchA');
  console.log('BranchC');
  console.log('BranchC!!');
};

const handleUpdate = () => {
  console.log('const handleUpdate');
  console.log(1);
};

const handleAdd = () => {
  console.log('const handleAdd');
  console.log(2);
};

function foo() {
//  TODO: Need calculate every single request!
  const x = 100;
  const y = 200;
  const z = 300;
  console.log(3);
  return x + y + z;
}

function A() {
  console.log('Hello from A');
};

function componentA() {
  console.log(1);
  console.log(2);
  console.log(3);
}