# Tibetan Alphabet

Contains the tibetan alphabet

### Installing

This library may be included as an npm module by running 

```
npm i tibetan-alphabet --save
```

### How to use
Examples:
```
import { entries, entry, row, col } from 'tibetan-alphabet';

// All entries contains 30 entries. Display the first tibetan character
const entries = entries();
console.log(entries[0].text); // displays ཀ

// Entry at row 1 column 1. Display the tibetan character
const entry = entry(1, 1);
console.log(entry.text); // displays ཀ

// First row, contains 4 entries. Display the first tibetan character
const firstRow = row(1);
console.log(firstRow[0].text); // displays ཀ

// Multiple rows. Display the first tibetan character
const rows = row([1, 2, 8]);
console.log(rows[0][0].text); // displays ཀ

// First column, contains 8 entries. Display the first tibetan character
const firstColumn = col(1);
console.log(firstColumn[0].text); // displays ཀ

// Multiple columns. Display the first tibetan character
const columns = col([1, 2, 4]);
console.log(columns[0][0].text); // displays ཀ
```

Functions:
* entries() : [entry]
* entry(int: row, int: col) : entry
* row(int: row | [int]: rows) : [entry]
* col(int: col | [int]: cols) : [entry]

An entry contains:
```
{
  row: <integer>,
  col: <integer>,
  text: <string>
}
```

## Authors

* **Christoffer Nawang Aarøy Thondrup** - [ChristofferThondrup](https://github.com/awakephoenix)