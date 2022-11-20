var exp = '2(x*x)+5(x)-1375'

var helperBtns = document.querySelectorAll('.hepler-btns');
var input = document.querySelector('#equation');


function clicked(text) {
  input.value+=text
}

function bkspc() {
  input.value=input.value.slice(0,-1)
}

  
function clr(){
  input.value = "" 
}

function calc() {
  results = solve(findTerms(input.value))
  document.querySelector("#result").value = `x = { ${results[0]} , ${results[1]} }`;
  
}




function findTerms(exp) {
  terms = [];
  initSplit = exp.split("+");

  if (initSplit.length < 3) {
    initSplit.forEach((term) => {
      if (term.includes("-")) {
        term = term.split("-");
        terms.push(term[0]);
        terms.push("-"+term[1]);
      } else {
        terms.push(term)
      }
    });
  } else {
    terms = initSplit
  }
  return terms
}

function solve(terms) {
  a = parseInt(terms[0].split('(')[0])
  b = parseInt(terms[1].split('(')[0])
  c = parseInt(terms[2])

  x1 = (-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
  x2 = (-b - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);

  return [x1,x2]
}