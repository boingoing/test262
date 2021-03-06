// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.21-7-1
description: >
    Array.prototype.reduce returns initialValue if 'length' is 0 and
    initialValue is present (empty array)
includes: [runTestCase.js]
---*/

function testcase() {
  function cb(){}
  
  try {
    if([].reduce(cb,1) === 1)
      return true;
  }
  catch (e) {  }  
 }
runTestCase(testcase);
