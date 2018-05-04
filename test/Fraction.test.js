var describe = require('mocha').describe;
var it = require('mocha').it;
var expect = require('chai').expect;
var makeRat = require('../src/Fraction').makeRat;
var addRat = require('../src/Fraction').addRat;
var profile = require('./utils').profile;

describe('#Fraction', function() {
  it('fraction addition', function() {
    var x1 = makeRat(1, 3);
    var x2 = makeRat(1, 3);
    var x3 = makeRat(1, 3);
    var z = addRat(x1, x2, x3);
    console.log(z);
    expect(z.x).to.equal(9);
    expect(z.y).to.equal(9);
  });
});
