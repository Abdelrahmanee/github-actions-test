const assert = require("node:assert/strict");
const test = require("node:test");

const { greet } = require("./app");

test("greet returns a default greeting", () => {
  assert.equal(greet(), "Hello, World!");
});

test("greet returns a personalized greeting", () => {
  assert.equal(greet("Codex"), "Hello, Codex!");
});
