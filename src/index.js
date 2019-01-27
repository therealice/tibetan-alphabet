import alphabet from './alphabet';

export function entries() {
  return alphabet;
}

export function entry(row, col) {
  const result = alphabet.filter(char => char.row === row && char.col === col);
  return result.length === 1
    ? result[0]
    : null;
}

export function row(rows) {
  if(Number.isInteger(rows)) {
    return alphabet.filter(char => char.row === rows);
  }
  
  if(Array.isArray(rows)) {
    const result = [];
    
    rows.forEach(function (row) {
      result.push(alphabet.filter(char =>  char.row === row));
    });

    return result;
  } 
  
  throw "The rows parameter is not a number or a list";
}

export function col(cols) {
  if(Number.isInteger(cols)) {
    return alphabet.filter(char => char.col === cols);
  }
  
  if(Array.isArray(cols)) {
    const result = [];
    
    cols.forEach(function (col) {
      result.push(alphabet.filter(char =>  char.col === col));
    });

    return result;
  } 
  
  throw "The cols parameter is not a number or a list";
}


