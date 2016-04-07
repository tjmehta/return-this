# return-this [![Build Status](https://travis-ci.org/tjmehta/return-this.svg)](https://travis-ci.org/tjmehta/return-this) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
A function that simply returns `this`. Useful as a chainable noop stub.

# Installation
```bash
npm i --save return-this
```

# Usage
```js
var returnThis = require('return-this')

var x = new Animal()

animal.foo = returnThis
animal.bar = returnThis

animal.foo().bar()
```

# License
MIT
