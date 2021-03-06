// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 11.4.1-5-a-17-s
description: >
    Strict Mode - SyntaxError is thrown when deleting a variable of
    type Arguments
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase() {
       try {
            eval("var argObj = (function (a, b) { delete arguments; }(1, 2));");

            return false;
        } catch (e) {
            return e instanceof SyntaxError;
        }
    }
runTestCase(testcase);
