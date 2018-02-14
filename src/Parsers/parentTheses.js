function compile (str) {
  let arr = str.split("\n");
  let changed = '';
  
  changed = str;
  let toStringArr = [];
  
  arr.forEach(c => {
    if (c.match(/func\s(?:[A-z]*)\<\>(\{|\s\{)/g))  {
        c = c.replace(/\</, '(');
        c = c.replace(/\>/, ')');
      }
    
    toStringArr.push(c)
    });
  
    changed = toStringArr.join('\n');
    return changed;
}

module.exports = compile;