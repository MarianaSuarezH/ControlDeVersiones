const test = require('node:test');
const assert = require('node:assert/strict');
function suma(a, b) {
  return a + b;
}
test('suma 8 + 3 = 11', () => {
  assert.equal(suma(8, 3), 11);
});
