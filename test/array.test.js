var describe = require('mocha').describe;
var it = require('mocha').it;
var expect = require('chai').expect;
var customArray = require('../src/array');
var profile = require('./utils').profile;

describe('Array', function() {
  var a2 = generateArr(10000000);
  var a1 = new customArray(a2);
  // console.log(a1, a2);

  // describe('#sort', function() {
  //   profile(function () {
  //     a1.sort();
  //   }, function() {
  //     a2.sort();
  //   }, 'sort');

  //   it('array sort default small to big', function() {
  //     var r1 = [].slice.call(a1.sort(), 0, a1.length);
  //     var r2 = a2.sort();
  //     expect(r1).to.eql(r2);
  //   });
  // });
  describe('#indexOf', function() {
    profile(function () {
      a1.indexOf(500);
    }, function() {
      a2.indexOf(500);
    }, 'indexOf');

    it('no exists should return -1', function() {
      var n = 0;
      var r1 = a1.indexOf(n);
      var r2 = a2.indexOf(n);
      expect(r1).to.equal(r2);
    });
    it('exist return index', function() {
      var n = 5;
      var r1 = a1.indexOf(n);
      var r2 = a2.indexOf(n);
      expect(r1).to.equal(r2);
    });
  });
});

function generateArr(count) {
  var arr = new Array(count);
  for (var i = 0; i < count; i++) {
    arr[i] = Math.floor(Math.random() * count * 2);
  }
  return arr;
}


