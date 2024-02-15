/* eslint-disable */
module.exports = {
  sum(a, b) {
    return a + b;
  },
  sub(a, b) {
    return a - b;
  },
  mul(a, b) {
    return a * b;
  },
  div(a, b) {
    return (b === 0) ? 'Não é possível divisão por 0' : a / b
  },
};
