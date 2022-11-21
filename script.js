// doms into js
var input = document.querySelector('#equation');

//button onclick functions
const clicked = text => { input.value += text }

const bkspc = () => { input.value = input.value.slice(0, -1) }

const clr = () => { input.value = "" }

const calc = () => {
  results = solve(findTerms(termConfig(input.value)));
  document.querySelector("#result").value = `x = { ${results[0]} , ${results[1]} }`;
}

//finding solutions
const termConfig = exp => {
  newExp = ''
  for (i in exp) {exp[i] == "-" && exp[i - 1] == "x" ? (newExp += "+-") : (newExp += exp[i]);}
  return newExp
}

const findTerms = exp => { return exp.split("+") }

const solve = terms => {
  //spliting numbers from all terms
  a = parseInt(terms[0].split('(')[0])
  b = parseInt(terms[1].split('(')[0])
  c = parseInt(terms[2])
  
  //finding two solutions
  x1 = (-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
  x2 = (-b - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);

  // returning solutions as a list
  return [x1,x2]
}