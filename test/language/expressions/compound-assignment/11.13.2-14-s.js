// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 11.13.2-14-s
description: >
    ReferenceError isn't thrown if the LeftHandSideExpression of a Compound
    Assignment operator(%=) evaluates to a resolvable reference
includes: [runTestCase.js]
---*/

function testcase() {
        var _11_13_2_14 = 5
        _11_13_2_14 %= 2;
        return _11_13_2_14 === 1;
    }
runTestCase(testcase);
