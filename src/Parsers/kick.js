function compile (str) {
  let arr = str.split("\n");
  let changed = '';
  
  changed = str;
  let toStringArr = [];
  
  arr.forEach(c => {
    if (c.match(/kick/g) && !c.match(/\"kick/g))  {
        c = c.replace(/kick/g, 'return');
      }
    
    toStringArr.push(c)
    });
  
    changed = toStringArr.join('\n');
    return changed;
}

module.exports = compile;