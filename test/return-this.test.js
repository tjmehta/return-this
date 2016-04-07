var describe = global.describe
var it = global.it

var expect = require('chai').expect

var returnThis = require('../index.js')

describe('return-this', function () {
  it('should return this', function (done) {
    var ctx = {}
    expect(returnThis.call(ctx)).to.equal(ctx)
    done()
  })
})
