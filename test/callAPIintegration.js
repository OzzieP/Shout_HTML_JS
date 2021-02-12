const sendToAPI = require('../callAPI.js');

QUnit.module('sendToAPI');

QUnit.test('sendToAPI', assert => {
  assert.equal(sendToAPI(), true, "true");
});