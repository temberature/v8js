var describe = require('mocha').describe;
var it = require('mocha').it;
var expect = require('chai').expect;
var CustomSet = require('../src/Set');
var profile = require('./utils').profile;
var generateArr = require('./utils').generateArr;
var log = console.log;

describe('#Set', function() {
  it('unique value', function() {
    var a = generateArr(10);
    log(a);
    var s = new CustomSet(a), t = new Set(a);
    log(s, t);
    expect(s.has(2)).to.equal(t.has(2));
    expect(s.size).to.equal(t.size);
  });
});
