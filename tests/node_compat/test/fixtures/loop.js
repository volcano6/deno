// deno-fmt-ignore-file
// deno-lint-ignore-file

// Copyright Joyent and Node contributors. All rights reserved. MIT license.
// Taken from Node 23.9.0
// This file is automatically generated by `tests/node_compat/runner/setup.ts`. Do not modify this file manually.

var t = 1;
var k = 1;
console.log('A message', 5);
while (t > 0) {
  if (t++ === 1000) {
    t = 0;
    console.log(`Outputted message #${k++}`);
  }
}
process.exit(55);
