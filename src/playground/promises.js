const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('oops');
    // resolve({
    //   name: 'Max',
    //   age: 29
    // }); // only supports one argument
    // resolve('This is my resolved data too'); // this will be ignored
  }, 3000);
});

console.log('before');

promise.then((data) => {
  console.log('1', data);
}).catch((error) => {
  console.log('error: ', error);
});

console.log('after');