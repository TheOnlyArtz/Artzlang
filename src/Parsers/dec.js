function compile (str) {
  let arr = str.split("\n");
  let changed = '';
  
  changed = str;
  let toStringArr = [];
  
  arr.forEach(c => {
    if (c.match(/dec\s/g) && !c.match(/(?:[A-z]*)\sdec/g))  {
        c = c.replace(/dec/, 'let');
      }
    
    toStringArr.push(c)
    });
  
    changed = toStringArr.join('\n');
    return changed;
}

module.exports = compile;