"use strict";

var control = require("redot-message-control");

/* `redot-lint`.  This adds support for ignoring stuff from
 * messages (`// lint ignore`).
 * All rules are in their own packages and presets. */
module.exports = function lint() {
  this.use(lintMessageControl);
};

function lintMessageControl() {
  return control({ name: "lint", source: "redot-lint" });
}
