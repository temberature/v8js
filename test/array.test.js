var describe = require('mocha').describe;
var it = require('mocha').it;
var expect = require('chai').expect;
var customArray = require('../src/array');

describe('Array', function() {
  var a1 = new customArray(4, 5, 1),
    a2 = [4, 5, 1];

  describe('#sort', function() {
    it('array sort default small to big', function() {
      var source = [].slice.call(a1.sort(), 0, a1.length);
      var target = a2.sort();
      expect(source).to.eql(target);
    });
  });
  describe('#indexOf', function() {
    it('no exists should return -1', function() {
      var n = 5;
      expect(indexOf(a1)).to.equal(a2.indexOf());
    });
  });
});
