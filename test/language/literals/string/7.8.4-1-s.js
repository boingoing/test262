// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 7.8.4-1-s
description: >
    A directive preceeding an 'use strict' directive may not contain
    an OctalEscapeSequence
includes: [runTestCase.js]
---*/

function testcase()
{
  try 
  {
    eval(' "asterisk: \\052" /* octal escape sequences forbidden in strict mode*/ ; "use strict";');
    return false;
  }
  catch (e) {
    return (e instanceof SyntaxError);
  }
 }
runTestCase(testcase);
