function compile (str) {
  let arr = str.split("\n");
  let changed = '';
  
  changed = str;
  let toStringArr = [];
  
  arr.forEach(c => {
    if (c.match(/func\s/g) && !c.match(/(?:[A-z]*)\sfunc/g))  {
        c = c.replace(/func/, 'function');
      }
    
    toStringArr.push(c)
    });
  
    changed = toStringArr.join('\n');
    return changed;
}

module.exports = compile;