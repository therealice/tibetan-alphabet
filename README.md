# Tibetan Alphabet

Contains the tibetan alphabet

### Installing

This library may be included as an npm module by running 

```
npm i tibetan-alphabet --save
```

### How to use
```
var alphabet = require('tibetan-alphabet').alphabet();

// Get text by row and column
var result1 = alphabet.filter(char => char.row === 1 && char.col === 1);
console.log(result1[0].text); // displays ཀ

// Get row and column by text
var result2 = alphabet.filter(char => char.text === 'ཀ');
console.log(result2[0].row); // displays 1
console.log(result2[0].col); // displays 1
```

## Authors

* **Christoffer Nawang Aarøy Thondrup** - *Initial work* - [ChristofferThondrup](https://github.com/awakephoenix)