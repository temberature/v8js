var describe = require('mocha').describe;
var it = require('mocha').it;
var expect = require('chai').expect;
var assign = require('../src/Object').assign;
var create = require('../src/Object').create;
var profile = require('./utils').profile;

describe('#Object', function() {
  it('assgin return merge object', function() {
    var t1 = {
      a: 1,
      b: 2
    };
    var t2 = {
      a: 1,
      b: 2
    };
    var s = {
      a: 1,
      b: 1
    };

    profile(
      function() {
        Object.assign(t1, s);
      },
      function() {
        assign(t2, s);
      },
      'Object.assgin'
    );
    expect(assign(t2, s)).to.eql(Object.assign(t1, s));
  });
  it('create return new type Object', function() {
    var o = {};
    var i1 = create(o), i2 = Object.create(o);
    expect(o.isPrototypeOf(i1)).to.equal(o.isPrototypeOf(i2));
  });
});
