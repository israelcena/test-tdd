/* eslint-disable */
var expect = require("chai").expect;
var calc = require("../src/calc");

describe("Calculadora", () => {
  // smoke tests
  describe("Smoke tests", () => {
    it("Should exist the `calc`", () => {
      expect(calc).to.exist;
    });

    it("Should exist the method `sum`", () => {
      expect(calc.sum).to.exist;
      expect(calc.sum).to.be.a.function;
    });

    it("Should exist the method `sub`", () => {
      expect(calc.sub).to.exist;
      expect(calc.sub).to.be.a.function;
    });

    it("Should exist the method `mul`", () => {
      expect(calc.mul).to.exist;
      expect(calc.mul).to.be.a.function;
    });

    it("Should exist the method `div`", () => {
      expect(calc.div).to.exist;
      expect(calc.div).to.be.a.function;
    });
  });

  describe("Sum", () => {
    it("should return 4 when `sum (2,2)`", () => {
      expect(calc.sum(2,2)).to.be.equal(4);
    });
  });

  describe("Sub", () => {
    it("should return 4 when `sub (6,2)`", () => {
      expect(calc.sub(6,2)).to.be.equal(4);
    });

    it("should return -4 when `sub (2,6)`", () => {
      expect(calc.sub(2,6)).to.be.equal(-4);
    });
  });

  describe("Mult", () => {
    it("should return 4 when `mul (2,2)`", () => {
      expect(calc.mul(2,2)).to.be.equal(4);
    });
  });

  describe("Div", () => {
    it("should return 1 when `div (2,2)`", () => {
      expect(calc.div(2,2)).to.be.equal(1);
    });

    it("should return `Não é possível divisão por 0` when divide by 0", () => {
      expect(calc.div(2,0)).to.be.a.string('Não é possível divisão por 0');
    });
  });

});
