function b1(){
  var myvar;
  console.log(`${myvar}`);
}

function a1(){
  var myvar=1;
  b1();
  console.log(`${myvar}`);
}

var myvar=2;
console.log(`${myvar}`);
a1();




