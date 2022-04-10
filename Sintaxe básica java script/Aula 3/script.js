/*let array = ['string', 1, true];
console.log(array);*/

let array = ['string',1, true, ['array1'],['array2'],['array3'],['array3']];
//console.log(array[3]);

//array.forEach(function(item, index){console.log(item,index)});
 //array.push('novo item');
 //array.pop();
 //array.shift();
 //array.unshift();
 //array.splice(0, 3);
 let novoArray= array.slice(0,3);
 
 let object = {string:'string', number: 1, boolean: true, array:["array"], objectInterno:{objectInterno:'Objeto Interno'}};
 
 console.log(object.array);


