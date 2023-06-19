// doms into js
var input = document.querySelector('#equation');

//button onclick functions
const clicked = text => { input.value += text }

const bkspc = () => { input.value = input.value.slice(0, -1) }

const clr = () => {
  input.value = ""
  document.querySelector(".steps").innerHTML = "";
  document.querySelector("#result").value = "";
}

const calc = () => {
  results = solve(findTerms(termConfig(input.value)));
  if (isNaN(results[0]) && isNaN(results[1])) {
    document.querySelector("#result").value = "No Result!!"
  } else {
    document.querySelector("#result").value = `x = { ${results[0]} , ${results[1]} }`;
  }
}

//finding solutions
const termConfig = exp => {
  newExp = ''
  for (i in exp) { exp[i] == "-" && exp[i - 1] == "x" ? (newExp += "+-") : (newExp += exp[i]); }
  return newExp
}

const findTerms = exp => {
  // if(exp.split("+")[0].length==2){ exp="1"+exp}
  return exp.split("+")
}

const solve = terms => {
  //spliting numbers from all terms
  a = parseInt(terms[0]) || 1;
  b = parseInt(terms[1]) || 1;
  c = parseInt(terms[2]);
  
  //finding two solutions
  x1 = (-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
  x2 = (-b - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);

  // returning solutions as a list
  return [x1,x2]
}

const showSteps = () => {
  if (input.value == '') return
  terms = findTerms(termConfig(input.value));

  if (terms.length != 3) return
  
  a = parseInt(terms[0]) || 1;
  b = parseInt(terms[1]) || 1;
  c = parseInt(terms[2]);

  discriminent = Math.sqrt(b**2-(4*a*c))

  txt = `
  a = ${a}
  b = ${b}
  c = ${c}</br>
  &radic;(b<sup>2</sup>-4ac) = &radic;${b}<sup>2</sup>-4&times;${a}&times;${c}
  &radic;(b<sup>2</sup>-4ac) = &radic;${b ** 2}-${4 * a * c}
  &radic;(b<sup>2</sup>-4ac) = &radic;${b ** 2 - 4 * a * c}
  &radic;(b<sup>2</sup>-4ac) = ${discriminent}
  discriminent = ${discriminent}</br>
  <span class="sol">&#119909 = <span class="rhs"><i style="border-bottom: 2px solid currentColor;">-b &plusmn; &radic;b<sup>2</sup>-4ac</i><i>2a</i></span></span>
  <span class="sol">&#119909 = <span class="rhs"><i style="border-bottom: 2px solid currentColor;">-${b} &plusmn; &radic;${b}<sup>2</sup>-4&times;${a}&times;${c}</i><i>2&times;${a}</i></span></span>
  <span class="sol">&#119909 = <span class="rhs"><i style="border-bottom: 2px solid currentColor;">-${b} &plusmn; &radic;${b ** 2}-${4 * a * c}</i><i>${2*a}</i></span></span>
  <span class="sol">&#119909 = <span class="rhs"><i style="border-bottom: 2px solid currentColor;">-${b} &plusmn; &radic;${b ** 2-(4 * a * c)}</i><i>${2*a}</i></span></span>
  <span class="sol">&#119909 = <span class="rhs"><i style="border-bottom: 2px solid currentColor;">-${b} &plusmn; ${Math.sqrt(b ** 2-(4 * a * c))}</i><i>${2*a}</i></span></span>
  <span class="sol">&#119909 = {<span class="rhs"><i style="border-bottom: 2px solid currentColor;">-${b} + ${Math.sqrt(b ** 2-(4 * a * c))}</i><i>${2*a}</i></span> , <span class="rhs"><i style="border-bottom: 2px solid currentColor;">-${b} - ${Math.sqrt(b ** 2-(4 * a * c))}</i><i>${2*a}</i></span>}</span>
  <span class="sol">&#119909 = {<span class="rhs"><i style="border-bottom: 2px solid currentColor;">${-b+Math.sqrt(b ** 2-(4 * a * c))}</i><i>${2*a}</i></span> , <span class="rhs"><i style="border-bottom: 2px solid currentColor;">${-b-Math.sqrt(b ** 2-(4 * a * c))}</i><i>${2*a}</i></span>}</span>
  <span class="sol">&#119909 = {<span class="rhs"><i>${solve(terms)[0]}</i></span> , <span class="rhs"><i>${solve(terms)[1]}</i></span>}</span>`;

  newTxt = ''

  for (ltr in txt) { (txt[ltr] == txt[0]) ? newTxt+='</br>' : newTxt+=txt[ltr] }
  document.querySelector(".steps").innerHTML = newTxt;
  document.querySelector('.steps').style.width = input.clientWidth+'px';
  
  document.querySelector('.steps').classList.toggle('hide');
  
}