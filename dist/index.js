"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.entries = entries;
exports.entry = entry;
exports.row = row;
exports.col = col;

var _alphabet = _interopRequireDefault(require("./alphabet"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function entries() {
  return _alphabet.default;
}

function entry(row, col) {
  var result = _alphabet.default.filter(function (char) {
    return char.row === row && char.col === col;
  });

  return result.length === 1 ? result[0] : null;
}

function row(rows) {
  if (Number.isInteger(rows)) {
    return _alphabet.default.filter(function (char) {
      return char.row === rows;
    });
  }

  if (Array.isArray(rows)) {
    var result = [];
    rows.forEach(function (row) {
      result.push(_alphabet.default.filter(function (char) {
        return char.row === row;
      }));
    });
    return result;
  }

  throw "The rows parameter is not a number or a list";
}

function col(cols) {
  if (Number.isInteger(cols)) {
    return _alphabet.default.filter(function (char) {
      return char.col === cols;
    });
  }

  if (Array.isArray(cols)) {
    var result = [];
    cols.forEach(function (col) {
      result.push(_alphabet.default.filter(function (char) {
        return char.col === col;
      }));
    });
    return result;
  }

  throw "The cols parameter is not a number or a list";
}