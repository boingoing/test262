// Copyright (c) 2014 Matthew Meyers. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    Array.prototype.find shouldn't throw a TypeError if
    IsCallable(predicate) is true; a function is callable
features: [Array#find]
---*/


[].find(function () {});

