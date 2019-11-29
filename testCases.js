const assert =  require('assert');
const operations = require('./operations.js');


describe('Array', function() {
    describe('#indexOf()', function() {
      it('should return -1 when the value is not present', function() {
        assert.equal([1, 2, 3].indexOf(4), -1);
      });
    });
  });


  it('The sum of two values ', () => {
    assert.equal(operations.add(5 ,9), 14);
  });

  it('Sum of two negative values', () =>{
    assert.equal(operations.add(-2, -2), -4);
  });

  it('Sum of minus value', () =>{
    assert.equal(operations.substract(60, 3), 57);
  });

  it('Multiplication of two values', () =>{
    assert.equal(operations.multiply(16, 12), 192);
  });

  it('Devide two number', () =>{
    assert.equal(operations.divide(20, 2), 10);
  });

  it('String validation and number check', () => {
    assert.equal(operations.validateNumbers( 'Adit', 2 ), false);
  });

  it('String validation and number check', () => {
    assert.equal(operations.validateNumbers( 3, 'Kadir' ), false);
  });

  it('String validation and number check', () => {
    assert.equal(operations.validateNumbers( 5, 7 ), true);
  });


  // it('should return true', ()=>{
//   assert.equal(true, true);
// })

