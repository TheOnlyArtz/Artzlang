const {readFileSync, read} = require('fs');
const {
  dec,
  func,
  parentTheses,
  kick
} = require('./Parsers');

const modify = function(str) {
  str = dec(str);
  str = parentTheses(str);
  str = func(str);
  str = kick(str);
  
  return str
}

const compile = function (path) {
    const file = readFileSync(path);    
    let fString = file.toString();

    console.log(modify(fString));
}

let s = compile('./test.ar');