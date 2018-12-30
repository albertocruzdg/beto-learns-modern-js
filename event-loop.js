console.log('1');
setTimeout(() => console.log('2'), 2000);
console.log('3');

//setTimeout is only 2s, but callback won't get executed until for ends looping.
//Event loop becomes locked until main execution finishes.
//After the program finishes excecuting, it will be able to take next item from event queue.
for(i = 0; i < 3000000000; i++){

}