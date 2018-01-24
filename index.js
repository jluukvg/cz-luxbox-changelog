"format cjs";

var engine = require('./engine');
var luxboxCommitTypes = require('./luxbox-commit-types.json');

module.exports = engine({
  types: luxboxCommitTypes.types
});
