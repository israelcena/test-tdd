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
});
