// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.8-2-a-1
description: Object.seal - 'P' is own data property
includes: [propertyHelper.js]
---*/

var obj = {};

obj.foo = 10; // default [[Configurable]] attribute value of foo: true

assert(Object.isExtensible(obj));
Object.seal(obj);

verifyNotConfigurable(obj, "foo");
assert.sameValue(obj.foo, 10);
