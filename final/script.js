function doMath(event) {
  var numInput = document.getElementById('num').value;
  addNums(numInput);
  subNums(numInput);
  multNums(numInput);
  divisNums(numInput);
  event.preventDefault();

}

function addNums(number) {
  number = parseInt(number);
  var addCol = document.getElementById('add');
  var result = 0;
  var list = ``;

  
  for (let i = 1; i < 11; i++) {
    result = number + i;
    list += `<li>${i} + ${number} = ${result}</li>`;
  }

  addCol.innerHTML = list;

}

function subNums(number) {
  number = parseInt(number);
  var subCol = document.getElementById('sub');
  var result = 0;
  var list = ``;

  
  for (let i = 1; i < 11; i++) {
    result = i - number;
    list += `<li>${i} - ${number} = ${result}</li>`;
  }

  subCol.innerHTML = list;
}

function multNums(number) {
  number = parseInt(number);
  var multCol = document.getElementById('mult');
  var result = 0;
  var list = ``;

  
  for (let i = 1; i < 11; i++) {
    result = number * i;
    list += `<li>${i} * ${number} = ${result}</li>`;
  }

  multCol.innerHTML = list;
}

function divisNums(number) {
  number = parseInt(number);
  var divisCol = document.getElementById('divis');
  var result = 0;
  var list = ``;

  
  for (let i = 1; i < 11; i++) {
    result = i / number;
    result = result.toFixed(2);
    list += `<li>${i} / ${number} = ${result}</li>`;
  }

  divisCol.innerHTML = list;
}

var calcForm = document.getElementById('calc');
calc.addEventListener('submit', doMath);
