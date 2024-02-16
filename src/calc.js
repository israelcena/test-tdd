const calc = {
  sum: (a, b) => a + b,
  sub: (a, b) => a - b,
  mul: (a, b) => a * b,
  div: (a, b) => ((b === 0) ? 'Não é possível divisão por 0' : a / b),
};

export default calc;
